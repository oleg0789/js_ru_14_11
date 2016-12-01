import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import selectFilterReducer from './selectFilterArticles'
import dateFilterReducer from './dateFilterReducer'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    selectFilter: selectFilterReducer,
    dateFilter: dateFilterReducer
})