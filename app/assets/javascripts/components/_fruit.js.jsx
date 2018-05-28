class Fruit extends React.Component {
  render(){
    const {id, name, description} = this.props.data
    return (
    <React.Fragment>
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={() => this.props.handleDelete(id)}>Delete</button>
    </React.Fragment>
    )
  }
}
