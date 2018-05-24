class AllFruits extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }

  render(){
    const mappedFruits = this.state.fruits.map((fruit) => {
      return(
        <div key={fruit.id}>
          <h2>{fruit.name}</h2>
          <p>{fruit.description}</p>
        </div>
      )
    })

    return (
      <div>
        {mappedFruits}
      </div>
    )
  }
}
