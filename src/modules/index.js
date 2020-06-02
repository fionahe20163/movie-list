import { ACTIONS } from "./constants";

import axios from "axios";

export const addItem = (item) => ({
  type: ACTIONS.ADD_ITEM,
  item,
});

export const fetchData = (data) => ({
  type: ACTIONS.FETCH_DATA,
  data,
});

export const removeItem = (item) => ({
  type: ACTIONS.REMOVE_ITEM,
  item,
});

export const actions = {
  addItem,
  fetchData,
  removeItem,
};

export const getRenderLists = () => {
  return (dispatch) => {
    axios
      .get("moviedata.json")
      .then((response) => {
        const data = response.data;
        dispatch(fetchData(data));
      })
      .catch(() => {
        alert("there is an error when fetching the data!!");
      });
  };
};

const initialState = {
  myLists: [],
  recommendation: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        myLists: action.data.mylist,
        recommendation: action.data.recommendations,
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        myLists: state.myLists.filter((list) => list.id !== action.item.id),
        recommendation: [...state.recommendation, action.item],
      };
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        myLists: [...state.myLists, action.item],
        recommendation: state.recommendation.filter(
          (list) => list.id !== action.item.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
