# Json-Indent
Simple vanilla JavaScript to indent a JSON string for display in variety of situations.  
Script provides a variety of different methods to parse a JSON string and reformat into an indented view suitable for display in a Textare or a DIV. 
For each variant the json string is indented either as JSON or as ARRAY.

The textarea targeted methods use:
```
\n and \t
```
The DIV targeted meethods use:
```
<br> and &nbsp;
```
There are also methods for each context that implement basic colour highlighting.

## Usage
This script contaisn a set of working samples divided into seperate blocks.  
Strip out the method(s) you need and place them into callable functions wthin your code.

## JSON
If you need to convert a JavaScript obecto to JSON:  
let obj = {a:'b',c:'d',e:'f'};  
let json = JSON.toString( obj );
To covert JSON back to object:  
obj = JSON.parse( json );

### Stay Tuned
I'm going to be writing a library to manage 'Indented JSON' within a Textarea that will keep the format in play while allowing editing (adding / removing) of JSON elements. This will eventually include variuous levels error checking.. 

### License
Released with a full Copy Left do as you want MIT license without any warrany or guarantee whatsoever. It works for my intended use though!
Hopefully you will find some use of this...
