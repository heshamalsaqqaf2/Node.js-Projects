'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tasks = [];
function showMenu() {
    console.log(`1️⃣. Add Tasks`);
    console.log(`2️⃣. Display Tasks`);
    console.log(`3️⃣. Delete Tasks`);
    console.log(`4️⃣. Delete All Tasks`);
    console.log(`5️⃣. Exit`);
    console.log(`===================================`);

    rl.question("Choose Numbers [1 , 5]: ", (choice) => {
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                displayTask()
                break;
            case "3":
                deleteTask();
                break;
            case "4":
                deleteAllTask();
                break;
            case "5":
                console.log("Bye Bye Thank you for using our app 🖐️");
                rl.close();
                break;
            default:
                console.log("🤔 Something Went Wrong!");
                console.log("------------------------------------");
                showMenu();
        }
    });
}

function addTask() {
    rl.question("Add New Task: ", (task) => {
        tasks.push(task);
        console.log(`✅ Task has been added successfully: ${task}`);
        console.log("------------------------------------");
        showMenu();
    });
}

function displayTask() {
    if (tasks.length <= 0) {
        console.log(`Sorry 💔, there are no tasks on the list`);
        console.log("------------------------------------");
        showMenu();
        return;
    }
    else {
        console.log(`📃 All of your current tasks: `);
        tasks.forEach((task, index) => {
            console.log(`✔️  ${index + 1}.${task}`);
        });
        console.log("------------------------------------");
        showMenu();
    }
}

function deleteTask() {
    checkArrayLength();

    rl.question("Enter Number For Task: ", (input) => {
        const indexTasks = parseInt(input) - 1;

        if (indexTasks >= 0 && indexTasks < tasks.length) {
            const deletedTask = tasks.splice(indexTasks, 1);
            console.log(`✅ Task has been deleted successfully: ${deletedTask}`);
            console.log("------------------------------------");
        } else {
            console.log(`❌ Task number does not exist or is incorrect.`);
            console.log("------------------------------------");
        }
        showMenu();
    });
}

function deleteAllTask() {
    checkArrayLength();
    rl.question("💔 Are you sure about the deletion? choose [yes/no]: ", (input) => {
        if (input === "yes") {
            for (let index = tasks.length - 1; index >= 0; index--) {
                tasks.pop(tasks[index]);
            }
            console.log(`✅ All your tasks have been deleted = ${tasks.length}`);
            console.log("------------------------------------");
            showMenu();
        } else {
            showMenu();
        }
    });
}

function checkArrayLength() {
    if (tasks.length <= 0) {
        console.log(`Sorry 💔, there are no tasks on the list`);
        console.log("------------------------------------");
        showMenu();
        return;
    }
}

console.log(`🟡====== WELCOME TODO LIST =====🟡`);
showMenu();