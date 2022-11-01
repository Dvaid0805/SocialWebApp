import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';

import { setAuthData } from '../../store/user/userAction';
import { useDispatch, useSelector } from 'react-redux'

import styles from './social-web.styles.module.css';

const SocialWeb = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userPage);

  const {social_web, content_container} = styles;

  return (
    <div className={social_web}>
      <div>
        <div>
          {
            state.auth.isAuth
              ? <span> { state.auth.data.login } </span>
              : <span style={{ cursor: "pointer" }} onClick={() => { dispatch(setAuthData()) }} >LogIn</span>
          }
        </div>
        <div>
          <Navigation/>
        </div>
      </div>
      <div className={content_container}>
        <Outlet/>
      </div>
    </div>
  )
}

export default SocialWeb;


