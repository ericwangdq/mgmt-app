import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import { Button } from 'antd';
import * as actions from './redux/actions';
import _ from 'lodash';

const data = require('./d3-data.json');
const width = 600;
const height = 600;

export class DefaultPage extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    initializing: true,
    data,
  };

  componentDidMount() {
    this.svg = d3
      .select(this.d3Node)
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.simulation = d3
      .forceSimulation()
      .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));
    this.linksGroup = this.svg.append('g');
    this.nodesGroup = this.svg.append('g');
    this.updateDiagrarm();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    if (this.state.data !== prevState.data) {
      this.updateDiagrarm();
    }
  }

  handleAddNode = d => {
    const id = `id${new Date().getTime()}`;
    const node = { id, group: _.random(1, 9) };
    this.setState({
      data: {
        nodes: [...this.state.data.nodes, node],
        links: [...this.state.data.links, { source: 'id1', target: id, value: 1 }],
      },
    });
  };

  updateDiagrarm() {
    const { data } = this.state;
    let link = this.linksGroup
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links);
    link.exit().remove();
    link = link
      .enter()
      .append('line')
      .attr('stroke-width', d => Math.sqrt(d.value))
      .merge(link);

    let node = this.nodesGroup
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes);

    node.exit().remove();
    node = node
      .enter()
      .append('circle')
      .attr('r', d => (d.id === 'id1' ? 24 : 16))
      .attr('fill', d => this.color(d.group))
      .call(
        d3
          .drag()
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended),
      )
      .merge(node);

    this.simulation.nodes(data.nodes).on('tick', () => {
      link
        .attr('stroke', '#c7c7c7')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      node.attr('cx', d => d.x).attr('cy', d => d.y);
    });

    this.simulation
      .force('link')
      .links(data.links)
      .distance(100);

    this.simulation.alpha(1).restart();
  }

  dragstarted = d => {
    if (!d3.event.active) {
      this.simulation.alphaTarget(0.3).restart();
    }

    d.fx = d.x;
    d.fy = d.y;
  };

  dragged = d => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  };

  dragended = d => {
    if (!d3.event.active) {
      this.simulation.alphaTarget(0);
    }

    d.fx = null;
    d.fy = null;
  };

  render() {
    return (
      <div className="dashboard-default-page">
        <div style={{ margin: '0 0 20px 0' }}>
          <Button onClick={this.handleAddNode}>Add node</Button>
          <div className="d3-node" ref={node => (this.d3Node = node)} />
        </div>
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
