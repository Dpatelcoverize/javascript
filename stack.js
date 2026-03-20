let stack = [];

while(true) {
    let choice = prompt(
        "1. Push \n 2. Pop \n 3. Peek \n 4. Exit \n Enter choice: "
    );

    if (choice == "1") {
        let value = prompt("Enter value: ");
        stack.push(value);
    }
    else if (choice == "2") {
        alert("Removed: " + stack.pop());
    }
    else if(choice == "3") {
        alert("Top: " + stack[stack.length - 1]);
    }
    else{
        break;
    }
}
console.log("Final Stack: ", stack);