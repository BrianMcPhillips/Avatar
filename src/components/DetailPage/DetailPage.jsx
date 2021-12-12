import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailPage extends Component {
  state = {
    character: {}
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    const id = this.props.match.params.avatarId;
    fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
      .then(res => res.json())
      .then(character => this.setState({ character }));
  }
  render() {
    const {
      character
    } = this.state;
    return (
      <div>
        <img src={character.photoUrl} alt={character.name} />
        <h3>{character.name}</h3>
      </div>
    );
  }
}
