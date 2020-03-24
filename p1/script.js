Vue.component('round-detail', {
    data: function () {
        return {
            deleted: false
        }
    },
    template: '#round-detail',
    props: {
        // `number` has an expected data type of Number, and it defaults to 0
        number: {
            type: Number,
            default: 0
        },
        // `winner` has an expected data type of String, with no default set
        winner: String,
        rounds: []
    },
    methods: {
        deleteRound: function () {
            this.deleted = true;
        }
    }
})    
let app =  new Vue ({
        el: '#app',
        data: {
            playerSelection: '',
            computerSelection: '',
            choices: ['Rock', 'Paper', 'Scissors'],
            outcome: '',
            gameCompleted: false,
            winner: '',
            gameNumber: 0,
            rounds: [],
            imageSource: '',
            imageAlt: '',
            computerScore: 0,
            playerScore: 0,
            ties: 0
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
            updateRoundDetail: function () {
                this.gameNumber = this.gameNumber + 1;
                this.rounds.push({ number: this.gameNumber, winner: this.winner, winningTool: this.outcome, playerChoice: this.playerSelection, computerChoice: this.computerSelection })
            },
            resetGame: function () {
                this.gameNumber = 0;
                this.rounds = [];
                this.playerScore = 0;
                this.computerScore = 0;
                this.playerSelection = '';
                this.gameNumber = 0;
                this.ties = 0;
            },
            //determine the outcome of the game
            rockPaperScissors: function(playerSelection, computerSelection) {
                if (playerSelection == computerSelection) {
                    this.outcome = 'Tie';
                    this.winner = 'Tie';
                    this.imageSource = 'images/tie.jpg'
                    this.imageAlt = 'Tie'
                    this.ties = this.ties + 1;
                }
                else if (playerSelection == 'Rock') {
                    if (computerSelection == 'Scissors') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/rock-winner.jpg'
                        this.imageAlt = 'rock'
                        this.playerScore = this.playerScore + 1;
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/paper-winner.jpg'
                        this.imageAlt = 'paper'
                        this.computerScore = this.computerScore + 1;
                    }
                }
                else if (playerSelection == 'Paper') {
                    if (computerSelection == 'Rock') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/paper-winner.jpg'
                        this.imageAlt = 'paper'
                        this.playerScore = this.playerScore + 1;
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/scissors-winner.jpg'
                        this.imageAlt = 'scissors'
                        this.computerScore = this.computerScore + 1;
                    }
                }
                else if (playerSelection == 'Scissors') {
                    if (computerSelection == 'Paper') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/scissors-winner.jpg'
                        this.imageAlt = 'scissors'
                        this.playerScore = this.playerScore + 1;
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/rock-winner.jpg'
                        this.imageAlt = 'rock'
                        this.computerScore = this.computerScore + 1;
                    }
                }
                this.updateRoundDetail();
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