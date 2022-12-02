import {
  collection1,
  collection2,
  collection3,
  cta1,
  cta2,
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  service1,
  service2,
  service3,
  service4,
} from "../assets";

export const navBarLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/products",
    title: "Products",
  },
  {
    path: "/bestsellers",
    title: "BestSellers",
  },
  {
    path: "/todayspecial",
    title: "Today's Special",
  },
  {
    path: "/services",
    title: "Services",
  },
];

export const navActionList = [
  {
    iconName: "search-outline",
    text: "Search",
  },
  {
    iconName: "person-outline",
    text: "Login / Register",
  },
  {
    iconName: "heart-outline",
    text: "Wishlist",
    data: true,
    value: 5,
  },
  {
    iconName: "bag-outline",
    text: "Basket",
    data: true,
    value: 4,
  },
];

export const collectionList = [
  {
    category: "men collections",
    image: collection1,
  },
  {
    category: "women collections",
    image: collection2,
  },
  {
    category: "sports collections",
    image: collection3,
  },
];

export const filterList = [
  {
    brand: "All",
    active: true,
  },
  {
    brand: "Nike",
  },
  {
    brand: "Adidas",
  },
  {
    brand: "Puma",
  },
  {
    brand: "Bata",
  },
  {
    brand: "Apex",
  },
];

export const cardActionBtnList = [
  {
    ariaLabelledby: "card-label-1",
    iconName: "cart-outline",
    title: "Add to Cart",
  },
  {
    ariaLabelledby: "card-label-2",
    iconName: "heart-outline",
    title: "Add to Whishlist",
  },
  {
    ariaLabelledby: "card-label-3",
    iconName: "eye-outline",
    title: "Quick View",
  },
  {
    ariaLabelledby: "card-label-4",
    iconName: "repeat-outline",
    title: "Compare",
  },
];

export const productList = [
  {
    type: "all shoes",
    links: [
      {
        img: product1,
        gender: "Men / Women",
        title: "Running Sneaker Shoes",
        price: "180.85",
        badge: true,
        badgeTitle: "New",
      },
      {
        img: product2,
        gender: "Men / Sports",
        title: "Leather Mens Slipper",
        price: "190.85",
      },
      {
        img: product3,
        gender: "Men / Women",
        title: "Simple Fabric Shoe",
        price: "160.85",
        badge: true,
        badgeTitle: "New",
      },
      {
        img: product4,
        gender: "Men / Sports",
        title: "Air Jordon 7 Retro",
        price: "170.85",
        badge: true,
        badgeTitle: "-25%",
      },
      {
        img: product5,
        gender: "Men / Women",
        title: "Nike Air Max 270 SE",
        price: "120.85",
        badge: true,
        badgeTitle: "New",
      },
      {
        img: product6,
        gender: "Men / Women",
        title: "Adidas Sneakers Shoes",
        price: "100.85",
      },
      {
        img: product7,
        gender: "Men / Sports",
        title: "Nike Basketball Shoes",
        price: "120.85",
      },
      {
        img: product8,
        gender: "Men / Sports",
        title: "Simple Fabric Shoe",
        price: "80.85",
      },
    ],
  },
  {
    type: "Nike",
    links: [
      {
        img: product1,
        gender: "Men / Women",
        title: "Running Sneaker Shoes",
        price: "180.85",
        badge: true,
        badgeTitle: "New",
      },
      {
        img: product2,
        gender: "Men / Sports",
        title: "Leather Mens Slipper",
        price: "190.85",
      },
      {
        img: product3,
        gender: "Men / Women",
        title: "Simple Fabric Shoe",
        price: "160.85",
        badge: true,
        badgeTitle: "New",
      },
      {
        img: product4,
        gender: "Men / Sports",
        title: "Air Jordon 7 Retro",
        price: "170.85",
        badge: true,
        badgeTitle: "-25%",
      },
    ],
  },
];

export const ctaList = [
  {
    img: cta1,
    subTitle: "Adidas Shoes",
    title: "The Summer Sale Off 50%",
  },
  {
    img: cta2,
    subTitle: "Nike Shoes",
    title: "Makes Yourself Keep Sporty",
  },
];

export const serviceList = [
  {
    img: service1,
    title: "FREE SHIPING",
    text: "All orders over",
    price: true,
    priceValue: "$150",
  },
  {
    img: service2,
    title: "QUICK PAYMENT",
    text: "100% secure payment",
  },
  {
    img: service3,
    title: "FREE RETURNS",
    text: "Money back in 30 days",
  },
  {
    img: service4,
    title: "24/7 SUPPORT",
    text: "Get Quick Support",
  },
];

export const instaPicture = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
];

export const footerLink = [
  {
    type: "instaLink",
    link: [
      {
        iconName: "logo-facebook",
      },
      {
        iconName: "logo-twitter",
      },
      {
        iconName: "logo-pinterest",
      },
      {
        iconName: "logo-linkedin",
      },
    ],
  },
  {
    type: "Account List",
    link: [
      {
        title: "My Account",
        heading: true,
      },
      {
        title: "My Account",
      },
      {
        title: "View Cart",
      },
      {
        title: "Wishlist",
      },
      {
        title: "Compare",
      },
      {
        title: "New Products",
      },
    ],
  },
  {
    type: "time table",
    link: [
      {
        day: "Mon - Tue",
        time: "8AM - 10PM",
      },
      {
        day: "Wed",
        time: "8AM - 7PM",
      },
      {
        day: "Fri",
        time: "7AM - 12PM",
      },
      {
        day: "Sat",
        time: "9AM - 8PM",
      },
      {
        day: "Sun",
        time: "Closed",
      },
    ],
  },
];
