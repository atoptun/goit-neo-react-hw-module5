import PersonCard from '../PersonCard/PersonCard';
import styles from './PeopleList.module.css';

function PeopleList({ people }) {
  return (
    <ul className={styles.list}>
      {people.map(person => (
        <li className={styles.item} key={person.credit_id}>
          <PersonCard person={person} />
        </li>
      ))}
    </ul>
  );
}
export default PeopleList;
