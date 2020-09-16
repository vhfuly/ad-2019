import React, { Fragment }from 'react';
import { Link } from 'react-router-dom'
import FriendsImg from '../../assets/images/friends.png';

import './styles.css';

function Header() {
  return (
    <Fragment>
        
        <Link to="/" className="home">
            <img src={FriendsImg} alt="Friends" className="friends"/>
            <h1>Amigo secreto</h1>
        </Link>
      
    </Fragment>

   
  );
}

export default Header;