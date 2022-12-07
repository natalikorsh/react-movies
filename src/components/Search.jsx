import React from "react";

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type);
    })
  }

  render() {
    return <div>
      <div className="row">
        <div className="input-field col s12">
          <input 
            placeholder="search" 
            type="text" 
            className="validate"
            onChange={(evt) => this.setState({search: evt.target.value})}
            onKeyDown={this.handleKey} 
          />
          <button 
            className="btn red lighten-2 search-button"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >Search
          </button>
        </div>
      </div>

      <div className="filter-row">
      <p className="filter-item">
      <label>
        <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          checked={this.state.type === 'all'}
          data-type="all"
          onChange={this.handleFilter}
        />
        <span>All</span>
      </label>
      </p>
      <p className="filter-item">
      <label>
        <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          checked={this.state.type === 'movie'}
          data-type="movie"
          onChange={this.handleFilter}
        />
        <span>Movies</span>
      </label>
      </p>
      <p className="filter-item">
      <label>
        <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          checked={this.state.type === 'series'}
          data-type="series"
          onChange={this.handleFilter}
        />
        <span>Series</span>
      </label>
      </p>
      </div>
    </div>
  }
}

export {Search};