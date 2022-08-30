# Task Diamond Problem

### input:string letter
### output: A diamond that starts and ends at the input letter
### Exmaples: '
<pre>
  A
 B B
C   C
 B B
  A
</pre>
Data structures
<pre>
4, letter, 4
3 letter, 1, letter, 3
2 letter, 3, letter, 2
1, letter, 5 letter, 1
letter,  7, letter
</pre>
Algorithm:


1: get the index of the input number from the alphabet string

2: get the starting spaces = index of input minus 1 get ful length: (spaces * 2) + 1;

3: create first and last line variable: stating spaces + input letter

4: create middle line variable: letter + full length - 2 + letter

5: add first line to the result string

6: start iterating through the splhabet string 
starting at index 1 excude the last digit
  on each iteration: 
  get spaces: starting spaces - current index
  get middel spaces = full length - 2 - (spaces * 2)
  create

7: push onto array: first line,  middle array, middle line, middle array reversed, last line
return that array joined by new lines
</ul>