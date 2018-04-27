import React from 'react';

export default class CharacterItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by4">
              <img
                src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`}
                alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {this.props.character.name}
                </p>
              </div>
            </div>
            <div className="content has-text-left">
              {
                (this.props.character.description == "")
                ? "No Data Available"
                : this.props.character.description
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
