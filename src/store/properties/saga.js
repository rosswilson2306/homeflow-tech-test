import { takeLatest, put, call } from "redux-saga/effects";

import { propertyService } from "../../services/property.service.ts";

import {
  getPropertiesSuccess,
  getPropertiesFail,
  getProperties,
} from "./actions";
import { GET_PROPERTIES } from "./actionTypes";

function* onGetProperties({ payload: param }) {
  try {
    const response = yield call(propertyService.getProperties, param);

    yield put(getPropertiesSuccess(response));
  } catch (error) {
    yield put(getPropertiesFail(error));
  }
}

function* PropertiesSaga() {
  yield takeLatest(GET_PROPERTIES, onGetProperties);
}

export default PropertiesSaga;
