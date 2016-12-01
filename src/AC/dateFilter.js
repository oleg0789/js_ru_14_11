import {DATE_FILTER} from '../constants'

export function dateFilter(from=null, to=null) {
    return {
        type: DATE_FILTER,
        payload: {
            from: from,
            to: to

        }
    }
}