import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {},
		};
	}
	componentDidMount() {
		const urlBase = 'https://api.punkapi.com/v2/beers?page=1';
		fetch(urlBase)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}
	render() {
		return <div className='App'></div>;
	}
}

export default App;
