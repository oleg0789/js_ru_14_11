import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            openedId: null
        }
    }

    render() {
        return <Component {...this.props} isElemOpened = {this.isOpen} {...this.state} toggleElem = {this.toggleElem} />
    }

    isOpen =id =>  {
        return id == this.state.openedId
    }

    toggleElem = id => event => {
        this.setState({
            openedId: this.state.openedId == id ? null : id
        })
    }
}