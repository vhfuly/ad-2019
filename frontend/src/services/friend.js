 
import Api from './api';

const FriendServices ={
  register: (parans)=> Api.post('/register', parans),
  index : () => Api.get('/list'),
  delete: (id) => Api.delete(`/${id}`),
  update: (params) => Api.put(`/`, params, {
    headers: {'id': localStorage.getItem('id')}
  }),
  draw: () => Api.put(`/draw`),
}


export default FriendServices;