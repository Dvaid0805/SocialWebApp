import { Link } from 'react-router-dom';
import styles from './tab-item.styles.module.css';

const TabItem = (props) => {
  const {id, name} = props
  return <Link to={id} className={styles.tab_item}>{name}</Link>
}

export default TabItem
