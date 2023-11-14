import { useState } from 'react'
import data from './data'
import PersonsList from './components/PersonsList'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <PersonsList people={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
