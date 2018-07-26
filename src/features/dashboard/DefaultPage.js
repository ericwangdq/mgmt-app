import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

export class DefaultPage extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  state = {
    initializing: true,
    defaultExpandedKeys:  ['0-0-0', '0-0-1'],
    defaultSelectedKeys:  ['0-0-0', '0-0-1'],
    defaultCheckedKeys:  ['0-0-0', '0-0-1'],
  };

  onSelect(info) {
    console.log('selected', info);
  }

  onCheck(info) {
    console.log('onCheck', info);
  }

  render() {
    return (
      <div className="dashboard-default-page">
        Page Content: dashboard/DefaultPage
        <Tree className="myCls" checkable
        defaultExpandedKeys={this.state.defaultExpandedKeys}
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        defaultCheckedKeys={this.state.defaultCheckedKeys}
        onSelect={this.onSelect} onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
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
)(DefaultPage);
