import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class GlobalFooter extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const {
      links = [],
      copyright
    } = this.props;
    return (
      <div className="common-global-footer">
        { links && (
          <div className="links">
            { links.map(link => (
                <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
                  {link.title}
                </a>
              ))
            }
          </div>
        )}
      {copyright && <div className="copyright">{copyright}</div>}
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
)(GlobalFooter);
