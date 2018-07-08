import React from 'react';
import { shallow } from 'enzyme';
import { Workplace } from '../../../src/features/dashboard/Workplace';

describe('dashboard/Workplace', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Workplace {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-workplace').length
    ).toBe(1);
  });
});
