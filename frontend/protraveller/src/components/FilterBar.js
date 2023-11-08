import React from 'react';

const FilterBar = ({ locationFilter, setLocationFilter }) => {
    const locations = ['All', 'Paris', 'New York', 'London']; // Define your locations here

    return (
        <div className="mb-4">
            <label className="text-lg font-semibold">Filter by Location:</label>
            <select
                className="p-2 border rounded-md"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
            >
                {locations.map((location) => (
                    <option key={location} value={location}>
                        {location}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterBar;
