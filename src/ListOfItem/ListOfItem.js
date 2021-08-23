import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";

class ListOfItem extends React.Component {
  state = { images: [] };
  //   onSearchSubmit(term) {
  //     axios
  //       .get("https://api.unsplash.com/search/photos", {
  //         params: { query: term },
  //         headers: {
  //           Authorization:
  //             "Client-ID ad5tlP3zZT9jbp5QUOUm7fLkEE4avuhkh7BmJGu_384",
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data.results);
  //       });
  //   }
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID ad5tlP3zZT9jbp5QUOUm7fLkEE4avuhkh7BmJGu_384",
      },
    });
    // console.log(response.data.results);

    console.log(this);
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar submitValue={this.onSearchSubmit} />
        Found : {this.state.images.length} images
      </div>
    );
  }
}

export default ListOfItem;
