import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";

class ListOfItem extends React.Component {
  onSearchSubmit(term) {
    axios.get("http://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID ad5tlP3zZT9jbp5QUOUm7fLkEE4avuhkh7BmJGu_384",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar submitValue={this.onSearchSubmit} />
      </div>
    );
  }
}

export default ListOfItem;
