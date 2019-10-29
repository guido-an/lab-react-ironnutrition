import React from 'react';

export class AddNewFood extends React.Component {
  state = {
    submitted: false,
    name: '',
    calories: '',
    image: '',
    quantity: ''
  };

  displayForm = () => {
      this.setState({
          submitted: true
      })
  }

  handleInputChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
        submitted: false
    })
  };

  render() {
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      quantity: this.state.quantity
    };

    return (
      <div>
 
      {this.state.submitted && (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleInputChange} />
          <input
            type="text"
            name="calories"
            onChange={this.handleInputChange}
          />
          <input onClick={() => this.props.addNewFood(newFood)} type="submit" />
        </form>
      )}
        <button onClick={this.displayForm}>Add new food</button>
       
       
      </div>
    );
  }
}
