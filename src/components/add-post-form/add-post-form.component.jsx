import { reduxForm, Field } from 'redux-form'

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostBody" placeholder="Add new post" component="textarea" />
      <button>-></button>
    </form>
  )
}

const ReduxAddPostForm = reduxForm({form: "addPostForm"})(AddPostForm);

export default ReduxAddPostForm
