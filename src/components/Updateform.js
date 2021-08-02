import React, { useState} from 'react'
import PersonService from '../services/PersonService'
const Updateform = ({name, number, setEdit, id, setPersons, persons, index}) => {
    const [newName, setNewName] = useState(name)
    const [newNumber, setNewNumber] = useState(number)
    console.log(newName)
    const changeName = (event) => setNewName(event.target.value)
    const changeNumber = (event) => setNewNumber(event.target.value)
    const cancel = (event) => {
        event.preventDefault()
        setNewName(name)
        setNewNumber(number)
        setEdit(false)
    }
    const update = (event) => {
        event.preventDefault()
        const obj = {
            name: newName,
            number: newNumber
        }
        PersonService.update(id,obj).then(modifiedObj => {
            const personsCopy = [...persons]
            personsCopy[index] = modifiedObj
            setPersons(personsCopy)
        })
        setEdit(false)
    }
    return(
        <form onSubmit={update}>
            <input value={newName} onChange={changeName}/> <input value={newNumber} onChange={changeNumber}/>
            <button type="submit">change</button>
            <button type="cancel" onClick={cancel}>Cancel</button>
        </form>
    )
}
export default Updateform