let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector("#you");
const compscorepara = document.querySelector("#comp"); // Corrected selector
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () => {
    console.log("game was drawn");
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "#22213d";
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you won");
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lost");
        msg.innerText = "You lost";
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("userchoice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = false; // Assume user loses by default
        if ((userchoice === "rock" && compchoice === "scissors") ||
            (userchoice === "paper" && compchoice === "rock") ||
            (userchoice === "scissors" && compchoice === "paper")) {
            userwin = true; // If any of these conditions are met, user wins
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userid = choice.getAttribute("id");
        playgame(userid);
    });
});
