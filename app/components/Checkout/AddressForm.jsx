import React, {Component} from 'react';

export class AddressForm extends Component {
	constructor(props) {
		super(props);

		this.state = this.createState(props.current);

		this.idMap = {
			'address-name': 'name',
			'address-line1': 'line1',
			'address-line2': 'line2',
			'address-city': 'city',
			'address-state': 'state',
			'address-zip': 'zip'
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(this.createState(nextProps.current));
	}

	createState(current) {
		current = current || {};

		return {
			name: current.name,
			line1: current.line1,
			line2: current.line2,
			city: current.city,
			state: current.state,
			zip: current.zip
		};
	}

	handleChange(event) {
		const update = {
			[this.idMap[event.target.id]]: event.target.value
		};
		this.props.addressChange(Object.assign({}, this.state, update));
	}


	render() {
		return (
			<form>
				<div className="container-fluid">
					<div className="form-group col-md-12">
						<label htmlFor="address-name">Name</label>
						<input
							type="text"
							className="form-control"
							id="address-name"
							value={this.state.name || ''}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group col-md-12">
						<label htmlFor="address-line1">Line 1</label>
						<input
							type="text"
							className="form-control"
							id="address-line1"
							value={this.state.line1 || ''}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group col-md-12">
						<label htmlFor="address-line2">Line 2</label>
						<input
							type="text"
							className="form-control"
							id="address-line2"
							value={this.state.line2 || ''}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group col-md-4">
						<label htmlFor="address-city">City</label>
						<input
							type="text"
							className="form-control"
							id="address-city"
							value={this.state.city || ''}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group col-md-4">
						<label htmlFor="address-state">State</label>
						<input
							type="text"
							className="form-control"
							id="address-state"
							value={this.state.state || ''}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group col-md-4">
						<label htmlFor="address-zip">Zip</label>
						<input
							type="text"
							className="form-control"
							id="address-zip"
							value={this.state.zip || ''}
							onChange={this.handleChange}
						/>
					</div>
				</div>

			</form>
		);
	}
}
