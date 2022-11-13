import { FormControl } from '../forms-controls/forms-controls.component';
import { required, maxLength } from '../../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';

const maxLength20 = maxLength(20);
const FormControlInput = FormControl("input")

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component={FormControlInput}
          placeholder="Email"
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={FormControlInput}
          placeholder="Password"
          type="password"
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          name="rememberMe"
          component={FormControlInput}
          type="checkbox"
          validate={[required]}
        /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm
