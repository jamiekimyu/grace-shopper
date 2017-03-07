import React, {Component} from 'react';

export class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = this.createState(props.current);

		this.idMap = {
			'user-email': 'email',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(this.createState(nextProps.current));
	}

	createState(current) {
		current = current || {};

		return {
			email: current.email,
		};
	}

	handleChange(event) {
		const update = {
			[this.idMap[event.target.id]]: event.target.value
		};
		this.props.userChange(Object.assign({}, this.state, update));
	}


	render() {
		return (
			<form>
				<div className="container-fluid">
					<div className="form-group col-md-12">
						<label htmlFor="user-email">Email</label>
						<input
							type="text"
							className="form-control"
							id="user-email"
							value={this.state.email || ''}
							disabled={this.props.current && this.props.current.loggedIn}
							onChange={this.handleChange}
						/>
					</div>
				</div>

			</form>
		);
	}
}
