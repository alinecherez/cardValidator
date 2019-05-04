/*eslint-disable no-undef */

const chai = require('chai');
const expect = chai.expect;
const cardValidator = require('../lib/index');

describe('card lib', () => {

	it('Deveria retornar true para o cartão 4716421870804403', () => {
		expect(cardValidator.cardValidator('4716421870804403')).to.equal(true);
	});
	
	it('Deveria retornar false para o cartão 3928471039285700', () => {
		expect(cardValidator.cardValidator('3928471039285700')).to.equal(false);
	});

	it('Deveria retornar false para o cartão 39284710392857', () => {
		expect(cardValidator.cardValidator('39284710392857')).to.equal(false);
	});	

	it('Deveria retornar false para o cartão abcdefghijklmnop', () => {
		expect(cardValidator.cardValidator('abcdefghijklmnop')).to.equal(false);
	});

	

}); 
