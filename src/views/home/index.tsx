import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {Button} from 'antd';
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
				<Button>按钮</Button>
				<button onClick={()=>setPage()}>点击</button>
			</>
		)
	}
}
export default Home;