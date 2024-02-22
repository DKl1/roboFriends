import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba br2 b--blue bg-lightest-blue hover-bg-black-10'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;
