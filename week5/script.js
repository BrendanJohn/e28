    let app =  new Vue ({
        el: '#app',
        data: {
            randomNumber1: null,
            randomNumber2: null,
            answer: '',
            imageSource: '',
            imageAlt: '',
            feedback: '',
            correct: null,
            showHint: false,
            statements: [],
            difficultyLevel: 'easy',
            level: ''
        },
        methods: {
            submitAnswer: function () {
                if (this.answer == this.correctAnswer) {
                    this.imageSource = 'images/happy.png'
                    this.imageAlt = 'Happy face'
                    this.feedback = 'You got it right'
                    this.correct = true
                } else {
                    this.imageSource = 'images/sad.jpg'
                    this.imageAlt = 'Frowny face'
                    this.feedback = 'Try again..'
                    this.correct = false
                }
            },
            getRandomNumber: function () {
                return Math.floor((Math.random() *10) + 1);
            }
             
        },
        mounted: function () {
            alert('The app has been mounted');
            this.randomNumber1 = this.getRandomNumber;
            this.randomNumber2 = this.getRandomNumber;
        },
        computed: {
            correctAnswer: function () {
                return this.randomNumber1 + this.randomNumber2;
            }
        }
    })