
export interface IBodyRegisterLead{
    contact: {
      firstName: string,
      lastName: string,
      email: string,
      countryCode: number,
      phone: string,
      country: string,
      language: string
    },
    billingAddress:{
      addressLine1: string,
      addressLine2?: string,
      city: string,
      state: string,
      zipCode: number
    },
    shippingAddress:{
      addressLine1: string,
      addressLine2?: string,
      city: string,
      state: string,
      zipCode: number
    },
    additionalInformation: {
      info1: boolean,
      info2: boolean,
      info3: boolean,
      trackers: number 
    }
  } 
