import axios from "axios";
import config from "../../config";

const instance = axios.create({
	baseURL: config.api,
	timeout: 9000
});
instance.interceptors.request.use(
	requestConfig => {
		return {
			...requestConfig,
			params: {
				...requestConfig.params,
				debug: process.env.ENVIRONMENT === "prod" ? undefined : 1
			}
		};
	},
	error => Promise.reject(error)
);
instance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		Promise.reject(error);
	}
);
export default instance;
