let app =  new Vue ({
    el: '#app',
    data: {
        mysteryWord: '',
        guess: '',
        showHint: true,
        playerName: '',
        hint: '',
        correct: false,
        feedback: '',
        showGame: false,
        showResult: false,
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ]
    },
    methods: {
        submitAnswer: function () {
            this.showResult = true;
            if (this.guess == this.mysteryWord) {
                this.feedback = 'You got it! Nice work.'
                this.correct = true
            } else {    
                this.feedback = 'Sorry, thats not correct. Please try again.'
                this.correct = false
            }
        },
        submitNameAndPlay: function () {
            this.showGame = true;
        },
        reset: function () {
            this.showGame = 'false';
            this.showResult = false;
            this.guess = '';
            this.playerName = '';
            this.feedback = '';
            this.correct = false;
        },
        getRandomWord: function () {
            return this.words[Math.floor(Math.random() * this.words.length)][0]
        }
    },
    mounted: function () {
        this.mysteryWord = this.getRandomWord();
        this.hint = this.words.find(obj => obj[0] == this.mysteryWord)[1];
        this.showGame = 'false';
    },
    computed: {
        correctAnswer: function () {
            return this.answer;
        }
    }
})