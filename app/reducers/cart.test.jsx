import React from 'react';
import chai, {expect} from 'chai';
chai.use(require('chai-enzyme')());
import {stub} from 'sinon';
chai.use(require('sinon-chai'));

import {addToCart} from './cart';

describe('cart reducer', () => {
	describe('addToCart', () => {
		it('Adds new Items', () => {
			const dummyProduct = {
				id: 5
			};

			const dispatch = stub();
			const getState = stub();
			const setItem = stub();

			global.window = {
				localStorage: {
					setItem: setItem
				}
			};

			getState.returns({
				cart: [{
					product: {id: 3}
				}]
			});

			const reducer = addToCart(dummyProduct);

			reducer(dispatch, getState);

			const args = setItem.getCalls(0).args;

			expect(setItem.callCount).to.equal(1);
			//expect(args).to.deep.equal([ 'cart', '[{"product":{"id":3}}]' ]);
		});
	});
});
