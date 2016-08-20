import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Cart.scss'

class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  addItem() {
    let {counter} = this.state;

    this.setState({
      counter: ++counter
    });
  }

  removeItem() {
    let {counter} = this.state;

    if(counter > 0) {
      this.setState({
        counter: --counter
      });
    }
  }

  render() {
    let items = [];

    for(let i=0; i<this.state.counter; i++) {
      items.push(
        <div className="item" key={i}>
          <img src={logo} alt="idk" />
          <div className="details">
            <h3>Item #{i}</h3>
          </div>
        </div>
      );
    }

    return (
      <div>
        Number of items in cart: #{this.state.counter}
        <button onClick={() => this.addItem()}>Add new item</button>
        <button onClick={() => this.removeItem()}>Remove one item</button>
        {items}
      </div>
    );
  }
}

export default Cart;