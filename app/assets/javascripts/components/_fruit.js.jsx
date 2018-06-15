class Fruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.handleUpdate = this.props.handleUpdate.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let id = this.props.data.id
      let fruit = {id: id, name: name, description: description}
      this.props.handleUpdate(fruit)
    }
    // Toggle the edit state
    this.setState({
      editable: !this.state.editable
    })
  }

  cancelEdit(){
    // Toggle the edit state
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    const {id} = this.props.data

    let nameEntry = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.data.name}/> : <h3>{this.props.data.name}</h3>
    let descriptionEntry = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.data.description}/> : <p>{this.props.data.description}</p>
    let cancelButton = this.state.editable ? <button onClick={() => this.cancelEdit()}>Cancel</button> : ""

    return (
    <div className="fruit component">
      <p className="component-name">fruit component</p>
      {nameEntry}
      {descriptionEntry}
      <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
      {cancelButton}
      <button onClick={() => this.props.handleDelete(id)}>Delete</button>
      <hr/>
    </div>
    )
  }
}
