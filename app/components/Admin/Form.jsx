import React, {Component} from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = this.createState(props.current);

		this.idMap = {
			'admin-name': 'name',
			'admin-price': 'price',
			'admin-type': 'primaryCategory',
			'admin-description': 'description',
			'admin-photo': 'photo',
			'admin-quantity': 'quantity',
			'admin-record-artist': 'artist',
			'admin-record-title': 'title',
			'admin-record-release-date': 'releaseDate',
			'admin-record-genre': 'genre'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleRecordChange = this.handleRecordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(this.createState(nextProps.current));
	}

	createState(current) {
		current = current || {};
		const record = current.record || {};

		return {
			name: current.name,
			price: current.price,
			description: current.description,
			primaryCategory: current.primaryCategory,
			photo: current.photo,
			quantity: current.quantity,
			record: {
				title: record.title,
				artist: record.artist,
				releaseDate: record.releaseDate,
				genre: record.genre
			}
		};
	}

	handleChange(event) {
		this.setState({
			[this.idMap[event.target.id]]: event.target.value
		});
	}

	handleRecordChange(event) {
		this.setState({
			record: Object.apply({}, this.state.record, {
				[this.idMap[event.target.id]]: event.target.value
			})
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSubmit(this.props.current.id, this.state);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
	      <div className="form-group">
	        <label htmlFor="admin-type">Type</label>
	        <select
						className="form-control"
						id="admin-type"
						value={this.state.primaryCategory}
						onChange={this.handleChange}
					>
	          <option>Service</option>
	          <option>Record</option>
	          <option>Equipment</option>
	        </select>
	      </div>

	      <div className="form-group">
	        <label htmlFor="admin-name">Name</label>
	        <input
						type="text"
						className="form-control"
						id="admin-name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
	      </div>

	      <div className="form-group">
	        <label htmlFor="admin-price">Price</label>
	        <input
						type="number"
						step=".01"
						min="0"
						className="form-control"
						id="admin-price"
						value={this.state.price}
						onChange={this.handleChange}
					/>
	      </div>

				<div className="form-group">
	        <label htmlFor="admin-quantity">Quantity</label>
	        <input
						type="number"
						step="1"
						min="1"
						className="form-control"
						id="admin-quantity"
						value={this.state.quantity}
						onChange={this.handleChange}
					/>
	      </div>

	      <div className="form-group">
	        <label htmlFor="admin-description">Description</label>
	        <textarea
						className="form-control"
						id="admin-description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
	      </div>

	      <div className="form-group">
	        <label htmlFor="admin-photo">Photo URL</label>
	        <input
						type="text"
						className="form-control"
						id="admin-photo"
						value={this.state.photo}
						onChange={this.handleChange}
					/>
	      </div>

	      <div className="panel panel-default">
	        <div className="panel-heading">
	          Record Information
	        </div>
	        <div className="panel-body">
	          <div className="form-group">
	            <label htmlFor="admin-record-artist">Artist</label>
	            <input
								type="text"
								className="form-control"
								id="admin-record-artist"
								value={this.state.record.artist}
								onChange={this.handleRecordChange}
							/>
	          </div>

						<div className="form-group">
	            <label htmlFor="admin-record-title">Title</label>
	            <input
								type="text"
								className="form-control"
								id="admin-record-title"
								value={this.state.record.title}
								onChange={this.handleRecordChange}
							/>
	          </div>

	          <div className="form-group">
	            <label htmlFor="admin-record-release-date">Release Date</label>
	            <input
								type="text"
								className="form-control"
								id="admin-record-release-date"
								value={this.state.record.releaseDate}
								onChange={this.handleRecordChange}
							/>
	          </div>

	          <div className="form-group">
	            <label htmlFor="admin-record-genre">Genre</label>
	            <input
								type="text"
								className="form-control"
								id="admin-record-genre"
								value={this.state.record.genre}
								onChange={this.handleRecordChange}
							/>
	          </div>
	        </div>
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
