import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BasketTotal from './Component';
import sinon from 'sinon';
import { expect } from 'chai';

describe('BasketTotalComponent', function () {
  describe('render', function () {
    let component;
    const renderShallow = (props) => (shallow(<BasketTotal {...props} />));

    [[5.00, '$5.00'], [4.1, '$4.10']].forEach(function([total, formatted]) {
      describe(`total is ${total}`, function () {
        beforeEach(function () {
          component = renderShallow({ total });
        });
        it('should contain the correct total', function () {
          expect(component).to.contain(formatted);
        });
      });
    });
  });
});
