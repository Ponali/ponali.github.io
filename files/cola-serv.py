import random
import os
import scratchattach as scratch3
import numpy as np
import pydub
import time

# go to the bottom of the script to go to the main script.

# functions

def aread(f, normalized=False):
    """MP3 to numpy array"""
    a = pydub.AudioSegment.from_mp3(f)
    y = np.array(a.get_array_of_samples())
    if a.channels == 2:
        y = y.reshape((-1, 2))
    if normalized:
        return a.frame_rate, np.float32(y) / 2**15
    else:
        return a.frame_rate, y

def awrite(f, sr, x, normalized=False):
    """numpy array to MP3"""
    channels = 2 if (x.ndim == 2 and x.shape[1] == 2) else 1
    if normalized:  # normalized array - each item should be a float in [-1, 1)
        y = np.int16(x * 2 ** 15)
    else:
        y = np.int16(x)
    song = pydub.AudioSegment(y.tobytes(), frame_rate=sr, sample_width=2, channels=channels)
    song.export(f, format="mp3", bitrate="320k")


conn = ""
def initSender(eu):
    global conn
    print("initiating sender")
    # eu = input("Connect to the european server? (y/n)")=="y"
    # conn = scratch3.connect_tw_cloud(input("Specify project id: "))
    wsid="wss://clouddata.turbowarp.org/"
    if eu:
        wsid="wss://clouddata-eu.turbowarp.org/"
    conn = scratch3.TwCloudConnection(project_id = "361524240655680", username="Jiyd", cloud_host=wsid)
    print("done init")

def sendDataValues(vals,metadataKeep,metadata):
    timestart=time.time()
    data = str(random.randint(0,9))+str(random.randint(0,9))
    a=str(sample_rate)
    for z in range(0,5-len(a)):
        data=data+"0"
    data=data+a
    a=str(bits)
    for z in range(0,2-len(a)):
        data=data+"0"
    data=data+a
    a=str(len(vals))
    for z in range(0,4-len(a)):
        data=data+"0"
    data=data+a
    for j in range(0,len(vals)):
        a=str(int(vals[j]))
        for z in range(0,len(str(bitmax))-len(a)):
            data=data+"0"
        data=data+a
    if useMetaData:
        data=data+"1"
        if metadataKeep:
            data=data+"0"
        else:
            data=data+"1"
        b = str(metadata[0])
        for y in [ord(c) for c in b]:
            a = str(y)
            for z in range(0,3-len(a)):
                data=data+"0"
            data=data+a
        data=data+"000"
        b = str(metadata[1])
        for y in [ord(c) for c in b]:
            a = str(y)
            for z in range(0,3-len(a)):
                data=data+"0"
            data=data+a
        data=data+"000"
        b = str(metadata[2])
        for y in [ord(c) for c in b]:
            a = str(y)
            for z in range(0,3-len(a)):
                data=data+"0"
            data=data+a
    else:
        data=data+"0"
    # print("Made data value in "+str(time.time()-timestart)+" seconds")
    while (time.time()-timestart)<0.1:
        pass # wait
    try:
        if len(str(data))>10000:
            f = open("chnkfail.txt", "w")
            f.write("Error text:\nChunk length is more than 10 thousand characters. To avoid this, please reduce the sample rate.\n\nChunk data: "+str(data))
            f.close()
            print("/!\\ The chunk size is more than 10 thousand characters. A version with this limit has been sent instead, meaning the chunk is incomplete, with an invalid/unset metdata. For more information, check the last 3 lines in chnkfail.txt\n\n")
        conn.set_var("Station "+str(stationNum),str(data)[:10000])
    except Exception as error:
        f = open("chnkfail.txt", "a")
        f.write("Error text:\n"+str(error)+"\n\nChunk data: "+str(data)+"\n\n")
        f.close()
        print("Internet may have been cut! This mostly happens when the server tries to shut down / go to sleep mode.")
        print("The chunk data was not sent, so new information is accessible in chnkfail.txt.\n\n")

def useSender(file):
    global conn
    os.system("cls")
    print("Converting and sending "+file+"...")
    os.system("del use.mp3 /q")
    os.system('cmd /c ffmpeg -v quiet -stats -i "soundtrack/'+file+'" -ac 1 -ar '+str(sample_rate)+' "use.mp3"') # convert to an usable mp3 file
    vals=aread("use.mp3",True) # get float data
    vals=np.round(((aread("use.mp3",True)[1]+1)/2)*bitmax) # turn values into supported integers
    awrite("preview.mp3",sample_rate,np.round((vals/bitmax)*0b111111111111111)) # make a preview file

    # this is where the metadata is set: the first string is the title, second is the station name, third is the author.
    metadata = [file.replace(".mp3","")[file.find(" ")+1:],"Minecraft soundtrack - testing server","C418 - @Ponali"] # you can change those values to whatever you want. if you want to use the title of the mp3 file directly, use the "file" variable

    os.system("cls")
    print("title: "+metadata[0])
    print("station name: "+metadata[1])
    print("author: "+metadata[2])
    print("file used: "+file)
    vallen=int(sample_rate/10)
    print("len: "+str(len(vals)))

    # sends values of the mp3 file into chunks with a length as the same as the variable "vallen".
    for h in range(0,int(len(vals)/vallen)):
        valuesToSend=[]
        i = h*vallen
        for j in range(i,vallen+i):
            valuesToSend.append(vals[j])
        sendDataValues(valuesToSend,h<10,metadata) # second parameter is a "keep metadata" condition
        print("time: "+str(h)+"/"+str(int(len(vals)/vallen)),end="\r") # the \r character moves the pointer to the left side of the screen so the last line can be erased.

# main settings, you can change these to whatever you want. please do not change a variable if you don't know its purpose.
sample_rate = 22050 # audio sample rate. due to some pydub shenanigans, the sample rate you can use may need to be a supported one (800,11025...44100,48000). if you want metadata, i recommend you use 22050Hz, or, 32000Hz without metadata. Uses Hz and not kHz.
stationNum = 0 # if you are actually making your own station, MAKE SURE TO CHANGE THIS!
useMetaData=True
useEUServer=False # the european server isn't the default server used in turbowarp, but it is possible to connect to it

# experimental settings
bits = 8 # changing the bits is highly experimental and may not work all the time. change this at your own risk.

# initialisation
bitmax = eval("0b"+"1"*bits)
initSender(useEUServer)

# main script (to use for random mp3s from the "soundtrack" folder to be played)
files = os.listdir("soundtrack")
choicelast=""
choice=""
while True:
    while choice==choicelast:
        choice = random.choice(files)
    try:
        useSender(choice)
    except KeyboardInterrupt:
        print("Song was skipped using Ctrl-C!")
    choicelast = choice

