import Person from './Person'

const PersonsList = ({ people }) => {
  return (
    <section>
      {people.map(person => {
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}
export default PersonsList
