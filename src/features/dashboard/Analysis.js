import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Analysis extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentWillMount () {
    console.log('will Mount');
    this.props.actions.fetchAnalysis();
  }

  render() {
    const { fetchAnalysisPending, analysisData, fetchAnalysisError } = this.props.dashboard;
    console.log(analysisData);
    return (
      <div className="dashboard-analysis">
        Page Content: dashboard/Analysis
        {analysisData.salesData[0].x}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysis);
