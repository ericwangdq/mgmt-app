import React, { Component } from 'react';
import { Menu, Icon, Spin, Dropdown, Avatar, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class GlobalHeader extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const {
      currentUser = {},
      collapsed,
      // fetchingNotices,
      // isMobile,
      // logo,
      // onNoticeVisibleChange,
      onMenuClick,
      // onNoticeClear,
      onToggle
    } = this.props;

    const menu = (
      <Menu className="person-menu" selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item disabled>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Item key="github">
          <Icon type="github" />
          <a
            target="_blank"
            href="https://github.com/ericwdq"
            rel="noopener noreferrer"
            className="action"
          >
            Github
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="common-global-header">
        <Icon
          className="trigger toggle-icon"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onToggle}
        />
        <div className="header-right">
          <Tooltip title="使用文档">
              <a
                target="_blank"
                href="http://pro.ant.design/docs/getting-started"
                rel="noopener noreferrer"
                className="action"
              >
                <Icon type="question-circle-o" />
              </a>
            </Tooltip>
            {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className="action account">
                <Avatar size="small" className="avatar" src={currentUser.avatar} />
                <span className="name">{currentUser.name}</span>
              </span>
            </Dropdown>
            ) : (
              <Spin size="small" style={{ marginLeft: 8 }} />
            )}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(GlobalHeader);
