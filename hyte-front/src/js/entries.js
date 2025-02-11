import { fetchData } from "./fetch";

const testData = async () => {
    //TESTIDATA
    const url = 'http://localhost:3000/api/entries';

    //Luodaan itemeille
    const items = await fetchData(url);

    if (items.error) {
        console.log('tapahtui virhe fetch haussa')
    }
    console.log(items);

    const tableBody = document.querySelector('.card-area2');
    items.forEach((item) => {

        const image = document.createElement('img');
        image.src = '/images/pexels-pixabay-221247.jpg';
        image.alt = 'image';

        const card = document.createElement('div');
        card.className = 'card';
        
        const left = document.createElement('div');
        left.className = 'card-img';
        const right = document.createElement('div');
        right.className ='card-diary';
        right.innerHTML = `
          <p>${item.entry_date}</p>
          <p>${item.mood}</p>
          <p>${item.weight}</p>
          <p>${item.sleep_hours}</p>
          <p>${item.notes}</p>
        `;

        left.append(image);
        card.appendChild(left); 
        card.appendChild(right);
        tableBody.append(card)    
    });
}

export {testData}