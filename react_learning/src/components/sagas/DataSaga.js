import { API_POSTS } from "../constants"
import { call } from 'redux-saga/effects'

export function* getApiData(payload){
    console.log('saga call')
    const data = yield call(API_POSTS(payload.count, 10));
    console.log(data);

}