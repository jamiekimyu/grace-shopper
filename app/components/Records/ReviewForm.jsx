import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../reducers/review';

/* --------COMPONENT-----------*/

export class ReviewForm extends Component {
	constructor(props){
		super(props);
		const initialState = {
			review: '',
			rating: 0
		};
		this.state = initialState;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.addReview(this.state, this.props.params.id);
	}

	handleChange(event){
		//console.log('I am changing');
		this.setState({[event.target.name]: event.target.value});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="admin-description">Description</label>
							<textarea
								className="form-control"
								id="admin-description"
								value={this.state.review}
								onChange={this.handleChange}
								name="review"
							/>
						</div>
						<div>
							<input
								type="number"
								min={0}
								max={5}
								value={this.state.rating}
								onChange={this.handleChange}
								className="form-group"
								name="rating"
							/>
						</div>
						<div>
							<input type="submit" className="btn btn-primary" value="Submit" />
						</div>
				</form>
			</div>
		);
	}

}

/* --------CONTAINER-----------*/
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
	addReview: (review, productId) => (
		dispatch(addReview(review, productId))
	)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReviewForm);
