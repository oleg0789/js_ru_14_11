import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import store from '../store'
import { connect } from 'react-redux'
import {selectFilter} from '../AC/selectFilter'

class App extends Component {

    state = {
        selected: null
       // options: store.getState().articles
    }

//     componentDidMount() {
//        store.subscribe(this.onArticlesChange)
// }
    onArticlesChange =() => {
      this.props.optionList = store.getState().articles
       // this.setState({
          //  options: store.getState().articles
      //  })
    }

    render() {
        // const {optionList}  = this.state.options
         const {options, value}  = this.props
         const options2 = options.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />

               <Select options = {options2} value = {value} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => {
        const {value, selectFilter} = this.props
        this.setState({ selected })
        selectFilter(selected)
    }
}

export default (connect(state=>({options: state.articles, value: state.selected}), {selectFilter}
))(App)