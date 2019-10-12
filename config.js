export default {
	development: {
		api: "http://localhost:8080"
	}
}[process.env.ENVIRONMENT || "development"];
