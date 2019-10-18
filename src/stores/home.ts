import { observable, action } from "mobx";

class HomeStore {
	@observable page = 1;
}
export default new HomeStore();
