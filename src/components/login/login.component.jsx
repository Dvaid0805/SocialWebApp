import LoginForm from '../login-form/login-form.component';

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>LOgin</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
