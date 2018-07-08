// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Analysis,
  Workplace,
  Monitor,
} from './';

import {
  BasicLayout,
} from '../common';


export default {
  path: 'dashboard',
  name: 'Dashboard',
  component: BasicLayout,
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'analysis', name: 'Analysis', component: Analysis },
    { path: 'workplace', name: 'Workplace', component: Workplace },
    { path: 'monitor', name: 'Monitor', component: Monitor },
  ],
};
