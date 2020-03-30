<template>
      <div v-if="feedback">
          <p><strong>{{feedback}}</strong> <input type="button" value="Play again" @click='$emit("reset-game")'></p>
      </div>
</template>

<script>
export default {
    data: function () {
        return {   
        }
    },
    props: ['showResult', 'error', 'feedback', 'correct', 'reset'],
    template: '#game-feedback',
    methods: {
        correctAnswer: function() {
            this.correct = false;
        }
    }
}</script>

<style>
    .feedback {
    width: 290px;
    color: white;
    height: 22px;
    }
</style>