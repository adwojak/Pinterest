import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

import "./App.scss";

const imagePlaceholders = [
  "https://via.placeholder.com/696x240",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/220x253",
  "https://via.placeholder.com/559x299",
  "https://via.placeholder.com/143x253",
  "https://via.placeholder.com/546x252"
];

const Image = ({ url }) => {
  return <img src={url} alt={url} />;
};

export default () => {
  return (
    <div className="MainWindow">
      {imagePlaceholders.map(image => (
        <Image url={image} />
      ))}
    </div>
  );
};

// class App extends React.Component {
//     state = { images: [], page: 1, term: ''};

//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll);
//     }

//     handleScroll = () => {
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             this.searchResults(this.state.term, this.state.page);
//         }
//     }

//     deleteDuplicates = (images) => {
//         const imagesToReturn = Object.values(images.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}));
//         return imagesToReturn;
//     }

//     searchResults = async (term, currentPage) => {
//         const response = await unsplash.get('/search/photos', {
//             params: {
//                 query: term,
//                 per_page: 30,
//                 page: currentPage
//             }
//         });

//         var imagesToDisplay = [];
//         if (this.state.page === 1){
//             imagesToDisplay = response.data.results;
//         } else {
//             imagesToDisplay = this.deleteDuplicates(this.state.images.concat(response.data.results));
//         }

//         this.setState({ images: imagesToDisplay, page: currentPage + 1 });
//     }

//     onSearchSubmit = (term) => {
//         this.searchResults(term, 1);
//         this.setState({ page: 1, term: term });
//     }

//     render() {
//         return (
//             <div className="ui container" style={{ marginTop: '10px' }}>
//                 <SearchBar onSubmit={this.onSearchSubmit} />
//                 <ImageList images={this.state.images} />
//             </div>
//         );
//     }
// }

// export default App;
