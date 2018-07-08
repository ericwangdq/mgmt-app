// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  BasicForm,
} from './';

export default {
  path: 'form',
  name: 'Form',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'basic-form', name: 'Basic form', component: BasicForm },
  ],
};
