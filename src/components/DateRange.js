import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { dateFilter } from '../AC/dateFilter'
import {connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        this.setState(DateUtils.addDayToRange(day, this.state))
        const {dateFilter} = this.props
        const {from, to} = this.state

        //if(from && to ) {
            dateFilter({from: from, to: to})
      //  }
    }


    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from} - ${to}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.state) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, {dateFilter})(DateRange)