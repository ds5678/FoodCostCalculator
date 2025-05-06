const app = Vue.createApp({
	data() {
		return {
			cost: 0.0,
			calories: 400
		}
	},
	computed: {
		costPer400Calories() {
			if (this.calories > 0) {
				let actual = this.cost / this.calories * 400;
				return actual.toFixed(2);
			}
			return 0;
		},
	}
});