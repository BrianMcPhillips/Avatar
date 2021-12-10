import React, { Component } from 'react';

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
    return (
      <div>
        
      </div>
    );
  }
}
