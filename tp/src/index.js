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
    publi: "Le React c'est trop coool",
    nb: 0
  },
  {
    nom: 'Marze',
    prenom: 'Oscar',
    date: '04/04/99',
    photo:'oscar.png',
    publi: "J'aime la vie",
    nb: 0
  },
  {
    nom: 'Maréchal',
    prenom: 'Julien',
    date: '03/08/99',
    photo:'julien.png',
    publi: "Je préfère les pâtes au riz",
    nb: 0
  }
];

let n =0;



class Profil extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      color: 'white',
      
    }
  }

  changeColor = () => {
    if(this.state.color=="white"){
      this.setState({color: "blue"});
    }else{
      this.setState({color: "white"})
    }
    
  }
  

  render() {
    
    return (
      
      <div>
        <center>
        
        <br></br>
        <div className={this.state.color}>
          <img src={profils[this.props.prof].photo}></img>
          
            <div className = "container">
            <br></br>
              <div class="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-3"><h3>{profils[this.props.prof].prenom}</h3></div>
                <div className="col-sm-3"><h3>{profils[this.props.prof].nom}</h3></div> 
                <div className="col-sm-3"></div>
              </div> 
            </div>
            <br></br>
            <div><p>{profils[this.props.prof].date}</p></div>
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

class Commentaire extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      nb:0
    }
  }

  changeNb = () => {
    profils[this.props.prof].nb = profils[this.props.prof].nb +1
    this.setState({nb: profils[this.props.prof].nb})
  }


  render() {

    const list = []

    for (let i = 0; i < profils[this.props.prof].nb; i++) {
      list.push(<p>C'est super</p>)
    }
    
    return (
      
      <div>

        <br></br>
        
        <div className="case">
          <p>{profils[this.props.prof].publi}</p>
          <div><button onClick={this.changeNb}>C'est super !</button></div>
          {list}
        </div>
      
      </div>
     
    );
  }
}


class Button extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      n: 0
    }
  }



  changeProfil0 = () => {
    n=0;
    this.setState({n: 0});
  }

  changeProfil1 = () => {
    n=1;
    this.setState({n: 1});
  }

  changeProfil2 = () => {
    n=2;
    this.setState({n: 2});
  }
  

  render() {
    
    return (
      
      <div>
        <center>
          <h1 className="fbtitle">Mini Facebook</h1>
          <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"><button onClick={this.changeProfil0}>Aurélien</button></div>
            <div className="col-sm-4"><button onClick={this.changeProfil1}>Oscar</button></div>
            <div className="col-sm-4"><button onClick={this.changeProfil2}> Julien</button></div>
          </div>
        </div>
        
        <br></br>
        <Profil prof={n} />
        </center>  
        <Commentaire prof={n} />

        
        
      </div>
     
    );
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
