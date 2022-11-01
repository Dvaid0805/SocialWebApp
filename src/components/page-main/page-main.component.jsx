import Navigation from '../navigation/navigation.component';

import { Outlet } from 'react-router-dom'

import styles from './page-main.styles.module.css';

const PageMain = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.main_inner}>
          <div className={styles.root_container}>
            <Navigation/>
          </div>
          <div className={styles.content_container}>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageMain
