// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import React from 'react';
import Loadable from 'react-loadable';
// import {
//   DefaultPage,
//   Analysis,
//   Workplace,
//   Monitor,
// } from './';

// import {
//   BasicLayout,
// } from '../common';
const BasicLayout = Loadable({
  loader: () => import('../common/BasicLayout'),
  loading: pageLoading
});

function pageLoading() {
  return <div>Loading...</div>;
};

const DefaultPage = Loadable({
  loader: () => import('./DefaultPage'),
  loading: pageLoading
});

const Analysis = Loadable({
  loader: () => import('./Analysis'),
  loading: pageLoading
});

const Workplace = Loadable({
  loader: () => import('./Workplace'),
  loading: pageLoading
});

const Monitor = Loadable({
  loader: () => import('./Monitor'),
  loading: pageLoading
});

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
