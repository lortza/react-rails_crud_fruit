class Body extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addFruitToView = this.addFruitToView.bind(this)
  }

  handleFormSubmit(name, description) {
    // Turn the form field values into JSON
    let newRecordJSON = JSON.stringify({fruit: {name: name, description: description} })
    // Do a POST request to the Rails API with that data
    fetch('http://localhost:3000/api/v1/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newRecordJSON,
      }).then((response) => {return response.json()})
      .then((fruit)=>{
        // Add that new fruit to the view
        this.addFruitToView(fruit)
      })
  }

  addFruitToView(fruit) {
    // add the new fruit to the array of fruits
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  componentDidMount(){
    // Do a GET request to the Rails API
    // Then set the state data
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }

  render(){
    return (
      <React.Fragment>
        <NewFruitForm handleFormSubmit={this.handleFormSubmit} />
        <AllFruits fruits={this.state.fruits} />
      </React.Fragment>
    )
  }
}
