import React from 'react';
import './App.css';
import { FilterCard } from './Components/FilterCard';

const App = () => {
	return (
		<div className='container'>
			<header>Punk API Beer App</header>
			<FilterCard />
		</div>
	);
};

export default App;
