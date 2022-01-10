import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import CardList from './CardList';
import {robots} from './robots.js';
import SearchBox from "./SearchBox.js";
import './App.css';
import Scroll from './Scroll.js';

class App extends Component {
    //App compoent has 2 states, robots and searchfield. These are what changes in an App
    //As this has a state it is referred to as a smart component
    constructor() {
        super()
        this.state = {
            //State is something that can change and affect the App
            robots: [],
            searchfield: ''
        }
        console.log("Constructor")
    }

        componentDidMount () {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {this.setState({ robots: users})})
            console.log("ComponentDidMount")
            /*This is displayed on the console when the component is mounted 
            correctly to the website */
        }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //The above shows a log in the consol of user inputted data
    }


    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    // need to put filtered robots in this section so it can be passed through to CardList
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
            // Returns message to use in case the fetch command is lengthy etc
        } else {
            console.log("render")
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
        }


    }
}
    
export default App