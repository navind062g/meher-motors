import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    'Manufacturer': 'manufacturer',
    'Year Of the Model': 'year_model',
    'Model Number': 'model_number'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return (Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        }));
    }


    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Manufacturer/Make" />
                    <input placeholder="Search Model Number" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Ride</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;