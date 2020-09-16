import React, { Fragment, useState}from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Redirect}  from 'react-router-dom';
import FriendsServices from '../../services/friend';
import './styles.css';


function Edit() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [redirectToList, setRedirectToList] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt)=>{
    evt.preventDefault();
    try {
      const id = localStorage.getItem('id');
       await FriendsServices.update({id: id, name:name , email: email })
      setRedirectToList (true);
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }
  if (redirectToList){
    return <Redirect to ={{pathname:'/list'}}/>
  }
  
  
  return (

    
    <Fragment>
     <Header />
     <div className="Container-edit">

        <form onSubmit={HandleSubmit}>
          <label>Novo Nome:</label>
          <input  
            type="name"
            required
            name="name"
            value={name}
            onChange ={e=> setName(e.target.value)}/>
          <label>Novo:</label>
          <input 
            type="email" 
            required
            name="email"
            value={email}
            onChange ={e=> setEmail(e.target.value)}/>
          <button>Editar Amigo</button>
        </form>

        {error && <p color='red'>Erro ao editar</p>}
      </div> 
      <Footer/>
    </Fragment>

   
  );
}

export default Edit;