M=Math,water=y>140,x=water?(x+M.sin(x/10+y/20+t/400)*M.sin(x/15+y/30+t/200)*3):x,y=water?(256-y+M.sin(y/1.5+x/20+t/300)*M.sin(y/5-x/20+t/200)*7):y,bg=M.max(M.min((1-y/256)**(1/2),1),0),bg=(0x80*bg<<16)|(0x40*bg<<8),mask=M.min(M.max(20/(1+3*water)-M.sqrt((x-127.5)**2+(y-127.5)**2)/(3+water*10),0),1),sun=0xff0000+((300-y)<<8),(((bg>>8&255)*(1-mask)+(sun>>8&255)*mask)<<8)|(((bg>>16&255)*(1-mask)+(sun>>16&255)*mask)<<16)