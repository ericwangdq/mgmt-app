import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/dashboard/DefaultPage';

describe('dashboard/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-default-page').length
    ).toBe(1);
  });
});
