import { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  //const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault;
  }
    return (
        <form onSubmit={handleSearch}>
        <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;