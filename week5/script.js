    let app =  new Vue ({
        el: '#app',
        data: {
            randomNumber1: Math.floor((Math.random() *10) + 1),
            randomNumber2: Math.floor((Math.random() *10) + 1),
            answer: '',
            imageSource: '',
            imageAlt: ''
        },
        methods: {
            submitAnswer: function () {
                let correctAnswer = this.randomNumber1 + this.randomNumber2;

                if (this.answer == correctAnswer) {
                    this.imageSource = 'images/happy.png'
                    this.imageAlt = 'Happy face'
                } else {
                    this.imageSource = 'images/sad.jpg'
                    this.imageAlt = 'Frowny face'
                }
            }
        }
    })