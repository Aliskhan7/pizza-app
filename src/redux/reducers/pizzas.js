const initialState = {
  items: [],
  loading: false
}

const pizzas = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_PIZZAS':
      return{
        ...state,
        items: action.payload,
        loading: true,
      }
    case 'SET_LOADED':
      return{
        ...state,
        loading: action.payload
      }

    default:
      return state;
  }
}
export default pizzas;