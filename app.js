let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");


let turnO = true; // Agar Player O ki turn hai to Button p O print hona chahiye same for player X

const wintPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
];



const resetGame = () => {
        turnO = true;
        enabledBoxes();
        msgContainer.classList.add("hide");
};



boxes.forEach((box) => {
        box.addEventListener("click", () => {
                if (turnO) {
                        box.innerText = "O"
                        turnO = false;
                } else {
                        box.innerText = "X"
                        turnO = true;
                }
                box.disabled = true;

                checkWinner();

        });
});


const disabledBoxes = () => {
        for (let box of boxes) {
                box.disabled = true;
        }
}

const enabledBoxes = () => {
        for (let box of boxes) {
                box.disabled = false;
                box.innerText = "";
        }
}

const showWinner = (Winner) => {
        let player = Winner === "O" ? "Player 1" : "Player 2"; // Player 1 is O, Player 2 is X
        msg.innerText = `Congratulations, The Winner Is  ${player}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () => {
        for (let pattern of wintPatterns) {
         let pst1Val = boxes[pattern[0]].innerText;
         let pst2Val = boxes[pattern[1]].innerText;
         let pst3Val = boxes[pattern[2]].innerText; 

if (pst1Val != "" && pst2Val != "" && pst3Val != "") {
        if(pst1Val === pst2Val && pst2Val === pst3Val) {
                showWinner(pst1Val);
        }
}
}
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);