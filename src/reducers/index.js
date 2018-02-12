import {combineReducers} from 'redux';

 let testData = "hello";
const allReducers = combineReducers({
    testData: testData,
});

export default allReducers
