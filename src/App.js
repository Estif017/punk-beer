import React from 'react';
import './App.css';
import { FilterCard } from './Components/FilterCard';

const App = () => {
	return (
		<>
			<header>Punk API Beer App</header>
			<div className='container'>
				<FilterCard />
			</div>
		</>
	);
};

export default App;
