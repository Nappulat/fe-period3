import { fetchData } from "./fetch";

//const getItems = async () => {
    //try {
     // const response = await fetch('http://localhost:3000/api/items');
        //muutetaan json muotoon
     // const data = await response.json();
     // console.log(data);
      //data.forEach(element => {
        // jokainen rivi
        //console.log(element);
        // jokaisen rivin yksittäiset tiedot
        //.log(element.name);
  //    });
   // } catch (error) {
 //     console.error('Virhe:', error);
  //  }
 // };

  const getItems = async () => {
    const url = 'http://localhost:3000/api/items';
    const items = await fetchData(url);

    if (items.error) {
        console.log('tapahtui virhe fetch haussa')
    }
    console.log(items);
  };

  export {getItems};