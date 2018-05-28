const NewFruitForm = (props) => {
  let formFields = {}

  // Set the form field refs and the formFields hash with the value from the field
  return (
    <React.Fragment>
      <input ref={(input) => formFields.name = input} placeholder='Enter the name of the item'/>
      <input ref={(input) => formFields.description = input} placeholder='Enter a description' />
      <button onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.description.value)}>Submit</button>
    </React.Fragment>
  )
}
