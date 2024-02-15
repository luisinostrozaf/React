import { useState } from 'react';

const Animal = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={e => setLocation(e.target.value)}id="location" value={location} placeholder="Location" />
                </label>
                <button>Submit</button>
                <label htmlFor="animal">
                    Animal
                </label>
                <select value={animal} onChange={e => setAnimal(e.target.value)}>
                    <option />
                    {Animal.map(animal => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
}

export default SearchParams;