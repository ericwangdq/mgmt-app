import React from 'react';
import { shallow } from 'enzyme';
import { Analysis } from '../../../src/features/dashboard/Analysis';

describe('dashboard/Analysis', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Analysis {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-analysis').length
    ).toBe(1);
  });
});
