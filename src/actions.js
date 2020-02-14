import axios from "axios";
import {LOAD_TRIPS_ACTION, SHOW_TRIP_ACTION} from "./action-types";
import {useDispatch, useSelector} from "react-redux";

const URL = "/recruitment/challenge";

const sendAction = dispatch => (type, data) => dispatch({type, data})
export const getTripsAction = dispatch => async () => {
    try {
        const trips = await axios.get(URL).then(res => res.data.trips);
        sendAction(dispatch)(LOAD_TRIPS_ACTION, trips);
    } catch (error) {
        console.error("error", error);
    }
};
export const getTripDetail = dispatch => async (tripId) => {
    sendAction(dispatch)(SHOW_TRIP_ACTION, tripId);
};
