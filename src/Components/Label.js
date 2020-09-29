import React from 'react';

export const Label = (props) => {
	return (
		<label htmlFor={props.Labelname}>
			<input
				type='radio'
				name='filter-abv'
				id={props.Labelname}
				value={props.Labelname}
				className={props.svg ? 'beer' : 'filter-all'}
			/>
			{props.svg ? (
				<img src={props.svg} className='beer' alt='logo' width='30px' />
			) : (
				<span className='filter-all'>All</span>
			)}
		</label>
	);
};
