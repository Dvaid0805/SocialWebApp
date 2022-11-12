import { Field, reduxForm } from 'redux-form'

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} style={{ marginTop: "20px" }}>
        <Field
          name="newMessageBody"
          component="textarea"
          placeholder="message..."
        />
        <button>-></button>
    </form>
  )
}

const ReduxAddMessageForm = reduxForm({form: "addMessageForm"})(AddMessageForm);

export default ReduxAddMessageForm;