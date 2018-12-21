import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = { images: [], page: 1, term: ''};

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.searchResults(this.state.term, this.state.page);
        }
    }

    deleteDuplicates = (images) => {
        const imagesToReturn = Object.values(images.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}));
        return imagesToReturn;
    }

    searchResults = async (term, currentPage) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 30,
                page: currentPage
            }
        });
        
        var imagesToDisplay = [];
        if (this.state.page === 1){
            imagesToDisplay = response.data.results;
        } else {
            imagesToDisplay = this.deleteDuplicates(this.state.images.concat(response.data.results));
        }
        
        this.setState({ images: imagesToDisplay, page: currentPage + 1 });
    }

    onSearchSubmit = (term) => {
        this.searchResults(term, 1);
        this.setState({ page: 1, term: term });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;