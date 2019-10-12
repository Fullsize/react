import view from "@/views/index";

export default [
	{
		path: "/",
		exact: true,
		component: view.home
	},
	{
		path: "/list",
		exact: true,
		component: view.list
	}
];
