Vue.component('game-feedback', {

})

let app =  new Vue ({
    el: '#app',
    data: {
        mysteryWord: '',
        shuffledWord: '',
        guess: '',
        correct: '',
        playerName: '',
        hint: '',
        error: '',
        feedback:'',
        showResult: 'false',
        correct: false,
        showGame: false,
        lastWord: '',
        level: 'easy',
        noNameError: '',
        easyWords: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ],
        mediumWords: [
            ['license', 'You might have one in your wallet'],
            ['restaurant', 'A nice place to grab a bite to eat'],
            ['recommendation', 'Helps you get the job interview']
        ],
        hardWords: [
            ['brontosaurus', 'Herbivore from a long time ago'],
            ['massachusetts', 'Home of beantown']
        ]
    },
    methods: {
        submitAnswer: function () {
            this.showResult = true;
            if (this.guess == this.mysteryWord) {
                this.feedback = 'You got it! Nice work.'
                this.correct = true
            } else {    
                this.feedback = "Sorry, that's not correct. Please try again."
                this.correct = false
            }
        },
        submitNameAndPlay: function () {
            if (this.playerName) {
                this.noNameError = false;
                this.mysteryWord = this.getRandomWord(this.level);
                this.checkForRepeat(this.level)
                this.showGame = true;
                this.shuffledWord = this.shuffleMysteryWord;
                this.hint = this.getHint(this.level);
                this.feedback = '';
                this.showResult = false;
            }
            else {
                this.noNameError = true;
            }
        },
        reset: function () {
            this.showGame = 'false';
            this.showResult = false;
            this.guess = '';
            this.feedback = '';
            this.correct = false;
            this.lastWord = this.mysteryWord;
        },
        getRandomWord: function (level) {
            if (level == 'easy') {
                return this.easyWords[Math.floor(Math.random() * this.easyWords.length)][0]
            }
            else if ( level == 'medium'){
                return this.mediumWords[Math.floor(Math.random() * this.mediumWords.length)][0]
            }
            else {
                return this.hardWords[Math.floor(Math.random() * this.hardWords.length)][0]
            }
        },
        getHint: function (level) {
            if (level == 'easy') {
                return this.easyWords.find(obj => obj[0] == this.mysteryWord)[1]; 
            }
            else if ( level == 'medium'){
                return this.mediumWords.find(obj => obj[0] == this.mysteryWord)[1]; 
            }
            else {
                return this.hardWords.find(obj => obj[0] == this.mysteryWord)[1]; 
            }         
        },
        checkForRepeat: function () {
            if (this.mysteryWord == this.lastWord)
            {
                this.getRandomWord(this.level);
            }
        }
    },
    mounted: function () {
        this.showGame = 'false';
    },
    computed: {
        shuffleMysteryWord: function () {
            return this.mysteryWord.split('').sort(function(){return 0.5-Math.random()}).join('');
        }
    },
    watch: {
        level: function () {
            if (this.playerName){
                this.submitNameAndPlay();
            }
        },
        playerName: function () {
            if (!this.playerName){
                this.showGame = false
                this.noNameError = true
            }
            this.noNameError = false
        },
        guess: function () {
            this.guess = this.guess.toLowerCase();
        }     
    } 
})