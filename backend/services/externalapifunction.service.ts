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
    // build the external function here as such
    const buildingURL = new URLSearchParams({
      address: Address.UserAddress,
    }); 

    const externalapiURL = `https://api.rentcast.io/v1/properties?address=${buildingURL}`; 
    console.log('external call was successful, next up fetching your data');  
    //this fetch is going to be a get request to actually call the data 
    const propertydatafetch = await fetch(externalapiURL); 
  
    console.log('Fetching property data was successful'); 

    const propertyData = await propertydatafetch.json();  

    if (!propertyData){ 
      throw new Error('No property data recieved for given address user entered'); 
    } 
    console.log('Property data was found, retrieving now');  
    return propertyData; 

  } catch (error) {
    console.error("Error calling external function", error);
    return;
  }
};

export default externalapifunction;
