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
    const {myLists, removeItem, recommendation, addItem} = this.props
    return(
      <React.Fragment>
        <img src={logo} alt='logo' style={{height:'100px'}}/>
        <ListTemplate
        listTitle="My List(s)"
        renderList={myLists}
        handleFunction={removeItem}/>
        <ListTemplate
        listTitle="Recommendation List(s)"
        renderList={recommendation}
        handleFunction={addItem}/>
        <h2>My list's title</h2>
        <ul style={{color:'white'}}>
        {myLists.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
      </React.Fragment>
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
