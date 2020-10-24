import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let profils = [
  {
    nom: 'Davodet',
    prenom: 'Aurélien',
    date: '24/04/98',
    photo:'aurel.png',
    publi: "Le React c'est trop coool"
  },
  {
    nom: 'Marze',
    prenom: 'Oscar',
    date: '04/04/99',
    photo:'oscar.png',
    publi: "J'aime la vie"
  },
  {
    nom: 'Maréchal',
    prenom: 'Julien',
    date: '03/08/99',
    photo:'julien.png',
    publi: "Je préfère les pâtes au riz"
  }
];

let n =2;

class Profil extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      color: 'white',
      profil: n
    }
  }

  changeColor = () => {
    if(this.state.color=="white"){
      this.setState({color: "blue"});
    }else{
      this.setState({color: "white"})
    }
    
  }


  changeProfil0 = () => {
    n=0;
    this.setState({profil: n});
  }

  changeProfil1 = () => {
    n=1;
    this.setState({profil: n});
  }

  changeProfil2 = () => {
    n=2;
    this.setState({profil: n});
  }
  

  render() {
    
    return (
      
      <div>
        <center>
          <h1 className="fbtitle">Mini Facebook</h1>
          <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"><button onClick={this.changeProfil0} value="1">Aurélien</button></div>
            <div className="col-sm-4"><button onClick={this.changeProfil1}>Oscar</button></div>
            <div className="col-sm-4"><button onClick={this.changeProfil2}> Julien</button></div>
          </div>
        </div>
        
        <br></br>
        <div className={this.state.color}>
          <img src={profils[this.state.profil].photo}></img>
          
            <div className = "container">
            <br></br>
              <div class="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-3"><h3>{profils[this.state.profil].prenom}</h3></div>
                <div className="col-sm-3"><h3>{profils[this.state.profil].nom}</h3></div> 
                <div className="col-sm-3"></div>
              </div> 
            </div>
            <br></br>
            <div><p>{profils[this.state.profil].date}</p></div>
            <br></br>
            <button 
                onClick={this.changeColor}>
                Change Style
            </button>    
            
        </div>
        </center>  
      </div>
     
    );
  }
}

class Super extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: n
    }
    
  }

  render() {

    return (
      <div className="case">
        <p>{profils[this.state.profil].publi}</p>
        <div><button>C'est super !</button></div>
          <p>Cest super !</p>
      </div>
    );
  }
}


class Affichage extends React.Component {

  render() {

    return (
      <div>

        <Profil />
        <br></br>
        <Super />
      </div>
    );  
  }

}


ReactDOM.render(
  <Affichage />,
  document.getElementById('root')
);
