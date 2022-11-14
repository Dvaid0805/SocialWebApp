import LoginForm from '../../components/login-form/login-form.component';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthUserData, logIn, logOut } from '../../store/auth/authAction'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.data.isAuth);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    dispatch(logIn(formData.email, formData.password, formData.rememderMe))
    console.log(formData)
  }
  if(auth) {
    return navigate("/profile");
  }
  return (
    <div>
      <h1>LOgin</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
