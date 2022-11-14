import { FormControl } from '../forms-controls/forms-controls.component';
import { required, maxLength } from '../../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';

const maxLength40 = maxLength(40);
const FormControlInput = FormControl("input")

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component={FormControlInput}
          placeholder="Email"
          validate={[required, maxLength40]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={FormControlInput}
          placeholder="Password"
          type="password"
          validate={[required, maxLength40]}
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
      <div style={{ color: "red" }} >
        {props.error}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm
