import React, { Component } from 'react';

export class Filters extends Component {
	render() {
		return (
			<div className='filters'>
				<div className='card filter-card'>
					<div className='filter-container'>
						<div className='filter-text'>
							<p>Alcohol Vol (ABV):</p>
						</div>
						<div className='filter'>
							<form className='filter-form'>
								<label for='abvAll'>
									<input
										type='radio'
										name='filter-abv'
										className='filter-all'
										value='all'
										checked
									/>
									<span className='filter-all'>All</span>
								</label>
								<label for='abvWeak'>
									<h5 className='temLabels'>
										Abv <br /> Weak
									</h5>
									<input
										type='radio'
										name='filter-abv'
										className='beer'
										value='weak'
									/>
								</label>
								<label for='abvMedium'>
									<h5 className='temLabels'>
										Abv <br /> Medium
									</h5>
									<input
										type='radio'
										name='filter-abv'
										className='beer'
										value='medium'
									/>
								</label>
								<label for='abvStrong'>
									<h5 className='temLabels'>
										Abv <br /> Strong
									</h5>
									<input
										type='radio'
										name='filter-abv'
										className='beer'
										value='strong'
									/>
								</label>
							</form>
						</div>
					</div>
				</div>

				<div className='card filter-card'>
					<div className='filter-container'>
						<div className='filter-text'>
							<p>Hoppiness (IBU):</p>
						</div>
						<div className='filter'>
							<form className='filter-form'>
								<label for='ibuAll'>
									<input
										type='radio'
										name='filter-ibu'
										className='filter-all'
										value='all'
										checked
									/>
									<span className='filter-all'>All</span>
								</label>
								<label for='ibuWeak'>
									<h5 className='temLabels'>
										IbU <br /> Weak
									</h5>
									<input
										type='radio'
										name='filter-ibu'
										className='hops'
										value='weak'
									/>
								</label>
								<label for='ibuMedium'>
									<h5 className='temLabels'>
										IbU <br /> Medium
									</h5>
									<input
										type='radio'
										name='filter-ibu'
										className='hops'
										value='medium'
									/>
								</label>

								<label for='ibuStrong'>
									<h5 className='temLabels'>
										IbU <br /> Strong
									</h5>
									<input
										type='radio'
										name='filter-ibu'
										className='hops'
										value='strong'
									/>
								</label>
							</form>
						</div>
					</div>
				</div>

				<div className='card filter-card'>
					<div className='filter-container'>
						<div className='filter-text'>
							<p>
								Page: <span></span>
							</p>
						</div>
						<div className='filter'>
							<button className='page-btn' disabled>
								<i className='far fa-caret-square-left'></i>
							</button>
							<button className='page-btn'>
								<i className='far fa-caret-square-right'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Filters;
