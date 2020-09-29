import React, { Component } from 'react';
import { Label } from './Label';
import AbvWeak from '../Logos/AbvWeak.svg';
import abvMedium from '../Logos/AbvMedium.svg';
import abvStrong from '../Logos/AbvStrong.svg';

export default class AbvFilter extends Component {
	state = {
		Labelname: '',
		svg: '',
	};
	render() {
		return (
			<form className='filter-form'>
				<Label Labelname={this.state.Labelname} />
				<Label Labelname='abvWeak' svg={AbvWeak} />
				<Label Labelname='abvMedium' svg={abvMedium} />
				<Label Labelname='abvStrong' svg={abvStrong} />
			</form>
		);
	}
}
