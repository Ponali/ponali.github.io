>>++++++++[>++++++++<-]+>[>+<-]>>+++++++>    init
,                                            get number of squares to print
[<<<<                                        loop
    [<+<+>>-]<[>+<-]>                        copy size value at cell 3 to cell 1 (height)
    <<[                                      height loop
       >>[<+>>+<-]>[<+>-]<                   copy size value at cell 3 to cell 2 (width)
       <[>>>.<<<-]                           print @s until width loop done
       >>>>+++.---                           print line break
    <<<<<-]                                  end height loop
    >>>>>.+++.---                            beep and print line break
<<<+#>>>>-]                                  loop end