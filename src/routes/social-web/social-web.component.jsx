import PageHeader from '../../components/page-header/page-header.component';
import PageMain from '../../components/page-main/page-main.component';

import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, logOut } from '../../store/auth/authAction';

import styles from './social-web.styles.module.css';
import { useEffect } from 'react'


const SocialWeb = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);

  const onClickLogout = () => {
    dispatch(logOut());
  }

  useEffect(() => {
    if(!state.data.isAuth) {
      dispatch(getAuthUserData())
    }
  }, [state]);



  return (
    <div className={styles.social_web}>
      <PageHeader state={state} onClickLogout={onClickLogout} />
      <PageMain/>
    </div>
  )
}

export default SocialWeb;


