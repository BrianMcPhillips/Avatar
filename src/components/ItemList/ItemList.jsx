import React, { Component } from 'react';
import Item from './Item/Item';

export default class ItemList extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        {
          data.map(character => <Item key={character._id} data={character}/>)
        }
      </div>
    );
  }
}
