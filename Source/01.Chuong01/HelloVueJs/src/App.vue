<template>
	<div id="app">
		<div class="container">
			<button v-on:click="title = 'nguyentiendung' "> Thay đỔi title từ Component</button>
			<comp-header 
				v-bind:title="title" 
				v-on:changeTitle="handleChangeTitle"
				/>
			<list-user 
				v-bind:listUser="listUser"
				v-on:deleteUserEvent="deleteUserEvent"
				/>
			<comp-footer/>
		</div>
	</div>
</template>

<script>
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import ListUser from './components/ListUser.vue'
export default {
	name: 'app',
	data () {
		return {
			msg: 'Hello VueJs',
			title: 'Hello vuejs',
			listUser: [
				{id: 1, email: 'test1@gmail.com', active: true},
				{id: 2, email: 'test2@gmail.com', active: false},
				{id: 3, email: 'test3@gmail.com', active: false},
				{id: 4, email: 'test4@gmail.com', active: true},
				{id: 5, email: 'test5@gmail.com', active: true}
			]
		}
	},	
	components: {
		CompHeader,
		CompFooter, 
		ListUser
	},
	methods: { 
		handleChangeTitle(data) {
			this.title = data.title;
		},
		deleteUserEvent(data) {
			this.listUser = this.listUser.filter((user) => {
				return user.id != data.id;
			});
		}
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}	
	.container { 
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 15px;
		min-height: 3000px;
	}
</style>
