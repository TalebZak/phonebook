import React, {useState, useEffect} from 'react'
import PersonService from './services/PersonService'
import Search from './components/Search'
import Person from './components/Person'
const App = () => {
    const [persons, setPersons] = useState([]);
  const [newName, newNameState] = useState('');
  const [newNum, setnewNum] = useState('');
  const [result, setResult] = useState(persons);
  useEffect(() =>  {
         PersonService.getAll().then(data => {
             setPersons(data)
             setResult(data)
         }
         )
      }, []);
  const changeNum = (event) => {
      event.preventDefault()
      setnewNum(event.target.value)
  }
  const changeName = (event) => {
      event.preventDefault()
      newNameState(event.target.value);
  }
  const addPerson = (event) => {
      event.preventDefault()
      if(newName === '' || newNum === ''){
          alert(`A field is still empty`)
          return
      }

      const obj = {name:newName,number: newNum}
      for(const person of persons){
          if(person.name === newName || person.number === newNum){
              alert(`This contact is already added to phonebook`)
              return
          }
      }

      PersonService.create(obj).then(r => setPersons(persons.concat(
          r
          )
      ))


      newNameState('')
      setnewNum('')
  };



  return (
      <div>
        <h2>Phonebook</h2>
          <Search persons={persons} setResult={setResult}/>
          <h3>add a new</h3>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={changeName} />
          </div>
            <div>
                Phone Number: <input value={newNum} onChange={changeNum} />
            </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
          {result.map((a, index) =>
              <Person name={a.name}
                      key={a.id}
                      number={a.number}
                      id={a.id}
                      setPersons={setPersons}
                      persons={persons}
                      index = {index}
              />
          )
          }
      </div>)
}

export default App
