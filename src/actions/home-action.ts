import { observable, action } from "mobx";

class HomeActive {
	[x: string]: any;

	constructor({ HomeStore }) {
		this.HomeStore = HomeStore;
		console.log(this.HomeStore);
	}

	@action
	setPage = () => {
		this.HomeStore.page = 0;
	};
}
export default HomeActive;
