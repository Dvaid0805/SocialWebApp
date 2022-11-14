import PageHeader from '../../components/page-header/page-header.component';
import PageMain from '../../components/page-main/page-main.component';

import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../../store/app/appAction';
import { logOut } from '../../store/auth/authAction';
import LoadingProgress from '../../components/loading-progress/loading-progress.component';

import styles from './social-web.styles.module.css';
import { useEffect } from 'react'


const SocialWeb = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const isInitialized = useSelector(state => state.app.initialized)

  const onClickLogout = () => {
    dispatch(logOut());
  }

  useEffect(() => {
    if(!state.data.isAuth) {
      dispatch(initialize())
    }
  }, []);

  return (
    <>
      {
        !isInitialized
          ? <LoadingProgress state={isInitialized} />
          : <div className={styles.social_web}>
              {
                isInitialized &&
                <>
                  <PageHeader state={state} onClickLogout={onClickLogout} />
                  <PageMain/>
                </>
              }
            </div>
      }
    </>
  )
}

export default SocialWeb;


