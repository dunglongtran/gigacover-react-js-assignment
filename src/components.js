import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from 'react-router-dom'
import {getTripDetail, getTripsAction} from "./actions";
import camelCase from 'camelcase'
import './component.scss';


export const ListTrips = props => {
    const trips = useSelector(state => state.tripReducer.trips);
    // console.log(trips);
    const history = useHistory();
    const dispatch = useDispatch();
    const actionTrips = getTripsAction(dispatch);
    const loadTrips = async () => {
        if (!trips || trips.length === 0) {
            await actionTrips()
        }
        console.log(trips)
    };
    useEffect(() => {
        loadTrips();
    }, [trips]);
    return <div className={"app"}>
        <ul id={'list-trips'}>
            {trips.map(trip => <li key={trip.trip_id} className={'trip-item'}
                                   onClick={() => history.push(`/detail/${trip.trip_id}`)}>
                <div className={'trip-info'}>
                    <h2> Trip : {trip.trip_id}</h2>
                    <span> Distance: {trip.distance}</span>
                </div>
            </li>)}
        </ul>
    </div>;
};
export const TripDetail = props => {
    const detail = useSelector(state => state.tripReducer.detail);
    const {tripId} = useParams();
    const dispatch = useDispatch();
    const actionDetail = getTripDetail(dispatch);
    useEffect(() => {
        actionDetail(tripId)
    }, [detail, tripId])
    return (
        <div id={'trip-detail'}>
            {Object.keys(detail || {}).map(key => (
                <div className={'detail-item'} key={key}>
                    <label>{camelCase(key, {pascalCase: true})}</label>:<span>{detail[key]}</span></div>
            ))
            }
        </div>)

}

