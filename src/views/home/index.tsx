import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import './index.css'

interface Props {
	page: number,
	setPage: () => void
}
@inject((stores: any) => ({
	page: stores.HomeStore.page,
	setPage: stores.HomeAction.setPage,
}))
@observer
class Home extends Component<Props>{
	render() {
		const { page, setPage } = this.props;
		return (
			<>
				<div styleName='box'>{page}</div>
				<Button>btn123</Button>
				<button className='btn' onClick={() => setPage()}>submit</button>
			</>
		)
	}
}
export default Home;