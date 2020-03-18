    let app =  new Vue ({
        el: '#app',
        data: {
            playerSelection: ''
        },
        methods: {
            submitSelection: function () {
                let playerSelection = this.playerSelection;
                //let computerSelection = this.findComputerSelection();
                if (playerSelection) {
                    //let outcome = this.rockPaperScissors(playerSelection, computerSelection)
                    //this.updateWinnersTable(playerSelection, computerSelection, outcome);
                    console.log(playerSelection);
                }
                else {
                    console.log('please make a selection');		
                }
            }
        }
    })