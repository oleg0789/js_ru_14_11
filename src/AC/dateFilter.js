import {DATE_FILTER} from '../constants'

export function dateFilter(from, to) {
    return {
        type: DATE_FILTER,
        payload: {
            from, to
        }
    }
}