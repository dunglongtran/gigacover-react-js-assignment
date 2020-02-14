import React from "react";
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import {useSelector} from 'react-redux'
import {ListTrips, TripDetail} from "./components";

const PrivateRoute = props => {
    const trips = useSelector(state => state.tripReducer.trips)
    return trips.length > 0 ? <Route path={props.path} component={props.component}/> : <Redirect to="/"/>
}
export const Routes = () => (
    <Router>
        <Switch>
            <Redirect exact path="/" to="/list"/>
            <Route path="/list">
                <ListTrips/>
            </Route>
            <PrivateRoute path={"/detail/:tripId"} component={TripDetail}/>
        </Switch>
    </Router>
);
