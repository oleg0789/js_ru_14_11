import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends Component {

    state = {
        from: null,
        to: null
    }

    render() {
        let text = ''
        if ( !this.state.from ) text = 'Please select start date'
        else if( !this.state.to ) text = 'Please select end date'
        else text = `Your start date is ${this.state.from.toLocaleDateString()} and end date is ${this.state.to.toLocaleDateString()}`

        return(
            <div>
                <p>{text}</p>
                <DayPicker
                    firstDayOfWeek={1}
                    onDayClick={this.handleClick}
                    selectedDays={this.isSelected}
                />
            </div>
        )
    }

    isSelected = day => {return DateUtils.isDayInRange(day, this.state)}

    handleClick = (e, day) => {
        let range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

}

export default Calendar