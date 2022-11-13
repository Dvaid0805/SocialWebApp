import { FormControl } from '../forms-controls/forms-controls.component'
import { required, maxLength } from '../../utils/validators/validators';
import { Field, reduxForm } from 'redux-form'


const maxLength10 = maxLength(10);
const FormControlTextarea = FormControl("textarea");

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} style={{ marginTop: "20px" }}>
        <Field
          name="newMessageBody"
          component={FormControlTextarea}
          placeholder="message..."
          validate={[required, maxLength10]}
        />
        <button>-></button>
    </form>
  )
}

const ReduxAddMessageForm = reduxForm({form: "addMessageForm"})(AddMessageForm);

export default ReduxAddMessageForm;