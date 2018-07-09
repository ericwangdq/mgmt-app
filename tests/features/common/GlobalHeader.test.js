import React from 'react';
import { shallow } from 'enzyme';
import { GlobalHeader } from '../../../src/features/common/GlobalHeader';

describe('common/GlobalHeader', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GlobalHeader {...props} />
    );

    expect(
      renderedComponent.find('.common-global-header').length
    ).toBe(1);
  });
});
