import React from 'react';
import AbvWeak from '../Logos/AbvWeak.svg';
import abvMedium from '../Logos/AbvMedium.svg';
import abvStrong from '../Logos/AbvStrong.svg';
export const FilterCard = () => {
	return (
		<div className='filters'>
			<div className='card filter-card'>
				<div className='filter-container'>
					<div className='filter-text'>
						<p>Alchol Vol (ABV):</p>
					</div>
					<div className='filter'>
						<form className='filter-form'>
							<label htmlFor='abvAll'>
								<input
									type='radio'
									className='filter-all'
									name='filter-abv'
									id='abvAll'
									value='all'
									checked
								/>
								<span className='filter-all'>All</span>
							</label>
							<label htmlFor='abvWeak'>
								<input
									type='radio'
									name='filter-abv'
									value='weak'
									id='abvWeak'
									className='beer'
								/>
								<img src={AbvWeak} alt='logo' width='30px' />
							</label>
							<label htmlFor='abvMedium'>
								<input
									type='radio'
									name='filter-abv'
									id='abvMedium'
									className='beer'
								/>
								<img src={abvMedium} alt='logo' width='30px' />
							</label>
							<label htmlFor='abvStrong'>
								<input
									type='radio'
									name='filter-abv'
									id='abvStrong'
									className='beer'
								/>
								<img src={abvStrong} alt='logo' width='30px' />
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
