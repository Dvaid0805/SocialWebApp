import PageHeader from '../../components/page-header/page-header.component';
import PageMain from '../../components/page-main/page-main.component';

import { setAuthData } from '../../store/user/userAction';
import { useDispatch, useSelector } from 'react-redux'

import styles from './social-web.styles.module.css';

const SocialWeb = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userPage);

  return (
    <div className={styles.social_web}>
      <PageHeader state={state} dispatch={dispatch} setAuthData={setAuthData} />
      <PageMain/>
    </div>
  )
}

export default SocialWeb;


