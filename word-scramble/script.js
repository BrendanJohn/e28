let app =  new Vue ({
    el: '#app',
    data: {
        mysteryWord: '',
        shuffledWord: '',
        guess: '',
        playerName: '',
        hint: '',
        correct: false,
        feedback: '',
        showGame: false,
        showResult: false,
        lastWord: '',
        level: 'easy',
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
                this.feedback = 'Sorry, thats not correct. Please try again.'
                this.correct = false
            }
        },
        submitNameAndPlay: function () {
            this.mysteryWord = this.getRandomWord(this.level);
            this.checkForRepeat(this.level)
            this.showGame = true;
            this.shuffledWord = this.shuffleMysteryWord;
            this.hint = this.getHint(this.level);  
        },
        reset: function () {
            this.showGame = 'false';
            this.showResult = false;
            this.guess = '';
            this.playerName = '';
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
    }
})