import { INCREMENTCOUNTER } from "../components/constants";

// inital reducer values before update func 
const instialState = {
    age: 1,
}

//  Reducer update its state values based on actions
function counterReducer(state = instialState, action) {
    switch (action.type) {
      case INCREMENTCOUNTER: {
        return {
          ...state,
          age: state.age + 1
        };
      }
      default: return {...state};
    }
}

// export const { INCREMENTCOUNTER } = counterReducer.actions

export default counterReducer;