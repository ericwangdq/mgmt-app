import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Alert, Spin } from 'antd';
import { Bar } from '../components/Charts';

export class Analysis extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    initializing: true
  };

  componentWillMount() {
    if (!this.props.dashboard.analysisData) {
      this.props.actions.fetchAnalysis()
      .then(() => {
        this.setState({
          initializing: false,
        });
      })
      .catch(() => {
        this.setState({
          initializing: false,
        });
      });
    } else {
      this.setState({
        initializing: false,
      });
    }
  }

  dismissFetchListError() {
    window.setTimeout(() => {
      this.props.actions.dismissFetchListError();
    }, 500);
  }

  renderInitializing() {
    return (
      <div className="initializing">
        <Spin />
      </div>
    );
  }

  renderError(err) {
    return (
      <Alert
        message={ typeof err === 'string'
          ? err : '数据请求失败，请检查网络或者重试。' }
        type="error"
        closable
        showIcon
        onClose={this.dismissFetchListError}
      />
    );
  }


  render() {
    const { fetchAnalysisPending, analysisData, fetchAnalysisError } = this.props.dashboard;

    const {
      // visitData,
      // visitData2,
      salesData,
      // searchData,
      // offlineData,
      // offlineChartData,
      // salesTypeData,
      // salesTypeDataOnline,
      // salesTypeDataOffline,
    } = analysisData || {};

    if (fetchAnalysisPending || this.state.initializing) {
      return this.renderInitializing();
    }

    return (
      <div className="dashboard-analysis">
        {fetchAnalysisError && this.renderError(fetchAnalysisError)}
        <Fragment>
          <Bar height={295} title="销售额趋势" data={salesData} />
        </Fragment>
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
