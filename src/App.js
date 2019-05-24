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
      pictures: ''
    }
  }
  token = '31081980.5032f3e.f622c64980a04338a87830bafb00ab01';
  //peticion a la api solo despues de que haya sido montado en el dom
  componentDidMount() {
    this.getPictures();
  }
  getPictures = async () => {

    //obtener con la libreria de axios los get
    // la ventaja de esta libreria es que facilitara el consumo de servicios web, API REST y que nos devuelvan datos JSON
    try {
      const response = await axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.token}`);
      //para comprabar que estamos recibiendo bien los datos de la Api ejecutiamos un console.log()
      //console.log(response.data.data) 

      this.setState({
        pictures: response.data.data
      })
    } catch (error) {
      console.error(`Hay un error ${error}`)

    }

  }

  render() {
    return (<div>
      <Nav />
      <Header />
      <Gallery
        pictures={this.state.pictures}
      />
      <Footer />
    </div>);
  }
}

export default App;
