export interface PromotionCard {
    id: number;
    shopname: string;
    proname: string;
    image: any; //for now
    background: any; //for now
    address:string
  }
  export const promotions: Array<PromotionCard> = [
    {
      id: 1,
      shopname: "Utopia books & coffee",
      proname: "Buy 9 get 1 free",
      image: require("../../assets/images/utopia.png"),
      address:"22 Williams street, Melbourne",
      background:require("../../assets/images/background.png"),
    },
    {
      id: 2,
      shopname: "Uncle coffee",
      proname: "Buy 5 get 1 free",
      image: require("../../assets/images/uncle_coffee.png"),
      address:"22 Williams street, Melbourne",
      background:require("../../assets/images/background.png"),
    },
    {
      id: 3,
      shopname: "Bespoke Coffee",
      proname: "Buy 9 get 1 free",
      image: require("../../assets/images/bespoke.png"),
      address:"22 Williams street, Melbourne",
      background:require("../../assets/images/background.png"),
    },
    {
      id: 4,
      shopname: "The coffee shop",
      proname: "Buy 5 get 50% discount",
      image: require("../../assets/images/coffee_shop.png"),
      address:"22 Williams street, Melbourne",
      background:require("../../assets/images/background.png"),
    },
    {
      id: 5,
      shopname: "Stulton Coffee",
      proname: "Buy 3 get 1 free",
      image: require("../../assets/images/stulton.png"),
      address:"22 Williams street, Melbourne",
      background:require("../../assets/images/background.png"),
    },
    {
      id: 6,
      shopname: "The Red Cafe",
      proname: "Buy 7 get 1 free",
      image: require("../../assets/images/red_cafe.png"),
      address:"22 Williams street, Melbourne",
      background:require("../../assets/images/background.png"),
    },
  ];