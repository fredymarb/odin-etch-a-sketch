document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    });

});

function createBoard (size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size ** 2;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        });
        board.insertAdjacentElement('beforeend', div);
    }

}

function getSize () {
    let userInput = prompt("What will be the size of your board?");
    let message = document.querySelector("#message");
    if (userInput == "") {
        message.textContent = "Please enter a Number";
    } else if ( userInput < 1 || userInput > 100) {
        message.textContent = "Please enter a number between 0 and 100";
    } else {
        message.textContent = "Now you can play";
        return userInput;
    }
}