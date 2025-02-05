import { fetchData } from "./fetch";
const getUsers = async () => {
    const url = 'http://localhost:3000/api/users';
    const users = await fetchData(url);

    if (users.error) {
        console.log('tapahtui virhe fetch haussa')
    }
    console.log(users);

    const tableBody = document.querySelector('.tbody');
    tableBody.innerHTML = ''; // tyhjennetään taulukko

    // TODO, myöhemmin järkevämpi erotella omaksi funktioksi
    users.forEach((user) => {
        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td><button class="check" data-id="${user.id}">Info</button></td>
          <td><button class="del" data-id="${user.id}">Delete</button></td>
          <td>${user.id}</td>
        `;
    
        tableBody.appendChild(row);
    });
  };

  const addUser = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();
    const bodyData = {
        "username": username,
        "password": password,
        "email": email
    };
    const url = 'http://localhost:3000/api/users';
    const options = {

        body: JSON.stringify(bodyData),
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      };
    
      console.log(options);
    
      const response = await fetchData(url, options);
    //const users = await fetchData(url);

//    content-type: application/json

    if (response.error) {
        console.log('tapahtui virhe fetch haussa')
    }
    console.log(response);
    document.querySelector('.addform').reset(); // tyhjennetään form
    getUsers();
  };

  const findUser = async (event) => {
    event.preventDefault();
    let inputId = Number(document.querySelector('#user-id').value);
    const url = `http://localhost:3000/api/users/${inputId}`;
    const user = await fetchData(url);

    if (user.error) {
      console.log('tapahtui virhe fetch haussa')
    }
    console.log(user);

    const tableBody = document.querySelector('.tbody');
    tableBody.innerHTML = '';
    const row = document.createElement('tr');

    row.innerHTML = 
    `<td>${user.username}</td>
    <td>${user.email}</td>
    <td><button class="check" data-id="${user.id}">Info</button></td>
    <td><button class="del" data-id="${user.id}">Delete</button></td>
    <td>${user.id}</td>`;

    tableBody.appendChild(row);
  };

  export {getUsers, addUser, findUser};