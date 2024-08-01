brainfuck compiler stats detection
++++[->++++++++<]>[-<+>>+<]>[-<+>]<++++++++++++++>                                     add characters 32 (space) and 46 (dot) to memory
++++++++++[->+++++++++++<]>[-<+>]<-.--------.++++++++.<...<.                           write "mem;;; " to the screen
[>]                                                                                    go to empty byte to prevent issues
-+[[-]++++++++[>++++++++<-]>-.[-]<]                                                    write a question mark if there is no rollback
-[+                                                                                    if there is rollback do the following:
 +>+[[>++<-]>[<+>-]<<+>]<-.>                                                           get number of bytes and store
 ++++++++<[->>+>+<<<]>>>[-<<<+>>>]<[-<->]+<[>-<[-]]>[                                  if number of bytes is 8:
  [-]++++++++[->+++++++<]>.[-]<                                                        print the number 8
 ]<
 ++++++++++++++++<[->>+>+<<<]>>>[-<<<+>>>]<[-<->]+<[>-<[-]]>[                          if number of bytes is 16:
  [-]++++++[->++++++++<]>+.+++++.[-]<                                                  print the number 1 and 6
 ]<
 ++++++++++++++++++++++++++++++++<[->>+>+<<<]>>>[-<<<+>>>]<[-<->]+<[>-<[-]]>[          if number of bytes is 32:
  [-]+++++[->++++++++++<]>+.-.[-]<                                                     print the number 3 and 2
 ]<<
[-]]                                                                                   end statement (ensuring value is 0 to not loop)
<<<.>>.------------.+++++++++++++++++++++++.<...<.>>>[-]-.+                            show maximum character
<<<.>>---------.-------------.+++++++++++++++++++++.<...<.                             write "obw;;; " to the screen
<+++><[->>>>+<<<<]>>>>                                                                 write 3 to oob and get it back
>+++<[->>+>+<<<]>>>[-<<<+>>>]<[-<->]+<[>-<[-]]>[                                       if cell is 3 then: 
 <<<++.>>>                                                                             print "y"
[-]]<<                                                                                 end
><[->>+>+<<<]>>>[-<<<+>>>]<[-<->]+<[>-<[-]]>[                                          if cell is 0 then: 
 <<<---------.>>>                                                                      print "n"
[-]]<<                                                                                 end
[-]                                                                                    remove value
<<<.>>[-]++++++++++[->++++++++++++<]>[-<+>]<---.-------.-----.<...<.                   print "uni;;; "
>>[>++<-]>[<+>-]<++++++++++++++++++++++++++++++.---------------------------------------------------------------------------------.------------------.+++++++. unicode test for hamburger emoji
<<.>>[-]++++++++++[->++++++++++<]>[-<+>]<.+++++++++++++++++++++.-----------.<...<.>>>  print "dyn;;; "
->+[>+]                                                                                add 1 on all of memory apart from original cell
>[->]                                                                                  remove global incrementation from cells
<----------.                                                                           print "d"
<<.>>+++++++++.++++++.+++++++.<...<.                                                   print "msz;;; "
-[>+]+[[-]+++++++++++++++++++++++++++++++++.[-]>]                                      print first character by the amount of cells in memory
<<                                                                                     end without any trace of what just happened

this brainfuck script will try to detect which settings the compiler uses when ran.
mem: outputs the number of bits per cell number. if there is no numeral output, get the corresponding number of the ascii character.
max: outputs the maximum character possible from a cell as a character. the character should be ÿ if the compiler uses 8 bits.
obw: tries to write into an out-of-bounds area. if the value can be gotten, a "y" will be outputted, otherwise, an "n" will be outputted instead. if the program crashes due to a range error in this state, put a ">" at the start of the program before running and ignore the output.
uni: outputs a series of characters. if the compiler uses UTF-8, the characters will be turned into a hamburger emoji.
dyn: this will make the program go into an infinite loop if the memory is dynamic (pseudo-infinite), or crash (abort) the program if the compiler refuses to warp. if none of those happen and the pointer rolls back, "d" will be outputted.
msz: this part needs "dyn" to output "d", otherwise it will not work. for every cell, an exclamation mark will be outputted, which makes it output exclamation marks with the same length as the length of available cells.

the process may take a while depending of the compiler used.