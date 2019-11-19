import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

import './index.css';
import { trackEvent } from '../../util/analytics';

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onTabSelected = (tab) => {
    this.setState({ activeTab: tab });
    trackEvent('Click', { 'Homepage Tab' : tab});
  }

  render() {
    const {
        onTabSelected,
        props: {
            children,
        },
        state: {
            activeTab,
        }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onTabSelected}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
