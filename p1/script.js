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
            imageAlt: ''
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
                this.rounds.push({ number: this.gameNumber, winner: this.winner })
            },
            //determine the outcome of the game
            rockPaperScissors: function(playerSelection, computerSelection) {
                if (playerSelection == computerSelection) {
                    this.outcome = 'Tie';
                    this.winner = 'Tie';
                    this.imageSource = 'images/tie.jpg'
                    this.imageAlt = 'tie'
                }
                else if (playerSelection == 'Rock') {
                    if (computerSelection == 'Scissors') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/rock-winner.png'
                        this.imageAlt = 'rock'
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/paper-winner.png'
                        this.imageAlt = 'paper'
                    }
                }
                else if (playerSelection == 'Paper') {
                    if (computerSelection == 'Rock') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/paper-winner.png'
                        this.imageAlt = 'paper'
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/scissors-winner.png'
                        this.imageAlt = 'scissors'
                    }
                }
                else if (playerSelection == 'Scissors') {
                    if (computerSelection == 'Paper') {
                        this.outcome = playerSelection;
                        this.winner = 'Player';
                        this.imageSource = 'images/scissors-winner.png'
                        this.imageAlt = 'scissors'
                    }
                    else {
                        this.outcome = computerSelection;
                        this.winner = 'Computer';
                        this.imageSource = 'images/rock-winner.png'
                        this.imageAlt = 'rock'
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