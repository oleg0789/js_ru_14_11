import {SELECT_FILTER} from '../constants'

export function selectFilter(selected) {
   return {
       type: SELECT_FILTER,
       payload: {
           selected
       }
   }
}