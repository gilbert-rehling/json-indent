/*
 * JSON Indent
 * @version      json-indent.js 1001 12/8/20, 8:58 pm  Gilbert Rehling $
 * @package      Vanilla JavaScript
 * @subpackage   json-indent.js
 * @link         https://github.com/gilbert-rehling/json-indent - JSON Indent
 * @copyright    Copyright (c) 2020. Gilbert Rehling of MMFAW. No rights reserved. (www.mfmaw.com)
 * @licence      JSON Indent is an Open Source Project released under the MIT license model.
 * @author       Gilbert Rehling:  gilbert@phpmongoadmin.com (www.gilbert-rehling.com)
 *  json-indent - License conditions:
 *  This web application is available as Free Software and has no implied warranty or guarantee of usability.
 *  See https://www.gnu.org/licenses/license-list.html for information on the MIT License
 */

/**
 * Sample JSON string
 *
 * @type {string}
 */
let str = '{"_id":ObjectId("r32435451dff323r323f3f"),"blog":{"dogs":{"small":"daschund","medium":"cattle dog","big":"great dane"}},"cats":{"furry":"fluffy","scardy":"cat","tv":[{"leo":"lion","clarence":"lion"},{"sylvester":"disney"},"felix","alley"]},"count":7}';

/**
 * Textarea first (\n & \t)
 */
let openB    = 0; // track open braces & brackets ( { & [ )
let textArea = ''; // target for textarea output
let i        = 0; // indexing
for (x in str) {
    if (str[x] === '{' || str[x] === '[') {
        openB += 1;
        textArea += str[x] + '\n';
        for (i = 0; i < openB; i += 1) {
            textArea += '\t';
        }
    }
    else if (str[x] === '}' || str[x] === ']') {
        textArea += '\n';

        if (openB > 0) {
            openB -= 1;
        }
        for (i = 0; i < openB; i += 1) {
            textArea += '\t';
        }
        textArea += str[x];
    }
    else if (str[x] === ',') {
        textArea += str[x] + '\n';

        for (i = 0; i < openB; i += 1) {
            textArea += '\t';
        }
    }
    else {
        textArea += str[x];
    }
}
//console.log(textArea);
// add to textarea
document.getElementById('text-area').value = textArea;

/**
 * To array
 * Tor textarea
 */
openB = 0;
index = 0;
let textArray = '';
for (x in str) {
    if (str[x] === '{' || str[x] === '[') {
        openB += 1;
        textArray += 'array(\n';
        for (i = 0; i < openB; i += 1) {
            textArray += '\t';
        }
    }
    else if (str[x] === '}' || str[x] === ']') {
        textArray += '\n';

        if (openB > 0) {
            openB -= 1;
        }
        for (i = 0; i < openB; i += 1) {
            textArray+= '\t';
        }
        textArray += ')';
    }
    else if (str[x] === ',') {
        textArray += str[x] + '\n';

        for (i = 0; i < openB; i += 1) {
            textArray += '\t';
        }
    }
    else if (str[x] === ":") {
        textArray += ' => ';
    }
    else {
        textArray += str[x];
    }
}
//console.log(textArray);
// display
document.getElementById('text-array').value = textArray;

/**
 * For div display (<br> and TAB (&nbsp;&nbsp;&nbsp;&nbsp;)
 * Leave as JSON
 */
openB = 0;
index = 0;
let divArea = '';
let tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

for (x in str) {
    let plus = (parseInt(x) + 1);

    if (str[x] === '{' || str[x] === '[') {
        openB += 1;
        divArea += str[x] + '<br>';
        for (i = 0; i < openB; i += 1) {
            divArea += tab;
        }
    }
    else if (str[x] === '}' || str[x] === ']') {
        divArea += '<br>';

        if (openB > 0) {
            openB -= 1;
        }
        for (i = 0; i < openB; i += 1) {
            divArea += tab;
        }
        divArea += str[x];
    }
    else if (str[x] === ',') {
        divArea += str[x] + '<br>';

        for (i = 0; i < openB; i += 1) {
            divArea += tab;
        }
    }
    else {
        divArea += str[x];
    }
}
//console.log(divArea);
// display
document.getElementById('div-area').innerHTML = divArea;

/**
 * For DIV display
 * To array format
 */
openB = 0;
index = 0;
let divArray = '';

for (x in str) {
    if (str[x] === '{' || str[x] === '[') {
        openB += 1;
        divArray += 'array(<br>';
        for (i = 0; i < openB; i += 1) {
            divArray += tab;
        }
    }
    else if (str[x] === '}' || str[x] === ']') {
        divArray += '<br>';

        if (openB > 0) {
            openB -= 1;
        }
        for (i = 0; i < openB; i += 1) {
            divArray += tab;
        }
        divArray += ')';
    }
    else if (str[x] === ',') {
        divArray += str[x] + '<br>';

        for (i = 0; i < openB; i += 1) {
            divArray += tab;
        }
    }
    else if (str[x] === ":") {
        divArray += ' => ';
    }
    else {
        divArray += str[x];
    }
}
// console.log(divArray);
// display
document.getElementById('div-array').innerHTML = divArray;

/**
 * For div display with color highlights (<br> and TAB (&nbsp;&nbsp;&nbsp;&nbsp;)
 * Leave as JSON
 */
openB = 0;
index = 0;
let divAreaH = '';
for (x in str) {
    let plus = (parseInt(x) + 1);

    if (str[x] === '{' || str[x] === '[') {
        openB += 1;
        divAreaH += '<span style="color: green">' + str[x] + '</span>' + '<br>';
        for (i = 0; i < openB; i += 1) {
            divAreaH += tab;
        }
    }
    else if (str[x] === '}' || str[x] === ']') {
        divAreaH += '<br>';

        if (openB > 0) {
            openB -= 1;
        }
        for (i = 0; i < openB; i += 1) {
            divAreaH += tab;
        }
        divAreaH += '<span style="color: green">' + str[x] + '</span>';
    }
    else if (str[x] === '(' || str[x] === ')') {
        divAreaH += '<span style="color: blue">' + str[x] + '</span>';
    }
    else if (str[x] === ',') {
        divAreaH += '<span style="color: green">' + str[x] + '</span>' + '<br>';

        for (i = 0; i < openB; i += 1) {
            divAreaH += tab;
        }
    }
    else if (str[x] === ':') {
        divAreaH += '<span style="color: green">' + str[x] + '</span>';
    }
    else if (str[x] === '"') {
        divAreaH += '<span style="color: #800000">' + str[x] + '</span>';
    }
    else {
        divAreaH += '<span style="color: red">' + str[x] + '</span>';
    }
}
//console.log(divArea);
// display
document.getElementById('div-area-highlight').innerHTML = divAreaH;

/**
 * For DIV display
 * To array format
 */
openB = 0;
index = 0;
let divArrayH = '';
for (x in str) {
    if (str[x] === '{' || str[x] === '[') {
        openB += 1;
        divArrayH += '<span style="color: blue">array(</span><br>';
        for (i = 0; i < openB; i += 1) {
            divArrayH += tab;
        }
    }
    else if (str[x] === '}' || str[x] === ']') {
        divArrayH += '<br>';

        if (openB > 0) {
            openB -= 1;
        }
        for (i = 0; i < openB; i += 1) {
            divArrayH += tab;
        }
        divArrayH += '<span style="color: blue">)</span>';
    }
    else if (str[x] === ',') {
        divArrayH += '<span style="color: green">' + str[x] + '</span>' + '<br>';

        for (i = 0; i < openB; i += 1) {
            divArrayH += tab;
        }
    }
    else if (str[x] === '(' || str[x] === ')') {
        divArrayH += '<span style="color: green">' + str[x] + '</span>';
    }
    else if (str[x] === ":") {
        divArrayH += ' <span style="color: green">=></span> ';
    }
    else if (str[x] === '"') {
        divArrayH += '<span style="color: #800000">' + str[x] + '</span>';
    }
    else {
        divArrayH += '<span style="color: red">' + str[x] + '</span>';
    }
}
// console.log(divArrayH);
// display
document.getElementById('div-array-highlight').innerHTML = divArrayH;
