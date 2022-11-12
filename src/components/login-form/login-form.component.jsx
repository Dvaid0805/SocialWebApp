import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="login" component="input" placeholder="Login" />
      </div>
      <div>
        <Field name="password" component="input" placeholder="Password" />
      </div>
      <div>
        <Field name="remember" component="input" type="checkbox"/> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm
