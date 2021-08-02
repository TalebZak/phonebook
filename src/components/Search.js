import React, { useState, useEffect } from 'react'

const Search = ({setResult,persons}) => {
    const [search, setsearch] = useState('');
    const changeSearch = (event) => {
        event.preventDefault()
        setsearch(event.target.value)
    }
    useEffect(() => (
        setResult(persons
            .filter(person =>
                person.name.toLowerCase().includes(search.toLowerCase()) || person.number.includes(search)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [search,persons]);
    return (
        <div>
           <input value={search} onChange={changeSearch} />
        </div>
    )
}
export default Search