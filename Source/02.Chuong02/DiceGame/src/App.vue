<template>
	<div id="app">
		<h1>Dice Game</h1>
		<div>{{ isWinner }}</div>
		<div class="wrapper clearfix"> 
            <players 
				v-bind:scoresPlayer="scoresPlayer"
				v-bind:activePlayer="activePlayer"
				v-bind:currentScore="currentScore"
				v-bind:isWinner="isWinner"
				/>

			<controls 
				v-bind:finalScore="finalScore"
				v-on:handleNewGame="handleNewGame"
				v-on:handleRollDices="handleRollDices"
				v-on:handleHoldScore="handleHoldScore"
				v-on:handleChangeFinalScore="handleChangeFinalScore"
				v-bind:isPlaying="isPlaying"
				/>
            
			<dices v-bind:dices="dices"/>

			<popup-rule 
				v-on:handleConfirm="handleConfirm"
				v-bind:isOpenPopup="isOpenPopup"
				/>
        </div>
	</div>
</template>

<script>
import Players from './components/Players.vue'
import Controls from './components/Controls.vue'
import Dices from './components/Dices.vue'
import PopupRule from './components/PopupRule.vue'
export default {
	name: 'app',
	data () {
		return {
			isOpenPopup: false,
			isPlaying: false,
			activePlayer: 1, // ai là người chơi hiện tại
			scoresPlayer: [0, 0],
			currentScore: 0,
			dices: [5, 2],
			finalScore: 10
		}
	},
	components: {
		Players,
		Controls,
		Dices,
		PopupRule
	},
	computed: {
		isWinner() {
			let {scoresPlayer, finalScore} = this;
			if (scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore)  {
				this.isPlaying = false;
				return true;
			} else {
				return false;
			}
		}
	},
	methods: { 
		handleNewGame() {
			// Hiển thị popup -> show luật chơi
			this.isOpenPopup = true;
		},
		handleConfirm() {
			this.isOpenPopup = false;
			this.isPlaying = true;
			this.activePlayer = 0;
			this.currentScore = 0;
			this.scoresPlayer = [0, 0];
			this.dices = [1, 1];
		},
		handleRollDices() {
			if (this.isPlaying){
				let numberDice1 = Math.floor(Math.random() * 6) + 1;
				let numberDice2 = Math.floor(Math.random() * 6) + 1;
				this.dices = [numberDice1, numberDice2];

				if (numberDice1 == 1 || numberDice2 == 1) {
					//switch turn
					let activePlayer = this.activePlayer;	
					setTimeout(function () {
						alert(`Người chơi player ${activePlayer + 1} đã quay trúng số 1. Rất tiếc !!`);
					}, 10);
					
					this.nextPlayer();		
				} else {
					this.currentScore = this.currentScore + numberDice1 + numberDice2;
				}
			} else {
				alert('Vui lòng nhấn vào nút NewGame');
			}
		},
		nextPlayer() {
			this.activePlayer = this.activePlayer == 0 ? 1 : 0;
			this.currentScore = 0;
		},
		handleHoldScore() {
			let {scoresPlayer, activePlayer, currentScore} = this;
			let cloneScorePLayer = [...scoresPlayer];
			let scoreOld = scoresPlayer[activePlayer];
			if (this.isPlaying) {
				cloneScorePLayer[activePlayer] = scoreOld + currentScore;
				this.scoresPlayer = [...cloneScorePLayer];
				if (!this.isWinner) {
					this.nextPlayer();
				}
			}
			else {
				alert('Vui lòng nhấn vào nút NewGame');
			}
		},
		handleChangeFinalScore(event) {
			var number = parseInt(event.target.value);
			if (isNaN(number)) {
				this.finalScore = '';
			} else {
				this.finalScore = number;
			}
		}
	}
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
	}

	.clearfix::after {
		content: "";
		display: table;
		clear: both;
	}

	body {
		background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('./assets/back.jpg');
		background-size: cover;
		background-position: center;
		font-family: Lato;
		font-weight: 300;
		position: relative;
		height: 100vh;
		color: #555;
	}

	.wrapper {
		width: 1000px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}
</style>
