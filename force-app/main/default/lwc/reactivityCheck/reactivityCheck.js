import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    userAddress = 'Swavalambi Nagar, Naginabag, Chandrapur';

    myPersonalDetails = [
    {
      "message": "Hello, Eleanora! Your order number is: #86",
      "phoneNumber": "1-222-899-1446",
      "phoneVariation": "+90 354 496 10 87",
      "status": "disabled",
      "name": {
        "first": "Alexys",
        "middle": "Marlowe",
        "last": "Beer"
      },
      "username": "Alexys-Beer",
      "password": "cmIbZom0QIQWHoE",
      "emails": [
        "Branson.Zemlak@gmail.com",
        "Laisha2@example.com"
      ],
      "location": {
        "street": "34476 Pascale Ridge",
        "city": "North Christianatown",
        "state": "Georgia",
        "country": "Guyana",
        "zip": "28316-0766",
        "coordinates": {
          "latitude": "76.4425",
          "longitude": "107.85"
        }
      },
      "website": "https://feminine-cyclone.org/",
      "domain": "extroverted-shoehorn.net",
      "job": {
        "title": "Product Program Planner",
        "descriptor": "Customer",
        "area": "Infrastructure",
        "type": "Executive",
        "company": "Ritchie, Renner and Rippin"
      },
      "creditCard": {
        "number": "6761-7341-5740-3304",
        "cvv": "212",
        "issuer": "diners_club"
      },
      "uuid": "0199cec7-fdf4-40c6-a248-d3602136dcd4",
      "objectId": "68e2cf2682e6daa8034ac1ef"
    },
    {
      "message": "Hello, Moses! Your order number is: #51",
      "phoneNumber": "616-529-9201 x71165",
      "phoneVariation": "+90 355 357 10 48",
      "status": "active",
      "name": {
        "first": "Lauren",
        "middle": "Emerson",
        "last": "Friesen"
      },
      "username": "Lauren-Friesen",
      "password": "jC0tb6w6cbhQj5P",
      "emails": [
        "Roxanne_Kihn@example.com",
        "Cristian.Metz@example.com"
      ],
      "location": {
        "street": "844 D'Amore Path",
        "city": "Osinskishire",
        "state": "Connecticut",
        "country": "Slovenia",
        "zip": "12836-2706",
        "coordinates": {
          "latitude": "-31.2455",
          "longitude": "10.6768"
        }
      },
      "website": "https://milky-coincidence.net/",
      "domain": "right-cicada.org",
      "job": {
        "title": "Internal Usability Liaison",
        "descriptor": "Chief",
        "area": "Operations",
        "type": "Technician",
        "company": "Jakubowski - Langosh"
      },
      "creditCard": {
        "number": "6304-6187-3390-3032",
        "cvv": "189",
        "issuer": "american_express"
      },
      "uuid": "efea7c15-aac4-43cb-a3a9-4f5db09bf8e5",
      "objectId": "68e2cf2682e6daa8034ac1f0"
    }
  ]
    updateAddress(){
        this.userAddress = 'New Manish Nagar, Nagpur';
        this.myPersonalDetails[0].phoneNumber = '1-999-999-9999';
    }
}