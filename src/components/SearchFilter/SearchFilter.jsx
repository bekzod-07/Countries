import React, { useState } from 'react';
import "./SearchFilter.css";
import { FaSearch } from 'react-icons/fa';
import Germany from "./CountriesPic/Germany.png";
import USA from "./CountriesPic/usa.jpg";
import Brazil from "./CountriesPic/brazil.jpg";
import Iceland from "./CountriesPic/Iceland.png";
import Afghanistan from "./CountriesPic/Afghanistan.jpg";
import AlandIslands from "./CountriesPic/ÅlandIslands.jpg";
import Albania from "./CountriesPic/Albania.png";
import Algeria from "./CountriesPic/Algeria.png";

const countriesData = [
    { name: 'Germany', population: '81,770,900', region: 'Europe', capital: 'Berlin', img: Germany },
    { name: 'United States of America', population: '323,947,000', region: 'Americas', capital: 'Washington, D.C.', img: USA },
    { name: 'Brazil', population: '206,135,893', region: 'Americas', capital: 'Brasília', img: Brazil },
    { name: 'Iceland', population: '334,300', region: 'Europe', capital: 'Reykjavík', img: Iceland },
    { name: 'Afghanistan', population: '27,657,145', region: 'Asia', capital: 'Kabul', img: Afghanistan },
    { name: 'Åland Islands', population: '28,875', region: 'Europe', capital: 'Mariehamn', img: AlandIslands },
    { name: 'Albania', population: '2,886,026', region: 'Europe', capital: 'Tirana', img: Albania },
    { name: 'Algeria', population: '40,400,000', region: 'Africa', capital: 'Algiers', img: Algeria },
];

function SearchFilter({ darkMode }) {
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCountries = countriesData.filter(country => {
        const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
        const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRegion && matchesSearch;
    });

    return (
        <div className={`SearchFilter ${darkMode ? 'dark' : ''}`}>
            <div className="container">
                <div className="SearchFilter__item">
                    <div className="SearchFilter__item__input">
                        <input
                            type="text"
                            placeholder="Search for a country…"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    <div className="SearchFilter__item__option">
                        <select name="Region" id="Region" onChange={handleRegionChange}>
                            <option value="All">Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>

                <div className="countries">
                    <div className="countries__item">
                        {filteredCountries.map((country, index) => (
                            <div key={index} className="countries__item__info">
                                <div className="countries__item__info__img">
                                    <img src={country.img} alt={country.name} />
                                </div>
                                <div className="countries__item__info__text">
                                    <h3>{country.name}</h3>
                                    <p><b>Population</b>: {country.population}</p>
                                    <p><b>Region</b>: {country.region}</p>
                                    <p><b>Capital</b>: {country.capital}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;
