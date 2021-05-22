import Table from './components/Table';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  
      state = {
        employees: []
      
      
      
      };
      componentDidMount() {
        
      fetch('https://randomuser.me/api/?results=200&nat=us')
      .then(response => response.json())
          .then(data => { 
            this.setState({ 
              employees: data.results
            })
            console.log(this.state.employees)
          });



    //       const article = { title: 'React POST Request Example' };
    // axios.post('https://randomuser.me/api/?results=200&nat=us', article)
    //     .then(response => this.setState({ articleId: response.data.id }));
}
        



    render() {
      return (
        <div>
         <Table
           people={this.state.employees}
         />
        </div>
      );
    }
}

