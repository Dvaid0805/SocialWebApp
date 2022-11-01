import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props,{isAuth}) => {
    const navigate = useNavigate();
    useEffect(() => {
      if(!isAuth) {
        navigate("/login");
      }
    }, []);
    return <Component { ...props } />
  }
};