import React, { Fragment, useState, useEffect }from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FriendsServices from '../../services/friend';
import './styles.css';


function List() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetchFreinds();
  }, []);
  
  async function fetchFreinds() {
    const response = await FriendsServices.index();
    if (response.data.length >= 1) {
      setFriends(response.data)
      
    } else{
      setFriends({mesage:'Sem amigos castrados '});
    }
  }

  const deleteFriend = async (friend) => {
    await FriendsServices.delete(friend._id);
    fetchFreinds();
  }

  const updateFriend = async (friend) => {
    localStorage.setItem('id', friend._id);
  }

  
  
  return (
    <Fragment>
     <Header />
     <div className="Container-list">
      <h2 className="tilte">Amigos</h2>

          <tr>
          <th>Nome</th>
          <th>Email</th>
          <th></th>
          <th></th>
          </tr>
        {friends.length >= 1 && friends.map((item, key)=>
        
          
          <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td><button onClick={() => deleteFriend(item)} className="delete">Deletar Amigo</button></td>
          <td onClick={() => updateFriend(item)} ><Link to={`/edit` }>Editar Amigo</Link></td>
          </tr>
          
        
        
        )}
      </div>
      <Footer/>
    </Fragment>

   
  );
}

export default List;
