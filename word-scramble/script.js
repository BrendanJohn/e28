let app =  new Vue ({
    el: '#app',
    data: {
        mysteryWord: 'someWord',
        guess: '',
        answer: 'someWord',
        showHint: true,
        playerName: '',
        hint: 'hint for word',
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
            if (this.answer == this.correctAnswer) {
                this.feedback = 'You got it! Nice work.'
                this.correct = true
            } else {
                this.imageSource = 'images/sad.jpg'
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
        this.showGame = 'false';
    },
    computed: {
        correctAnswer: function () {
            return this.answer;
        }
    }
})