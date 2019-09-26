const initialState = {
  myLists:[],
  recommendation:[]
}

const reducer = (state = initialState, action) => {
switch (action.type) {
  case 'FETCH_DATA':
      return {
      ...state,
      myLists: action.data.mylist,
      recommendation: action.data.recommendations
    }
  case 'REMOVE_ITEM':
    return {
      ...state,
      myLists: state.myLists.filter(list => list.id !== action.item.id),
      recommendation: [...state.recommendation, action.item]
    }
  case 'ADD_ITEM':
    return {
      ...state,
      myLists: [...state.myLists, action.item],
      recommendation: state.recommendation.filter(list => list.id !== action.item.id)
    }
  default:
    return state;
  }
}

export default reducer;
