Vue.component('round-detail', {
    data: function () {
        return {
            deleted: false
        }
    },
    template: '#round-detail',
    props: {
        number: {
            type: Number,
            default: 0
        },
        winner: String,
        rounds: []
    },
    methods: {
    }
})    
let app =  new Vue ({
        el: '#app',
        data: {
            playerSelection: '',
            computerSelection: '',
            choices: ['Rock', 'Paper', 'Scissors'],
            winningTool: '',
            losingTool: '',
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
                this.rounds.push({ number: this.gameNumber, winner: this.winner, winningTool: this.winningTool, playerChoice: this.playerSelection, computerChoice: this.computerSelection })
            },
            deleteRound: function (number) {
                this.updateScores(number)
                this.rounds = this.rounds.filter((round) => round.number != number);
            },
            updateScores: function (roundNumber) {
                let deletedRound = this.rounds.find(round => round.number === roundNumber);
                if (deletedRound.winner == 'Player') {
                    this.playerScore = this.playerScore - 1;
                }
                else if (deletedRound.winner == 'Computer') {
                    this.computerScore = this.computerScore - 1;
                }
                else {
                    this.ties = this.ties - 1;
                }
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
            //determine the winningTool of the game
            rockPaperScissors: function(playerSelection, computerSelection) {
                if (playerSelection == computerSelection) {
                    this.winningTool = playerSelection;
                    this.losingTool = computerSelection;
                    this.winner = 'Tie';
                    this.imageSource = 'images/tie.jpg'
                    this.imageAlt = 'Tie'
                    this.ties = this.ties + 1;
                }
                else if (playerSelection == 'Rock') {
                    if (computerSelection == 'Scissors') {
                        this.winningTool = playerSelection;
                        this.losingTool = computerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/rock-winner.jpg'
                        this.imageAlt = 'rock'
                        this.playerScore = this.playerScore + 1;
                    }
                    else {
                        this.winningTool = computerSelection;
                        this.losingTool = playerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/paper-winner.jpg'
                        this.imageAlt = 'paper'
                        this.computerScore = this.computerScore + 1;
                    }
                }
                else if (playerSelection == 'Paper') {
                    if (computerSelection == 'Rock') {
                        this.winningTool = playerSelection;
                        this.losingTool = computerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/paper-winner.jpg'
                        this.imageAlt = 'paper'
                        this.playerScore = this.playerScore + 1;
                    }
                    else {
                        this.winningTool = computerSelection;
                        this.losingTool = playerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/scissors-winner.jpg'
                        this.imageAlt = 'scissors'
                        this.computerScore = this.computerScore + 1;
                    }
                }
                else if (playerSelection == 'Scissors') {
                    if (computerSelection == 'Paper') {
                        this.winningTool = playerSelection;
                        this.losingTool = computerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/scissors-winner.jpg'
                        this.imageAlt = 'scissors'
                        this.playerScore = this.playerScore + 1;
                    }
                    else {
                        this.winningTool = computerSelection;
                        this.losingTool = playerSelection;
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