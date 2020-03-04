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
        showResult: false
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
            this.showGame = false;
            this.showResult = false;
            this.guess = '';
            this.playerName = '';
            this.feedback = '';
            this.correct = false;
        }
    },
    mounted: function () {
        console.log('The app has been mounted');
    },
    computed: {
        correctAnswer: function () {
            return this.answer;
        }
    }
})