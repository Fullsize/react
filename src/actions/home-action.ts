import { observable, action } from "mobx";

class HomeActive {
	[x: string]: any;

	constructor({ HomeStore }) {
		this.HomeStore = HomeStore;
	}

	@action
	setPage = () => {
		this.HomeStore.page = 0;
	};
}
export default HomeActive;
