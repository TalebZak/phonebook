import React, {useState} from 'react'
import PersonService from '../services/PersonService'
import Updateform from './Updateform'
const Person = ({name, number, id, persons, setPersons, index}) => {
    const [edit, setEdit] = useState(false)
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
    let display;
    if(edit){
        display = <Updateform name={name}
                              number={number}
                              setEdit={setEdit}
                              id={id}
                              persons={persons}
                              setPersons={setPersons}
                              index = {index}/>
    }
    else{
        display = <p> {name} {number}</p>
    }
    return(
        <div>
            {display}
            <button onClick = {confirm}>delete </button>
            {!edit && <button onClick = {() => setEdit(true)}>Modify</button>}
        </div>

    )
}
export default Person