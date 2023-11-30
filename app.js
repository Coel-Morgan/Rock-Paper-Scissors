
/**
 * @type HTMLCanvasElement
 */

function computersChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame(playerChoice) {
    const cmpChoice = computersChoice();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    console.log(`Player's Choice: ${playerChoice}`);
    console.log(`Computer's Choice: ${cmpChoice}`);
    console.log("");

    var img_rock_selected = document.querySelector('#rock');
    var img_rock_hover_selected = document.querySelector('#rock_hover');

    var img_paper_selected = document.querySelector('#paper');
    var img_paper_hover_selected = document.querySelector('#paper_hover');

    var img_scissors_selected = document.querySelector('#scissors');
    var img_scissors_hover_selected = document.querySelector('#scissors_hover');

    if (playerChoice === "Rock"){
        img_rock_selected.src = `Images/Rock (Selected).png`;
        img_rock_hover_selected.src = `Images/Rock (Selected).png`;

    } else if (playerChoice === "Paper"){
        img_paper_selected.src = `Images/Paper (Selected).png`;
        img_paper_hover_selected.src = `Images/Paper (Selected).png`;

    } else if (playerChoice === "Scissors"){
        img_scissors_selected.src = `Images/Scissors (Selected).png`;
        img_scissors_hover_selected.src = `Images/Scissors (Selected).png`;
    }

    showCompChoice(cmpChoice);

    // ---------------------- Decides Winner --------------------
    // Computer chooses Rock
    if (cmpChoice === "Rock" && playerChoice === "Scissors") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("You Lose!", canvas.width / 2, canvas.height / 2 - 80 );
        console.log("You Lose!");
        console.log("");

    } else if (cmpChoice === "Rock" && playerChoice === "Rock") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("It's a draw!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("It's a draw!");
        console.log("");
    } else if (cmpChoice === "Rock" && playerChoice === "Paper") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("You Win!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("You Win!");
        console.log("");

    // Computer chooses Paper
    } else if (cmpChoice === "Paper" && playerChoice === "Rock") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("You Lose!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("You Lose!");
        console.log("");
    } else if (cmpChoice === "Paper" && playerChoice === "Paper") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("It's a draw!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("It's a draw!");
        console.log("");
    } else if (cmpChoice === "Paper" && playerChoice === "Scissors") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("You Win!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("You Win!");
        console.log("");

    // Computer chooses Scissors
    } else if (cmpChoice === "Scissors" && playerChoice === "Paper") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("You Lose!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("You Lose!");
        console.log("");
    } else if (cmpChoice === "Scissors" && playerChoice === "Scissors") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("It's a draw!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("It's a draw!");
        console.log("");
    } else if (cmpChoice === "Scissors" && playerChoice === "Rock") {
        ctx.fillRect(0, canvas.height / 2 - 140, canvas.width, 100)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 45px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("You Win!", canvas.width / 2, canvas.height / 2 - 80);
        console.log("You Win!");
        console.log("");
    }
}

var img = document.querySelector('#computer_choice');

function showCompChoice(computerChoice) {
    img.src = `Images/${computerChoice}.png`;
}
