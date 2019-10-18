import HomeAction from "./home-action";

export default class Actions {
	[x: string]: any;

	constructor(stores) {
		this.HomeAction = new HomeAction(stores);
	}
}
