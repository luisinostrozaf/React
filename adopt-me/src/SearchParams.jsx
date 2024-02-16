import { useState, useEffect } from 'react';

const Animal = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pet, setPets] = useState([]);
    const breeds = [""];

    useEffect(() => {
        requestPets();
    });

    async function requestPets() {
        const res = await fetch (
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
    };

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={e => setLocation(e.target.value)}id="location" value={location} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                </label>
                <select value={animal} onChange={e => {setAnimal(e.target.value); setBreed("");}}>
                    <option />
                    {Animal.map(animal => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}
                </select>
                <label htmlFor="breed">
                    Breed
                </label>
                <select value={breed} disabled = {breeds.length === 0} onChange={e => setBreed(e.target.value)}>
                    <option />
                    {breeds.map(breed => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;