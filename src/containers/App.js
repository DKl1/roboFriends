import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {requestRobots, setSearchField} from "../actions";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.getRobotsReducer.users,
        isPending: state.getRobotsReducer.isPending,
        error: state.getRobotsReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = ({searchField, onSearchChange, onRequestRobots, robots, isPending}) => {


    useEffect(() => {
        onRequestRobots();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
        <h1 className='tc'>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )

}

export default connect(mapStateToProps, mapDispatchToProps)(App);