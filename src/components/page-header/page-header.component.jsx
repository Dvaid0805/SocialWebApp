import styles from './page-header.styles.module.css';
import { Link } from 'react-router-dom'

const PageHeader = ({ state, onClickLogout }) => {
  return (
    <div className={styles.header}>
        <div className="container">
          <header className={styles.page_header}>
            <ul className={styles.top_nav}>
              <li className={styles.topNav_item} >logo</li>
              <li className={styles.topNav_item} >
                {
                  state.data.isAuth
                    ?
                    <>
                      <Link to="/profile"> { state.data.login } </Link>
                      -
                      <span style={{ cursor: "pointer" }} onClick={onClickLogout}>Logout</span>
                    </>
                    : <Link to="login" style={{ cursor: "pointer" }}>LogIn</Link>
                }
              </li>
            </ul>
          </header>
        </div>
      </div>
  )
}

export default PageHeader
