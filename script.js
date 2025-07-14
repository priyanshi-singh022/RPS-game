const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const choices = ['rock', 'paper', 'scissors'];


buttons.forEach(button => {
        button.addEventListener("click", (e) => {
                const human_choice = e.target.value;
                let computer_choice = choices[Math.floor(Math.random() * choices.length)];

                let outcome = "";
                if (computer_choice === human_choice) {
                        outcome = "It's a tie!";
                } else if (
                        (computer_choice === 'rock' && human_choice === 'scissors') ||
                        (computer_choice === 'paper' && human_choice === 'rock') ||
                        (computer_choice === 'scissors' && human_choice === 'paper')
                ) {
                        outcome = "You lose!";
                } else {
                        outcome = "You win!";
                }

                result.textContent = `You: ${human_choice} & Computer : ${computer_choice} || So the result is: ${outcome}`
        })
})


