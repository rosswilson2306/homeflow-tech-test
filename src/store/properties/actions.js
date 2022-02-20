import {
  GET_PROPERTIES,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAIL,
} from "./actionTypes";

export const getProperties = (param) => {
  return { type: GET_PROPERTIES, payload: param };
};
export const getPropertiesSuccess = (properties) => {
  return { type: GET_PROPERTIES_SUCCESS, payload: properties };
};
export const getPropertiesFail = (error) => {
  return { type: GET_PROPERTIES_FAIL, payload: error };
};
