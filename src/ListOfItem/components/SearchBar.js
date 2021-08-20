import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //   onInputChange() {
  //     console.log("input typed inside");
  //   }
  //   onInputClick() {
  //     console.log("input clicked");
  //   }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
