import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/form/DefaultPage';

describe('form/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      form: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.form-default-page').length
    ).toBe(1);
  });
});
