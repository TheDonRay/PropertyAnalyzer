interface clientAddress {
  UserAddress: string;
}

const externalapifunction = async (Address: clientAddress) => {
  // handle cases here create try and catch case as such
  try {
    // research better way to validate addresses.
    if (!Address) {
      throw new Error("Error no address entered");
    }
    console.log("Address entered successfully"); 

    // encode the address here so we dont take any whitespace here from the given address recieved to us by the client side . 
    const encodedAddress = encodeURIComponent(Address.UserAddress); 
    // build the external url here as such
    const buildingURL = new URLSearchParams({
      address: encodedAddress,
    }); 

    const externalapiURL = `https://api.rentcast.io/v1/properties?address=${buildingURL}`; 
    console.log('URL called was the following:', externalapiURL);  
    //this fetch is going to be a get request to actually call the data 
    const propertydatafetch = await fetch(externalapiURL); 
  
    console.log('Fetching property data was successful'); 

    const propertyData = await propertydatafetch.json();  

    if (!propertyData){ 
      throw new Error('No property data recieved for given address user entered'); 
    } 
    console.log('Property data was found, retrieving now');  
    return propertyData; // data that is fetched from the external API call 

  } catch (error) {
    console.error("Error calling external function", error);
    return;
  }
}; 

// set up external function to handle the data recieved so that we can filter out and send that data to an openAI request to be handled. 



export default externalapifunction ;
