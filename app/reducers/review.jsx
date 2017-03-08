import axios from 'axios';
import { browserHistory } from 'react-router';

const urlMap = {
	Review: 'reviews',
	Service: 'services'
};

//ACTION TYPE
const ADD_REVIEW = 'ADD_REVIEW';

//ACTION CREATOR
const addReviewAction = (review) => ({
	type: ADD_REVIEW,
	review
});

//THUNKS
export const addReview = (review, productId) => (
	(dispatch) => {
		axios.post(`/api/products/${productId}/review`, review)
				 .then(response => response.data)
				 .then((newReview) => (browserHistory.goBack()))
				 .catch(console.error.bind(console));
	}
);


//REDUCER
export default (state = [], action) => {
	switch(action.type){
	case ADD_REVIEW:
		return [...state, action.review];
	}
	return state;
};
