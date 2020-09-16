import React, { Fragment, useState}from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Redirect}  from 'react-router-dom';
import FriendsServices from '../../services/friend';

import './styles.css';

function Home() {
  const [redirectToSuccess, setRedirectToSuccess] = useState(false);
  const [error, setError] = useState(false);

  const Draw = async (evt)=>{
    evt.preventDefault();
    try {
       await FriendsServices.draw()
      setRedirectToSuccess (true);
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }
  if (redirectToSuccess){
    return <Redirect to ={{pathname:'/success'}}/>
  }
  return (
    <Fragment>
     <Header />

      <div className="Container-home">
       <p>
         A proposta desse site é fazer o cadastro de amigos e seus respectivos emails,
          após é posivel sortiar um amigo secreto. ( o amigo será enviado ao seu email)
       </p>
       <div className="buttons">
        <h2>Comece a usar :  </h2> 
        <Link to="/register" className="button">
            Registar um amigo
        </Link>
        <Link to="/list" className="button">
            Amigos participantes
        </Link>
        <button onClick={Draw} className="button">  
          Sotear e enviar emails
        </button>
        {error && <p>Erro ao enviar Emails</p>}
        
        
       </div>
        
      </div>
      <Footer/>
    </Fragment>

   
  );
}

export default Home;
