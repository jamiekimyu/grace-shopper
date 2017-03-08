import React, { Component } from 'react';
import FilterGenre from './FilterGenre';
import Records from './Records';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	const records = state.records;

	return {
		records
	};
};

class FilterableGenre extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		const inputValue = evt.target.value;
		this.setState({ inputValue });
	}

	render() {
		const inputValue = this.state.inputValue;
		const filterArray = this.state.inputValue.toLowerCase().split(',').map((str) => str.trim());
		// Find all records which have a genre in the arr which match each value in the filterArray
		const filteredRecords = this.props.records.filter((records) => (
			records.genre.filter((g) => (
				filterArray.filter((i) => g.match(i)).length
			)).length === filterArray.length
		));
		return (
      <div>
				<FilterGenre handleChange={this.handleChange} inputValue={inputValue} />
				<Records records={filteredRecords}/>
      </div>
		);
	}
}

export default connect(
  mapStateToProps
)(FilterableGenre);
