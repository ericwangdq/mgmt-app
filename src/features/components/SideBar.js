import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export class SideBar extends Component {
  static propTypes = {
    // sidebar: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  // <div className="common-side-bar">
  //     <ul>
  //       <li>
  //         <Link to="/dashboard">Welcome</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/analysis">Analysis</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/workplace">Workplace</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/monitor">Monitor</Link>
  //       </li>
  //       <li>
  //         <Link to="/examples">Welcome</Link>
  //       </li>
  //       <li>
  //         <Link to="/examples/counter">Counter Demo</Link>
  //       </li>
  //       <li>
  //         <Link to="/examples/reddit">Reddit API Demo</Link>
  //       </li>
  //       <li>
  //         <Link to="/">Back to start page</Link>
  //       </li>
  //     </ul>
  //     <div className="memo">
  //       This is a Rekit feature that contains some examples for you to quick learn how Rekit works. To remove it just
  //       delete the feature.
  //     </div>
  //   </div>

  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['5']} defaultOpenKeys={['sub1']}>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Dashboard</span></span>}>
          <Menu.Item key="5"><Link to="/dashboard"><Icon type="user" /><span>Welcome</span></Link></Menu.Item>
          <Menu.Item key="6"><Link to="/dashboard/analysis"><Icon type="user" /><span>Analysis</span></Link></Menu.Item>
          <Menu.Item key="7"><Link to="/dashboard/workplace"><Icon type="bar-chart" /><span>Workplace</span></Link></Menu.Item>
          <Menu.Item key="8"><Link to="/dashboard/monitor"><Icon type="credit-card" /><span>Monitor</span></Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Examples</span></span>}>
          <Menu.Item key="9"><Link to="/examples"><span>Welcome</span></Link></Menu.Item>
          <Menu.Item key="13"><Link to="/examples/counter"><span>Counter</span></Link></Menu.Item>  
          <Menu.Item key="10"><Link to="/examples/reddit"><span>Reddit API Demo</span></Link></Menu.Item>
          <Menu.Item key="15"><Link to="/"><span>Back to start page</span></Link></Menu.Item>
          <Menu.Item key="16">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sidebar: state.sidebar,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);