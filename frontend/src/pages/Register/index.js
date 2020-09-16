import React, { Fragment, useState }from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Redirect}  from 'react-router-dom';
import FriendsServices from '../../services/friend';
import './styles.css';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [error, setError] = useState(false);
  
  const HandleSubmit = async (evt)=>{
    evt.preventDefault();
    try {
       await FriendsServices.register({name:name , email: email })
      setRedirectToHome (true);
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }
  
  if (redirectToHome){
    return <Redirect to ={{pathname:'/'}}/>
  }
  return (
    <Fragment>
     <Header />
     <div className="Container-register">
        <form onSubmit={HandleSubmit}>
          <label>Nome:</label>
          <input  
            type="name"
            required
            name="name"
            value={name}
            onChange ={e=> setName(e.target.value)}/>
          <label>Email:</label>
          <input 
            type="email" 
            required
            name="email"
            value={email}
            onChange ={e=> setEmail(e.target.value)}/>
          <button>Registar Amigo</button>
        </form>
        {error && <p className='error'>Erro ao registrar verifique se o email já foi registrado</p>}
      </div> 
      <Footer/>
    </Fragment>

   
  );
}

export default Register;
