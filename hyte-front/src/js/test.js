const getData = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
        //muutetaan json muotoon
      const data = await response.json();
      console.log(data.value);
    } catch (error) {
      console.error('Virhe:', error);
    }
  };

const firstApi = async () => {
  // tehdään http pyyntö
    fetch('https://api.restful-api.dev/objects')
    .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error('Verkkovastaus ei ollut kunnossa');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Fetch-operaatiossa ilmeni ongelma:', error);
  });
};

function synchronousFunction() {
  let number = 1;
  for(let i = 1; i < 100000; i++){
    number += i;
    console.log('synchronousFunction running');
  }

  console.log('regular function complete', number);

};

function synchronousFunction2() {
  console.log('Mikä kesti')
};

  export {getData, firstApi, synchronousFunction, synchronousFunction2};