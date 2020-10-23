import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Choixprofil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
   
      <div className="container">
        <div className="row">
          <div className="col-sm-4"><button>Aurélien</button></div>
          <div className="col-sm-4"><button>Julien</button></div>
          <div className="col-sm-4"><button>Oscar</button></div>
        </div>
      </div>
     
      
      
    );
  }

}



class Profil extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    return (
      <div className="case">
        <center><img src="index.png"></img></center>
        <div className = "container">
          <div class="row">
            <div className="col-sm-6"><h3>Aurélien</h3></div>
            <div className="col-sm-6"><h3>Davodet</h3></div> 
          </div> 
        </div>
        <div><p>24/04/1998</p></div>
        <div><button>Change Style</button></div>
        
        
      </div>
    );
  }
}

class Super extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    return (
      <div className="case">
        <p>Si vous cliquez sur ce bouton, il affichera "c'est super" à chaque click</p>
        <div><button>Change Style</button></div>
        
        
      </div>
    );
  }
}


class Affichage extends React.Component {

  render() {
  
    if(true){
      return (
        <div>
          <Choixprofil />
          <br></br>
          <Profil />
          <br></br>
          <Super />
        </div>
      );
    }else{
      return (
        <div>
          <Profil />
          <br></br>
          <Choixprofil />
          <br></br>
          
          <Super />
        </div>
      );
    }
    
  }

}


ReactDOM.render(
  <Affichage />,
  document.getElementById('root')
);
