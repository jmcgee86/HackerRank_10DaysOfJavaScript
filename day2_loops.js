'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
 let vowels = []
 let cons = []
 
 for (var i = 0; i<s.length; i++){
     if (s[i] == "a" ||s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u"){
         vowels.push(s[i])
     }else{
         cons.push(s[i])
     }
 }
 
for( var v = 0; v<vowels.length; v++){
    console.log(vowels[v]);
}
for ( var c = 0; c<cons.length; c++){
    console.log(cons[c]);
}
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}