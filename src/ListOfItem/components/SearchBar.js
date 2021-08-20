import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //   onInputChange() {
  //     console.log("input typed inside");
  //   }
  onFormSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              // controlled vs uncontrolled
              // controlled : user 가 type하는 value값이 state값으로 들어와서
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
