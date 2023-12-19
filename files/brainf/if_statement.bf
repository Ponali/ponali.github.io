brainfuck if (equal) statement (without not)
++++++++                                                                                   set first cell to 8
>++++++++<[->>+>+<<<]>>>[-<<<+>>>]<[-<->]+<[>-<[-]]>[                                      if first cell is 8 then: (edit the number of pluses at the start of the loop to edit the number)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.         print "Q"
[-]]<<                                                                                     end

if you delete the [-] in the last line, the if statement will become something like:
if(cell[0]==cell[1]){
	while(cell[current]!=0){
		print("Q")
	}
}

if not equal statement
+++++++                                            set first cell to 9
>++++++++<[->>+>+<<<]>>>[-<<<+>>>]<[-<->]<[        if first cell is not 9 then:
  >++++++++++[->++++++++++++<]>-.[-]<<             print "w"
[-]]                                               end