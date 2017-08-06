
import React, { Component } from 'react';

import '../style/App.css';
import BarChart from './Chart.js';

import myData from '../mock/dataset.json';

// import { scaleLinear } from 'd3-scale'
// import { max } from 'd3-array'
// import { select } from 'd3-selection'
//import $ from 'jquery';
class App extends Component {

  constructor(props) {
    super(props);

 
    this.state = {dataset: []};
    this.chartData = [5,4,1,33,44,4,44,5,3];
    this.reducedDataset = { year:[], growth:[]};
    this.dataSet();
  }

  /**
  * Grouping the dataset based on year
  */
  dataSet() {
     this.state = { dataset: myData.dataset };
    let count = 0;
    
     this.state.dataset.forEach(function(element) {
      this.reducedDataset.year.indexOf(element.fields.year)
        if(this.reducedDataset.year.indexOf(element.fields.year) >=0){
         let pos = this.reducedDataset.year.indexOf(element.fields.year);
          this.reducedDataset.year[pos] = element.fields.year;
          this.reducedDataset.growth[pos]+= element.fields.cumulative_growth ? Math.round(Number(element.fields.cumulative_growth)): 0;     
        }else{
         this.reducedDataset.year[count] = element.fields.year;
        this.reducedDataset.growth[count] = element.fields.cumulative_growth ? Math.round(Number(element.fields.cumulative_growth)): 0;
        count++;
        }
     }, this);
      console.log(this.reducedDataset.growth)
             
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
       
          <h2>Demand Data at Indian Industries By Sector In each Year</h2>
        </div>
       <div className="select-list">
         <select>
           <option>BarChart</option>
           <option>PieChart</option>
           <option>LineChart</option>
           </select>
           
        </div>

       <BarChart data={this.reducedDataset.growth} size={[500,500]} color={['rgba(243, 156, 18,1.0)','rgba(142, 68, 173,1.0)','rgba(26, 188, 156,1.0)','rgba(230, 126, 34,1.0)']}/>

      </div>
      

    );
  }
}

export default App;
