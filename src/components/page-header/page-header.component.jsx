import styles from './page-header.styles.module.css';

const PageHeader = ({ state, dispatch, setAuthData }) => {
  return (
    <div className={styles.header}>
        <div className="container">
          <header className={styles.page_header}>
            <ul className={styles.top_nav}>
              <li className={styles.topNav_item} >logo</li>
              <li className={styles.topNav_item} >
                {
                  state.auth.isAuth
                    ? <span> { state.auth.data.login } </span>
                    : <span style={{ cursor: "pointer" }} onClick={() => { dispatch(setAuthData()) }} >LogIn</span>
                }
              </li>
            </ul>
          </header>
        </div>
      </div>
  )
}

export default PageHeader
