import React, { Component } from 'react';
import Filters from './filters';

export class Fettching extends Component {
	state = {
		isLoading: false,
		BaseUrl: 'https://api.punkapi.com/v2/beers?page=',
		page: 1,
		optionsABV: '',
		optionsIBU: '',
		data: null,
	};
	componentDidMount() {
		this.setState({ isLoading: true });
		fetch(this.state.BaseUrl + this.state.page)
			.then((res) => res.json())
			.then((data) => this.setState({ data: data, isLoading: false }))
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<div>
				<Filters />
				{console.log(this.state.data)}
			</div>
		);
	}
}

export default Fettching;
