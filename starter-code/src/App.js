import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import {AddNewFood} from './components/AddNewFood';
import {SearchBar} from './components/SearchBar';
import { TodaysFood } from './components/TodaysFood';

class App extends Component {
  state = {
    foods: foods,
    todaysFood: []
  };

  addNewFood = newFood => {
    this.setState({
      foods: [newFood, ...this.state.foods],
    });
  };

  searchItems = e => {
    const newList = this.state.foods.filter(item => {
      let mySearch = item.name.toLowerCase();
      return mySearch.includes(e.target.value.toLowerCase());
    });
    if (e.target.value === '') {
      this.setState({
        foods: foods,
      });
    } else {
      this.setState({
        foods: newList,
      });
    }
  };

  addTodaysFood = (food, e) => {
  
      this.setState({
        todaysFood: [food, ...this.state.todaysFood]
      })
  }

  
  render() {
    return (
      <div>
        <SearchBar searchItems={this.searchItems} />
        <AddNewFood foods={this.state.foods} addNewFood={this.addNewFood}  />
        {this.state.foods.map((food, index) => {
          return <FoodBox key={index} food={food} addTodaysFood={this.addTodaysFood} todaysFood={this.state.todaysFood} />;
        })}
        <TodaysFood todaysFood={this.state.todaysFood} />
      </div>
    );
  }
}

export default App;
