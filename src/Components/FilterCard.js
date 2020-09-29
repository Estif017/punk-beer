import React from 'react';
import AbvFilter from './AbvFilter';
import IbuFilter from './IbuFilter';
export const FilterCard = () => {
	return (
		<div className='filters'>
			<div className='card filter-card'>
				<div className='filter-container'>
					<div className='filter-text'>
						<p>Alchol Vol (ABV):</p>
					</div>
					<div className='filter'>
						<AbvFilter />
					</div>
				</div>
			</div>
			<div className='card filter-card'>
				<div className='filter-container'>
					<div className='filter-text'>
						<p>Hoppiness (IBU):</p>
					</div>
					<div className='filter'>
						<IbuFilter />
					</div>
				</div>
			</div>
		</div>
	);
};
