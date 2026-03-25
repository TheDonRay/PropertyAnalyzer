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
    console.log("Address entered");
    // build the external function here as such
    const buildingURL = new URLSearchParams({
      address: Address.UserAddress,
    });

    const externalapiURL = `https://api.rentcast.io/v1/properties?${buildingURL}`;
    console.log(externalapiURL);
    return;
  } catch (error) {
    console.error("Error", error);
    return;
  }
};

export default externalapifunction;
