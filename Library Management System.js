'use strict';

/** 
 * @name: Library Management System.
 * @author: Hesham Alsaqqaf
 * @version lms.0.0.1
 * 
 * @property
 *   Basic features:
 *      1. Add a book
 *      2. Delete a book
 *      3. Borrow a book
 *      4. Return a book
 *      5. View All Books
 *      6. Search for a book
 *      7. Library Statistics
*/

// TODO: Create interface input,output data
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables System
let books = [];
let nextID = 1;

// Show Menu List Functions Library
function showMenu() {
    console.log(`1. Add Book`);
    console.log(`2. Delete Book`);
    console.log(`3. View All Books`);
    console.log(`4. Borrow Book`);
    console.log(`5. Return Book`);
    console.log(`6. Search Book From [Title/Author]`);
    console.log(`7. Library Statistics`);
    console.log(`8. Exit System`);
    console.log("=====================================");

    rl.question("Choose Numbers: 1 To 8: ", (choice) => {
        switch (choice) {
            case '1': addBook();
                break;
            case '2': deleteBooks();
                break;
            case '3': viewAllBook();
                break;
            case '4': borrowBook();
                break;
            case '5': returnBook();
                break;
            case '6': searchBooks();
                break;
            case '7': libraryStatistics();
                break;
            case '8': rl.close();
                console.log(`🖐️  Goodbye, We Are Happy For You.`);
                console.log("=====================================");
                break;
            default:
                console.log(`❌ An Error Occurred Where You Entered A Number That Is Not In The List!`);
                console.log("=====================================");
                showMenu();
        }
    });
}

// Add Book To Library
function addBook() {
    rl.question("Enter Title Book With String: ", (title) => {
        rl.question("Enter Author Book With String: ", (author) => {
            rl.question("Enter Year Book With Number: ", (year) => {
                const convertNumbers = parseInt(year);
                const createBook = {
                    id: nextID++,
                    title,
                    author,
                    year: convertNumbers,
                    isBorrowed: false,
                };
                books.push(createBook);
                // console.log("Array Books:", books);
                console.log(`✅ Book Added successfully Title: "📙 ${createBook.title} 📙"`);
                console.log("---------------------------------------------------");
                showMenu();
            });
        });
    });
}

// View All Books From Library
function viewAllBook() {
    console.log("------------------------------------------------------------------------------------------------------------");
    books.forEach(book => {
        console.log(`ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Publication Date: ${book.year} | Status This Book: ${book.isBorrowed ? "Not Allowed Borrowed ❌" : " Allowed For Borrowing ✅"}`);
    });
    console.log("------------------------------------------------------------------------------------------------------------");
    showMenu();
}

// Delete Books From Library
function deleteBooks() {
    rl.question("Enter ID Numbers Form Book:", (idBook) => {
        const index = books.findIndex(function (book) {
            return book.id === parseInt(idBook);
        });
        if (index !== -1) {
            books.splice(index, 1);
            console.log(`✅ Book deleted successfully ID [${idBook}], Index [${index}]`);
        } else {
            console.log(`❌ Book number does not exist or is incorrect ID ${idBook}, Index ${index}`);
        }
        console.log("---------------------------------------------------");
        showMenu();
    });
}

// Search Books From Library
function searchBooks() {
    rl.question("Enter A Keyword For The Book Title OR Author: ", (keyword) => {
        const resultSearch = books.filter(function (book) {
            return book.title.toLowerCase().includes(keyword.toLowerCase()) ||
                book.author.toLowerCase().includes(keyword.toLowerCase());
        });
        if (resultSearch.length > 0) {
            let countBooks = 0;
            resultSearch.forEach(book => {
                countBooks++;
                console.log(`✅ Book Title: "${book.title}", Book Author: "${book.author}"`);
            });
            console.log(`Number of books from search results = [ ${countBooks} ] Books`);
        } else {
            console.log(`❌ Sorry! Not Found Result The ${keyword} Keyword`);
        }
        console.log("---------------------------------------------------");
        showMenu();
    });
}

// Borrow Books From Library 
function borrowBook() {
    rl.question("Enter The Book Number: ", (id) => {
        const book = books.find(function (book) {
            return book.id === parseInt(id);
        });
        if (!book) {
            console.log(`❌ Error!, No Book With This ID.`);
        } else if (book.isBorrowed) {
            console.log(`✋ Sorry! This Book Wasn't Borrowed.`);
        } else {
            book.isBorrowed = true;
            console.log(`✅ Book "${book.title}" Borrowed Successfully!`);
        }
        console.log("---------------------------------------------------");
        showMenu();
    });
}

// Return Books From Library 
function returnBook() {
    rl.question("Enter The Book Number: ", (id) => {
        const book = books.find(book => book.id === parseInt(id));

        if (!book) {
            console.log("❌ Error! No book with this ID.");
        } else if (!book.isBorrowed) {
            console.log("✋ This book wasn't borrowed.");
        } else {
            book.isBorrowed = false;
            console.log(`✅ Book "${book.title}" Returned Successfully!`);
        }
        console.log("---------------------------------------------------");
        showMenu();
    });
}

// Library Statistics
function libraryStatistics() {
    const totalBooks = books.length;
    const borrowedBooks = books.filter((book) => book.isBorrowed).length;

    console.log(`Total Book = ${totalBooks}\nBorrow Book = ${borrowedBooks}\nAvailable Book = ${totalBooks - borrowedBooks}`);
    console.log("---------------------------------------------------");
    showMenu();
}

// TODO: Start System Library
showMenu();
