import React from "react";
import store from "../index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../App.css";
import logo from "../data/logo.png";

import ListTemplate from "./listTemplate";
import { actions, getRenderLists } from "../modules/index";
import selectors from "../modules/selectors";

class MainPages extends React.Component {
  componentDidMount() {
    store.dispatch(getRenderLists());
  }

  render() {
    console.log(this.props);
    const { myLists, recommendation, actions } = this.props;
    const { removeItem, addItem } = actions;
    return (
      <React.Fragment>
        <img src={logo} alt="logo" className="logo" />
        <ListTemplate
          listTitle="My List(s)"
          renderList={myLists}
          handleFunction={removeItem}
        />
        <ListTemplate
          listTitle="Recommendation List(s)"
          renderList={recommendation}
          handleFunction={addItem}
        />
        <h2>My list's title</h2>
        <ul>
          {myLists.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myLists: selectors.getMyList(state),
    recommendation: selectors.getRecommendation(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPages);
