    let app =  new Vue ({
        el: '#app',
        data: {
            randomNumber1: Math.floor((Math.random() *10) + 1),
            randomNumber2: Math.floor((Math.random() *10) + 1),
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
                let correctAnswer = this.randomNumber1 + this.randomNumber2;

                if (this.answer == correctAnswer) {
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
            }
        }
    })