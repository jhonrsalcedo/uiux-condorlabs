import React, { Component } from 'react';
import axios from 'axios';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiinstagram:[]
     }
  }
//peticion a la api solo despues de que haya sido montado en el dom
  componentDidMount() {
    this.getApi();       
  }
  getApi = async() =>{

      //obtener con axios get
      try{
          const response = await axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=31081980.5032f3e.f622c64980a04338a87830bafb00ab01`);
          console.log(response.data) 
          this.setState({
            apiinstagram:response.data
            })
      }catch(error){
          console.error(`Hay un error ${error}`)
         
      }
    
  }

  render() { 
    return ( <div className="container">
       <Nav />
       <Header />
      <div className="container">
      <Gallery 
        apiinstagram = {this.state.apiinstagram}
      />
      </div>
      <Footer />
    </div> );
  }
}
 
export default App;
