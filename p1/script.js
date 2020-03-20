    let app =  new Vue ({
        el: '#app',
        data: {
            playerSelection: '',
            computerSelection: '',
            choices: ['Rock', 'Paper', 'Scissors'],
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
                    this.outcome = 'Tie';
                    this.winner = 'Tie';
                }
                else if (playerSelection == 'Rock') {
                    if (computerSelection == 'Scissors') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                    }
                }
                else if (playerSelection == 'Paper') {
                    if (computerSelection == 'Rock') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                    }
                }
                else if (playerSelection == 'Scissors') {
                    if (computerSelection == 'Paper') {
                        this.outcome = playerSelection;
                        this.winner = 'player';
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
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