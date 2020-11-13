import React from 'react';
import { IconName } from "react-icons/im";
import './App.css';
import './App.css';
import { Header, Mainheader} from './Components/Header'
import Jumbotron from './Components/Footer'
import Seller from './Components/Seller.js'
import Lastfooter from './Components/Lastfooter'



class App extends React.Component{
  
  render(){
    

    return(

      <div>
        <Mainheader/>
        <Header/>
        <Jumbotron/>
        <Seller/>

        <Lastfooter/>

      </div>
      
    )
  }
}


export default App;
