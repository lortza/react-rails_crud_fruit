class AllFruits extends React.Component {

  render(){
    const mappedFruits = this.props.fruits.map((fruit) => {
      return( <Fruit key={fruit.id} data={fruit} handleDelete={this.props.handleDelete} /> )
    })

    return (
      <div>
        {mappedFruits}
      </div>
    )
  }
}
