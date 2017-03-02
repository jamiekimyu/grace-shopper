import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Records = ({records}) => (
  <div className="container-fluid">
  {JSON.stringify(records)}
    <div className="row">
      <div className="col-md-2 productDisplay">
        <h4>Title</h4>
        <h4>Artist</h4>
        <h4>Release Date</h4>
        <h4>Genre</h4>
      </div>
      <div className="col-md-2 productDisplay">Two</div>
      <div className="col-md-2 productDisplay">Three</div>
      <div className="col-md-2 productDisplay">Four</div>
    </div>

    {/*for more rows to be aligned, the sidebar needs to extend to the bottom
    //record model needs*/}

    {/*TODO: pull in records data from database to populate*/}
</div>


);

const mapStateToProps = ({records}) => ({records});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);
