import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const WishList = ({wishList}) => (
  <div id="wishlistFlyout">

    <ol className="list-unstyled">
			<li>
				<div className="col-md-8">Thing I Want</div>
        <div className="col-md-2 cart-price">$Money</div>
				<div className="glyphicon glyphicon-plus"></div>
      </li>
    </ol>
  </div>
);

const mapStateToProps = ({wishList}) => ({wishList});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);
