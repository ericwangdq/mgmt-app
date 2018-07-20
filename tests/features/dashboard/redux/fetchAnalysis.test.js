import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  DASHBOARD_FETCH_ANALYSIS_BEGIN,
  DASHBOARD_FETCH_ANALYSIS_SUCCESS,
  DASHBOARD_FETCH_ANALYSIS_FAILURE,
  DASHBOARD_FETCH_ANALYSIS_DISMISS_ERROR,
} from '../../../../src/features/dashboard/redux/constants';

import {
  fetchAnalysis,
  dismissFetchAnalysisError,
  reducer,
} from '../../../../src/features/dashboard/redux/fetchAnalysis';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('dashboard/redux/fetchAnalysis', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchAnalysis succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchAnalysis())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', DASHBOARD_FETCH_ANALYSIS_BEGIN);
        expect(actions[1]).toHaveProperty('type', DASHBOARD_FETCH_ANALYSIS_SUCCESS);
      });
  });

  it('dispatches failure action when fetchAnalysis fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchAnalysis({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', DASHBOARD_FETCH_ANALYSIS_BEGIN);
        expect(actions[1]).toHaveProperty('type', DASHBOARD_FETCH_ANALYSIS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchAnalysisError', () => {
    const expectedAction = {
      type: DASHBOARD_FETCH_ANALYSIS_DISMISS_ERROR,
    };
    expect(dismissFetchAnalysisError()).toEqual(expectedAction);
  });

  it('handles action type DASHBOARD_FETCH_ANALYSIS_BEGIN correctly', () => {
    const prevState = { fetchAnalysisPending: false };
    const state = reducer(
      prevState,
      { type: DASHBOARD_FETCH_ANALYSIS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchAnalysisPending).toBe(true);
  });

  it('handles action type DASHBOARD_FETCH_ANALYSIS_SUCCESS correctly', () => {
    const prevState = { fetchAnalysisPending: true };
    const state = reducer(
      prevState,
      { type: DASHBOARD_FETCH_ANALYSIS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchAnalysisPending).toBe(false);
  });

  it('handles action type DASHBOARD_FETCH_ANALYSIS_FAILURE correctly', () => {
    const prevState = { fetchAnalysisPending: true };
    const state = reducer(
      prevState,
      { type: DASHBOARD_FETCH_ANALYSIS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchAnalysisPending).toBe(false);
    expect(state.fetchAnalysisError).toEqual(expect.anything());
  });

  it('handles action type DASHBOARD_FETCH_ANALYSIS_DISMISS_ERROR correctly', () => {
    const prevState = { fetchAnalysisError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: DASHBOARD_FETCH_ANALYSIS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchAnalysisError).toBe(null);
  });
});

