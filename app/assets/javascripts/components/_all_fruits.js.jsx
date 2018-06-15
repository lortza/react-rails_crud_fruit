class AllFruits extends React.Component {

  render(){
    const mappedFruits = this.props.fruits.map((fruit) => {
      return( <Fruit key={fruit.id} data={fruit} handleDelete={this.props.handleDelete} handleUpdate = {this.props.handleUpdate} /> )
    })

    return (
      <div className="all-fruits component">
        <p className="component-name">all_fruits component</p>
        {mappedFruits}
      </div>
    )
  }
}
