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

    const externalapiURL = `https://api.rentcast.io/v1/properties?address=${encodedAddress}`;
    console.log(externalapiURL);

    const getpropertyData = await fetch(externalapiURL, {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.PROPKEY as string,
      },
    });

    if (!getpropertyData) {
      throw new Error("Error fetching property data");
    }

    const retrievedData = await getpropertyData.json();

    if (!retrievedData) {
      throw new Error("Unable to get property data");
    }
    console.log("Property data recieved");
    return retrievedData;
  } catch (error) {
    console.error("Error calling external function", error);
    return;
  }
};

// this serves as a helper function here.
const getLastNYears = (
  obj: Record<string, any>,
  n: number,
): Record<string, any> => {
  return Object.entries(obj)
    .sort(([a], [b]) => Number(b) - Number(a))
    .slice(0, n)
    .reduce(
      (acc: Record<string, any>, [key, val]) => ({ ...acc, [key]: val }),
      {},
    );
};

const organizedData = async (Address: clientAddress) => {
  //set up try and catch case here to call the data from the above function
  try {
    const getrawdata = await externalapifunction(Address);
    if (!getrawdata) {
      throw new Error("Error fetching raw data");
    }
    const formattedData = getrawdata.map((data: any) => ({
      Address: data.formattedAddress,
      City: data.city,
      State: data.state,
      Zipcode: data.zipCode,
      County: data.county,
      PropertyType: data.propertyType,
      SquareFootage: data.squareFootage,
      LotSize: data.lotSize,
      YearBuilt: data.yearBuilt,
      LegalDescription: data.legalDescription,
      LastSaleDate: data.lastSaleDate,
      LastSalePrice: data.lastSalePrice,
      History: data.history,
      Zoning: data.zoning,
      OwnerOccupied: data.ownerOccupied,
      PropertyFeatures: {
        Architecture: data.features?.architectureType,
        NumberOfFloors: data.features?.floorCount,
        NumberOfUnits: data.features?.unitCount,
      },
      TaxAssessments: getLastNYears(data.taxAssessments ?? {}, 5),
      PropertyTaxes: getLastNYears(data.propertyTaxes ?? {}, 5),
    }));

    return formattedData;
  } catch (error) {
    throw new Error("Error calling external function");
  }
};

export default organizedData;
