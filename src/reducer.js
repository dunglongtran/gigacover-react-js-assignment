import {combineReducers} from "redux";
import {LOAD_TRIPS_ACTION, SHOW_TRIP_ACTION} from './action-types.js'

const initialState = {trips: [], detail: null};

const handleLoadTrips = (state, action) => ({...state, trips: action.data})
const handleLoadDetail = (state, action) => ({...state, detail: state.trips.find(trip => trip.trip_id == action.data)})
const pureFunctions = {[LOAD_TRIPS_ACTION]: handleLoadTrips, [SHOW_TRIP_ACTION]: handleLoadDetail}
export const tripReducer = (state = initialState, action) => {
    console.log(action)
    return pureFunctions[action.type] ? pureFunctions[action.type](state, action) : state;
};

export const rootReducer = combineReducers({tripReducer});
