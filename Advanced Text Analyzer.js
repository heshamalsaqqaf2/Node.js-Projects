'use strict';
/**  
 * Todo: Advanced Text
 * The proliferation of digital technologies has revolutionized the way we communicate, work, and learn.
 * Artificial intelligence, machine learning, and blockchain are reshaping industries, while quantum computing promises to unlock unprecedented computational power.
 * However, with these advancements come ethical dilemmas, such as data privacy concerns, algorithmic biases, and the potential for job displacement due to automation.
*/
/**  
 * Todo: Intermediate Text
 * Learning programming is an exciting journey. It requires patience, practice, and problem-solving skills.
 * JavaScript is one of the most popular languages used for web development.
 * With JavaScript, you can create interactive websites and dynamic applications.
 * Many developers start with basic concepts like variables, loops, and functions before moving to advanced topics.
*/
/**  
 * Todo: Simple Text
 * I love coding. Coding is fun and creative. I learn new things every day.
 * My favorite language is JavaScript. I enjoy solving problems and building projects.
*/

let text = "I love coding. Coding is fun and creative. I learn new things every day. My favorite language is JavaScript. I enjoy solving problems and building projects.";

let cleanText = text.split(" ").map(function (element) {
    return element.replace(/[,.]/g, "").toLowerCase();
}).filter(function (element) {
    return element.length > 0; // Remove Spaces Exm => Tab....etc
});

const wordsCount = cleanText.length;
const charactersCount = text.replace(/[.,\s]/g, "").length;

console.log(cleanText);
console.log(`Clean Text: ${cleanText.join("")}`);
console.log("Word Count:", wordsCount);
console.log("Char Count:", charactersCount);

