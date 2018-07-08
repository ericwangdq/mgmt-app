import React from 'react';
import { shallow } from 'enzyme';
import { BasicLayout } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BasicLayout />);
  expect(renderedComponent.find('.common-basic-layout').length).toBe(1);
});
