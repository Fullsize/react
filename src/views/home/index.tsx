import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
interface Props{
	page:number,
	setPage:()=>void
}
@inject((stores:any)=>({
	page:stores.HomeStore.page,
	setPage:stores.HomeAction.setPage,
}))
@observer
class Home extends Component<Props>{
	render(){
		const {page,setPage}=this.props;
		return(
			<>
				<div>123</div>
				<div>{page}</div>
				<button onClick={()=>setPage()}>点击</button>
			</>
		)
	}
}
export default Home;