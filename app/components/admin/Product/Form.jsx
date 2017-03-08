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
			'admin-record-genre': 'genre',
			'admin-service-time': 'processingTime',
			'admin-equipment-weight': 'weight'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleRecordChange = this.handleRecordChange.bind(this);
		this.handleServiceChange = this.handleServiceChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDisabledChange = this.handleDisabledChange.bind(this);
		this.handleEquipmentChange = this.handleEquipmentChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(this.createState(nextProps.current));
	}

	createState(current) {
		current = current || {};
		const record = current.record || {};
		const service = current.service || {};
		const equipment = current.equipment || {};

		return {
			name: current.name,
			price: current.price,
			description: current.description,
			primaryCategory: current.primaryCategory || 'Record',
			photo: current.photo,
			quantity: current.quantity,
			disabled: current.disabled,
			record: {
				title: record.title,
				artist: record.artist,
				releaseDate: record.releaseDate,
				genre: record.genre
			},
			service: {
				processingTime: service.processingTime
			},
			equipment: {
				weight: equipment.weight
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
			record: Object.assign({}, this.state.record, {
				[this.idMap[event.target.id]]: event.target.value
			})
		});
	}

	handleServiceChange(event) {
		this.setState({
			service: Object.assign({}, this.state.service, {
				[this.idMap[event.target.id]]: event.target.value
			})
		});
	}

	handleEquipmentChange(event) {
		this.setState({
			equipment: Object.assign({}, this.state.equipment, {
				[this.idMap[event.target.id]]: event.target.value
			})
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSubmit(this.props.current.id, this.state);
	}

	handleDisabledChange(event) {
		this.setState({ disabled: event.target.checked });
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

				<div className="form-group">
					<input
						type="checkbox"
						id="admin-disabled"
						checked={this.state.disabled}
						onChange={this.handleDisabledChange}
					/>&nbsp;
					<label htmlFor="admin-disabled">Disable Product</label>
				</div>


				{ this.state.primaryCategory === 'Record' ? (
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
				) : this.state.primaryCategory === 'Service' ? (
					<div className="panel panel-default">
						<div className="panel-heading">
							Service Information
						</div>
						<div className="panel-body">
							<div className="form-group">
								<label htmlFor="admin-service-time">Processing Time</label>
								<input
									type="text"
									className="form-control"
									id="admin-service-time"
									value={this.state.service.processingTime}
									onChange={this.handleServiceChange}
								/>
							</div>
						</div>
					</div>
				) : this.state.primaryCategory === 'Equipment' ? (
					<div className="panel panel-default">
						<div className="panel-heading">
							Service Information
						</div>
						<div className="panel-body">
							<div className="form-group">
								<label htmlFor="admin-equipment-weight">Weight</label>
								<input
									type="text"
									className="form-control"
									id="admin-equipment-weight"
									value={this.state.equipment.weight}
									onChange={this.handleEquipmentChange}
								/>
							</div>
						</div>
					</div>
				) : '' }
				<input
					type="submit"
					className="btn btn-primary"
					value="Submit"
				/>
			</form>
		);
	}
}
