import React from 'react';
import { shallow } from 'enzyme';
import { Monitor } from '../../../src/features/dashboard/Monitor';

describe('dashboard/Monitor', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Monitor {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-monitor').length
    ).toBe(1);
  });
});
