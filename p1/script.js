    let app =  new Vue ({
        el: '#app',
        data: {
            playerSelection: '',
            computerSelection: '',
            choices: ['rock', 'paper', 'scissors'],
            winner: ''
        },
        methods: {
            submitSelection: function () {
                if (this.playerSelection) {  
                    console.log(this.playerSelection + ' vs ' + this.computerSelection);
                    this.rockPaperScissors(this.playerSelection, this.computerSelection);
                    console.log('winner: ' + this.winner);
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
                    this.winner = 'tie';
                }
                else if (playerSelection == 'rock') {
                    if (computerSelection == 'scissors') {
                        this.winner = playerSelection;
                    }
                    else {
                        this.winner = computerSelection;
                    }
                }
                else if (playerSelection == 'paper') {
                    if (computerSelection == 'rock') {
                        this.winner = playerSelection;
                    }
                    else {
                        this.winner = computerSelection;
                    }
                }
                else if (playerSelection == 'scissors') {
                    if (computerSelection == 'paper') {
                        this.winner = playerSelection;
                    }
                    else {
                        this.winner = computerSelection;
                    }
                }
            }
        },
        watch: {
            // When playerSelection changes, this function is invoked
            playerSelection: function () {
                this.computerSelection = this.choices[Math.floor(Math.random()*this.choices.length)];
            }
        }
    })