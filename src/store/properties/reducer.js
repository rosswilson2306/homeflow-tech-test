import {
  GET_PROPERTIES,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAIL,
} from "./actionTypes";

const initialState = {
  properties: [],
  propertyDetails: {},
  propertyStatus: "idle",
  error: null,
};

const PropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return { ...state, propertyStatus: "loading" };
      break;
    case GET_PROPERTIES_SUCCESS:
      return {
        ...state,
        propertyStatus: "succeeded",
        properties: action.payload,
        error: null,
      };
      break;
    case GET_PROPERTIES_FAIL:
      return { ...state, propertyStatus: "failed", error: action.payload };
  }
};

export default PropertiesReducer;
