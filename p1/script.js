    let app =  new Vue ({
        el: '#app',
        data: {
            playerSelection: '',
            computerSelection: '',
            choices: ['rock', 'paper', 'scissors'],
            outcome: '',
            gameCompleted: false,
            winner: ''
        },
        methods: {
            submitSelection: function () {
                if (this.playerSelection) {  
                    this.gameCompleted = false;
                    this.computerSelection = this.choices[Math.floor(Math.random()*this.choices.length)];
                    this.rockPaperScissors(this.playerSelection, this.computerSelection);
                }
                else {
                    console.log('please make a selection');		
                }
            },
            findComputerSelection: function() {
                let randomItem = choices[Math.floor(Math.random()*choices.length)];
                return randomItem.value;
            },
            //determine the outcome of the game
            rockPaperScissors: function(playerSelection, computerSelection) {
                if (playerSelection == computerSelection) {
                    this.outcome = 'tie';
                    this.winner = 'tie';
                }
                else if (playerSelection == 'rock') {
                    if (computerSelection == 'scissors') {
                        this.outcome = playerSelection;
                        this.winner = 'player';
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'computer';
                    }
                }
                else if (playerSelection == 'paper') {
                    if (computerSelection == 'rock') {
                        this.outcome = playerSelection;
                        this.winner = 'player';
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'computer';
                    }
                }
                else if (playerSelection == 'scissors') {
                    if (computerSelection == 'paper') {
                        this.outcome = playerSelection;
                        this.winner = 'player';
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'computer';
                    }
                }
                this.gameCompleted = true;
            }
        },
        watch: {
            // When playerSelection changes, this function is invoked
            playerSelection: function () {
                this.computerSelection = this.choices[Math.floor(Math.random()*this.choices.length)];
                this.gameCompleted = false;
            }
        }
    })