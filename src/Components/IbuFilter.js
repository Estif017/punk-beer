import React, { Component } from 'react';
import { Label } from './Label';
import ibuWeak from '../Logos/ibuWeak.svg';
import ibuMedium from '../Logos/ibuMedium.svg';
import ibuStrong from '../Logos/ibuStrong.svg';
export default class IbuFilter extends Component {
	state = {
		Labelname: '',
		svg: '',
	};
	render() {
		return (
			<form className='filter-form'>
				<Label Labelname={this.state.Labelname} />
				<Label Labelname='ibuWeak' svg={ibuWeak} />
				<Label Labelname='ibuMedium' svg={ibuMedium} />
				<Label Labelname='ibuStrong' svg={ibuStrong} />
			</form>
		);
	}
}
