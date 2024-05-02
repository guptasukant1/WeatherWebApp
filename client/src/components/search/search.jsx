import { useState } from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import { GEO_API_URL, geoAPIOptions } from '../../api';

const Search = ({onSearchChange})=>{

    const [search, setSearch] = useState(null)
    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData)
    }

    const loadOptions = async (inputValue) =>{
        // try {
        //     const response = await fetch("/cities", geoApoiOptions);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoAPIOptions);
            const result = await response.json();
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.logitude}`,
                        label: `${city.name} ${city.countryCode}`,
                    };
                })
            };
        } catch (err) {
            return console.error(err);
        }
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value = {search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search