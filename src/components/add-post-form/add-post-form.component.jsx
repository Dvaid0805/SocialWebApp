import { required, maxLength } from '../../utils/validators/validators';
import { FormControl } from '../forms-controls/forms-controls.component';
import { reduxForm, Field } from 'redux-form'

const maLength40 = maxLength(50);
const FormControlTextarea = FormControl("textarea");

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostBody"
        placeholder="Add new post"
        component={FormControlTextarea}
        validate={[required, maLength40 ]}
      />
      <button>-></button>
    </form>
  )
}

const ReduxAddPostForm = reduxForm({form: "addPostForm"})(AddPostForm);

export default ReduxAddPostForm
