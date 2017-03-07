import React, {Component} from 'react';

export default class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = this.createState(props.current);

		this.idMap = {
			'admin-name': 'name',
			'admin-email': 'email',
			'admin-password': 'password'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(this.createState(nextProps.current));
	}

	createState(current) {
		current = current || {};

		return {
			name: current.name,
			email: current.email,
			password: ''
		};
	}

	handleChange(event) {
		this.setState({
			[this.idMap[event.target.id]]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const result = Object.assign({}, this.state);

		if (result.password === '') {
			delete result.password;
		}

		this.props.handleSubmit(result);
	}

	render() {
		return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="admin-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="admin-name"
            disabled={this.props.current && this.props.current.oauth}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="admin-email">Email</label>
          <input
            type="text"
            className="form-control"
            id="admin-email"
            disabled={this.props.current && this.props.current.oauth}
            value={this.state.email || ''}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="admin-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="admin-password"
            disabled={this.props.current && this.props.current.oauth}
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          value="Submit"
        />
      </form>
		);
	}
}
