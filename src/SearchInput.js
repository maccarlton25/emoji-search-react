import React, { PureComponent } from "react";

export default class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} aria-label="Search emoji" />
        </div>
      </div>
    );
  }
}
