import '../css/style.css';
import '../css/snackbar.css';
import { getItems } from './items';
import { getUsers, addUser, findUser } from './users';
import { getData, firstApi, synchronousFunction, synchronousFunction2 } from './test';

document.querySelector('#app').innerHTML = `
  <div>
   <h3>Api harjoituksia</h3>
  </div>
`;

console.log('Toimii');

// Nämä 2 funktiota nyt jätetty pois, kun eivät tee mitään hyödyllistä
//synchronousFunction();
//synchronousFunction2();
  
//getData();
firstApi();

/// haetaan GET ALL items nappi ja tehdään rajapintahaku
const getItemsBtn = document.querySelector('.get_items');
getItemsBtn.addEventListener('click', getItems);

const getAJoke = document.querySelector('.get_data');
getAJoke.addEventListener('click', getData);

const getUsersBtn = document.querySelector('.get_users');
getUsersBtn.addEventListener('click', getUsers);

const addUserForm = document.querySelector('.formpost');
addUserForm.addEventListener('click', addUser);

const findById = document.querySelector('#search-id');
findById.addEventListener('click', findUser);
