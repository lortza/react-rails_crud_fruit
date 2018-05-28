class Fruit extends React.Component {
  render(){
    const {name, description} = this.props.data
    return (
    <React.Fragment>
      <h2>{name}</h2>
      <p>{description}</p>
    </React.Fragment>
    )
  }
}
