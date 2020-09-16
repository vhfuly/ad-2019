import React, { Fragment}from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import giftImg from '../../assets/images/gift.png';

import './styles.css';

function Success() {

  return (
    <Fragment>
     <Header />

      <div className="Container-Success">
       
        <p>Enviado com sucesso verifique sua caixa  de Email</p>

        <img src={giftImg} alt="gift"/>
        
      
        
      </div>
      <Footer/>
    </Fragment>

   
  );
}

export default Success;
