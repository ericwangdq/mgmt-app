import React from 'react';
import { shallow } from 'enzyme';
import { BasicForm } from '../../../src/features/form/BasicForm';

describe('form/BasicForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      form: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BasicForm {...props} />
    );

    expect(
      renderedComponent.find('.form-basic-form').length
    ).toBe(1);
  });
});
