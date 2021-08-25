import React from "react";
import SearchBar from "./components/SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

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
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(response.data.results);

    //console.log(this); 여기서 this 는 class ListOfItem 이라는 컴포넌트 부모를 바라보고있는 this가 아니고
    // 이 this가 콜백으로 불리고있는 searchbar라는 컴포넌트를 바라보고있음.
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar submitValue={this.onSearchSubmit} />
        {/* Found : {this.state.images.length} images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ListOfItem;
