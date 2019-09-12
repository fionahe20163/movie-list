import React from 'react';
import logo from '../data/logo.png';
import { getRenderLists } from '../actions/actionCreator.js';
import store from '../index'
import { connect } from 'react-redux'
import ListTemplate from './listTemplate'

class MainPages extends React.Component {

  componentDidMount() {
    store.dispatch(getRenderLists());
   }

  render(){
    return(
      <div>
        <img src={logo} alt='logo' style={{height:'100px'}}/>
        <ListTemplate
        listTitle="My List"
        renderList={this.props.myLists}
        handleFunction={this.props.removeItem}/>
        <ListTemplate
        listTitle="Recommendations"
        renderList={this.props.recommendation}
        handleFunction={this.props.addItem}/>
        <h2>My list title</h2>
        <ul style={{color:'white'}}>
        {this.props.myLists.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myLists: state.myLists,
    recommendation: state.recommendation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => dispatch({ type: 'REMOVE_ITEM', item }),
    addItem: item => dispatch ({type:'ADD_ITEM', item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPages);
