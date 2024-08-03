import React, { useState } from 'react';
import './search.css';
import { FaSearch } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

const defaultData = [
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 },
    { name: "All", number: 100 }
];

function Search({ data = defaultData ,name='Coupon' }) {
    const [checked, setChecked] = useState(Array(data.length).fill(false));
    const [showAll, setShowAll] = useState(false);

    const handleCheckboxClick = (index) => {
        setChecked(prevChecked => {
            const newChecked = [...prevChecked];
            newChecked[index] = !newChecked[index];
            return newChecked;
        });
    };

    const handleShowMoreClick = () => {
        setShowAll(true);
    };

    const itemsToShow = showAll ? data : data.slice(0, 10);

    return (
        <div className='search-container'>
            <div className='search-header'>
                <div className='search-header-flex'>
                    <h2 className='search-type'>{name} Type</h2>
                    <div className='line'></div>
                </div>
                <div className='search-input-container'>
                    <input type="text" name="fname" className='search-input' placeholder='Search' />
                    <FaSearch className='search-icon' />
                </div>
            </div>
            <div />
            {itemsToShow.map((item, index) => (
                <div key={index} className='search-item'>
                    <div className='search-item-flex'>
                        <div className='checkbox' onClick={() => handleCheckboxClick(index)}>
                            {checked[index] ? <IoCheckbox className='checkbox-icon' /> : <MdCheckBoxOutlineBlank className='checkbox-icon' />}
                        </div>
                        <h3 className='search-item-name'>{item.name}</h3>
                    </div>
                    <p className='search-item-number'>{item.number}</p>
                </div>
            ))}
            {!showAll && data.length > 10 && (
                <div className='search-show-more' onClick={handleShowMoreClick}>
                    Show more
                </div>
            )}
        </div>
    );
}

export default Search;
