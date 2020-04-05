import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
<<<<<<< HEAD
import Scroll from '../components/Scroll';
=======
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
>>>>>>> 951d08394deea120cd1dae5e6f7de003d04a9c3e
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:  [],
            searchfield: '',
        }    
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));    
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})    
    }
    
    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className ='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>    
            );
        }

    }

export default App;