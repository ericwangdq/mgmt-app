import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SideBar />);
  expect(renderedComponent.find('.common-side-bar').length).toBe(1);
});
