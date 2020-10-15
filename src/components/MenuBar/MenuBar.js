import React from 'react';
import './MenuBar.css';

let sortByOptions = {
    'Admin': 'Admin',
    'Bikes': 'Bikes',
    'Scooters': 'Scooters',
    'Offers': 'Offers',
    'Finance': 'Finance',
    'Insurance': 'Insurance'
};

class MenuBar extends React.Component {
    renderSortByOptions() {
        return (Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <div className="menu-item" key={sortByOptionValue}><span>{sortByOption}</span></div>;
        }));
    }

    render() {
        return (
            <div className="menubar">
                <div className='main-menu'>
                    {this.renderSortByOptions()}
                </div>
            </div>
        );
    }
};

export default MenuBar;