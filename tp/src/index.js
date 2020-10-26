import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// les trois profils et leur contenu

let profils = [
  {
    nom: 'Davodet',
    prenom: 'Aurélien',
    date: '24/04/98',
    photo:'aurel.png',
    publi: "Le React c'est trop coool",
    nbLike: 0 //nombre de like (0 par défaut)
  },
  {
    nom: 'Marze',
    prenom: 'Oscar',
    date: '04/04/99',
    photo:'oscar.png',
    publi: "J'aime la vie",
    nbLike: 0
  },
  {
    nom: 'Maréchal',
    prenom: 'Julien',
    date: '03/08/99',
    photo:'julien.png',
    publi: "Je préfère les pâtes au riz",
    nbLike: 0
  }
];

//numéro du profil par défaut
let numProf =0;


//class qui permet d'afficher les informations de chaque profil

class Profil extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      color: 'white', //couleur par défaut     
    }
  }

  //fonction qui change la couleur de fond

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

//class qui permet d'afficher la derniere publication et de la liker

class Commentaire extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      nbSuper:0 //nombre de "c'est super !"
    }
  }

  //change le nombre de like stocké du profil
  changeNb = () => {
    profils[this.props.prof].nbLike = profils[this.props.prof].nbLike +1
    this.setState({nbSuper: profils[this.props.prof].nbLike})
  }


  render() {

    const list = []

    //affiche c'est super autant de fois que nécessaire
    for (let i = 0; i < profils[this.props.prof].nbLike; i++) {
      list.push("C'est super ! ")
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

//class qui permet d'afficher les boutons correspondants aux trois profils proposés
class Choixprofil extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      numProf: 0  //numéro profil par défaut
    }
  }


//fonctions qui changent le profil et ses informations en fonction du bouton 
  changeProfil0 = () => {
    numProf=0;
    this.setState({numProf: 0});
  }

  changeProfil1 = () => {
    numProf=1;
    this.setState({numProf: 1});
  }

  changeProfil2 = () => {
    numProf=2;
    this.setState({numProf: 2});
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
        <Profil prof={numProf} />
        </center>  
        <Commentaire prof={numProf} />
        
      </div>
     
    );
  }
}

//Affiche le contenu de la class choixprofil dans la div root
ReactDOM.render(
  <Choixprofil />,
  document.getElementById('root')
);
