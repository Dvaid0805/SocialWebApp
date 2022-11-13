import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

export const WithAuthRedirect = (Component) => {
  const AuthContainer = () => {
    const isAuth = useSelector(state => state.auth.data.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
      if(!isAuth) {
        navigate("/login")
      }
    }, []);

    return (
      <Component/>
    )
  }
  return AuthContainer;
}