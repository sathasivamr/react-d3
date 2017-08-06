import React, { Component } from 'react'
import '../style/App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node

      const dataMax = max(this.props.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   

      
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')


   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', this.props.color[2])
      .attr('x', (d,i) => i * 26)
      .attr('y', d => (this.props.size[1]-100) - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 24)
   }
render() {
      return <div className="bar-chart"><svg  ref={node => this.node = node}
      width={500} height={500}>
      </svg></div>
   }
}
export default BarChart