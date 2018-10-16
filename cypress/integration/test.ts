/// <reference types="cypress"/>

import { foo } from '../../src/foo';
import * as example from '../../src/example';

describe('should work', () => {
  it('should stub it once', () => {
    cy.stub(example);
    foo('first');
    expect(example.bar).to.have.been.calledWith('first');
  });

  it('should stub it again', () => {
    cy.stub(example);
    foo('second');
    expect(example.bar).to.have.been.calledWith('second');
  });
});
