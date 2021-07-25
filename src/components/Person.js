import React from 'react'
import PersonService from '../services/PersonService'

const Person = ({name,phoneNum,id,persons,setPersons}) => {
    const deletePerson = () =>{
        PersonService.deleteOne(id).then(r => console.log(r));
        setPersons(persons.filter(person=>person.id !== id))
    }
    const confirm = () => {
        if(window.confirm(`delete${name}`)){
            deletePerson()
            return true
        }
        return false
    }

    return(
        <div>
            <p> {name} {phoneNum}</p>
            <button onClick = {confirm}>delete </button>
        </div>

    )
}
export default Person