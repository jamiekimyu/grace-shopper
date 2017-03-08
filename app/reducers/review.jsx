import axios from 'axios';

//ACTION TYPE
const ADD_REVIEW = 'ADD_REVIEW';

//ACTION CREATOR
const addReviewAction = (review) => ({
	type: ADD_REVIEW,
	review
});

//THUNKS
/*export const addReview = (review) => ({
	(dispatch) => {
		axios.post('/api/review', review)
				 .then(response => response.data)
				 .then((newReview) => (dispatch(addReviewAction(newReview))))
				 .catch(console.error.bind(console));
	}
});*/


//REDUCER
export default (state = {}, action) => {
	switch(action.type){
		case ADD_REVIEW:
			return;
	};
};
