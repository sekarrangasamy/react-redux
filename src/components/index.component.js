import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {connect} from 'react-redux';
import {getName} from '../store/addAction';

class Index extends Component {

    componentWillMount(){
      if(this.props.tab >= 0){
        this.props.getName();
      }
    }
    
    tabRow(){
      return this.props.tab.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Name List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }

  const mapStateToProps = (state) =>{
    console.log("storevalues",state)
    return{
      tab : state.details
    }
  }

    const mapDispatchToProps = {
      getName
    }

  export default connect(mapStateToProps,mapDispatchToProps)(Index)