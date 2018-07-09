import React from 'react';
import { shallow } from 'enzyme';
import { GlobalFooter } from '../../../src/features/common/GlobalFooter';

describe('common/GlobalFooter', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GlobalFooter {...props} />
    );

    expect(
      renderedComponent.find('.common-global-footer').length
    ).toBe(1);
  });
});
