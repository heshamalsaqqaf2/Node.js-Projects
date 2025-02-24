'use strict';

let text = "I love coding. Coding is fun and creative. I learn new things every day. My favorite language is JavaScript. I enjoy solving problems and building projects.";
let filteredText = '';

let wordCount = 0;

let currentWord = '';
let wordsStr = '';


for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char !== ' ' && char !== '.' && char !== ',') {
        currentWord += char.toLowerCase();
        filteredText += char;

    } else {
        if (currentWord !== '') {
            wordCount++;

            wordsStr = wordsStr === '' ? currentWord : wordsStr + '|' + currentWord;
            currentWord = '';
        }
    }
}

// Calc Numbers Letters
const originalCharCount = text.length;
const filteredCharCount = filteredText.length;

console.log('Normal Text:', text);
console.log('Filtered Text:', filteredText);

console.log('Words Split [|]:', wordsStr);
console.log('Numbers Words:', wordCount);

console.log('Numbers Letter Text Normal:', originalCharCount);
console.log('Numbers Letter Text Clean:', filteredCharCount);