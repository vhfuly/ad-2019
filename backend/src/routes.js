const { Router } = require('express');
const Mail = require('./lib/Mail');

const routes = new Router();

const Friend = require('./app/models/Friend');

routes.post('/register', async (req, res)=>{
  const {name, email } = req.body;
  const friend = new Friend({name,email});

  try {
    await friend.save();
    res.status(200).json(friend);
  } catch (error) {
    res.status(500).json({error :'Error registering new friend please try again'});
  }

});

routes.get('/list',async (req,res)=>{
  try {
    let friends = await Friend.find()
    res.json(friends)
  } catch (error) {
    res.status(500).json({error:error});
  }
});

routes.put('/', async (req,res)=>{

  const { name, email} = req.body;
  const id = req.headers['id'];
  try {
    let friend = await Friend.findOneAndUpdate(
        {_id: id}, 
        { $set: { name: name, email: email}}, 
        { upsert: true, 'new': true }
      );
      res.json(friend);
  } catch (error) {
    res.status(500).json({error:'Problem to update a friend'});
  }
});

routes.delete('/:id', async(req,res)=>{
  const {id} =req.params;
  try {
    let friend = await Friend.findById(id);
    console.log(friend)
    await friend.delete();
    res.json({message: 'OK'}).status(204);
  } catch (error) {
    res.status(500).json({error:'Problem to delet a user'});
  }
})

routes.put('/draw', async(req,res)=>{
 let friends = await Friend.find()
 let i = 0;
 const numbersDrawn = [];
   while (i<=(friends.length-1)){

    console.log(i)
    luckyNumber = Math.floor(Math.random()*(friends.length));

    if (luckyNumber === i || luckyNumber === friends.length || numbersDrawn.indexOf(luckyNumber) >= 0 ){
      i--;
    } else {
      let friendEmail = await Friend.findOneAndUpdate(
        {email: friends[i].email}, 
        { $set: { friend: friends[luckyNumber].name}}, 
        { upsert: true, 'new': true }
     
       );


       await Mail.sendMail({
     to:`${friendEmail.name} <${friendEmail.email}>`,
     subject: 'Amigo oculto',
     text: `
     Bom dia,${friendEmail.name} 
     Seu amigo oculto é ${friendEmail.friend}`
   });
      numbersDrawn.push(luckyNumber)
     
    }
    

    
    i++;
   }  

  

    res.json(friends)
})




module.exports = routes;