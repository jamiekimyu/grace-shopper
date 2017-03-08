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
const mapStateToProps = ({record}) => ({record});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (record) => {
		const product =  Object.assign({}, record.product);
		product.record = Object.assign({}, record);
		delete product.record.product;
		dispatch(addToCart(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReviewForm);
