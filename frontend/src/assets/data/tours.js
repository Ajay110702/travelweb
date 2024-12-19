import tourImg01 from '../images/tour-img01.jpg'
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.png";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from '../images/tour-img08.jpg'
import tourImg09 from '../images/tour-img09.jpg'
import tourImg10 from '../images/tour-img10.jpg'
import tourImg11 from '../images/tour-img11.jpg'
import tourImg12 from '../images/tour-img12.jpg'

const tour = [
  {
    id: "01",
    title: "Munnar",
    city: "Munnar, Kerela",
    distance: 7000,
    price: 600,
    maxGroupSize: 10,
    desc: "Munnar is a beautiful hill station located in the Idukki district of Kerala, India. Known for its scenic landscapes, lush tea gardens, and pleasant climate, Munnar is a popular tourist destination",
    reviews: [
      {
        name: "Deepak",
        rating: 4.6,
      },
      {
        name: "Deepak",
        rating: 5   ,
      },
    ],
    avgRating: 4.5,
    photo:tourImg01 ,
    featured: true,
  },
  {
    id: "02",
    title: "Shimla",
    city: "Shimla, himachal Pradesh",
    distance: 200,
    price: 400,
    maxGroupSize: 8,
    desc: "Shimla, the capital city of Himachal Pradesh, is one of the most popular hill stations in India. Known for its colonial architecture, pleasant climate, and scenic landscapes, Shimla attracts tourists from all over the world.",
    reviews: [
      {
        name: "Sanjay",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "09",
    title: "Taj Mahal",
    city: "Agra, Uttar Pradesh",
    distance: 800,
    price: 1500,
    maxGroupSize: 8,
    desc: "The Taj Mahal, located in Agra, Uttar Pradesh, is one of the most iconic and beautiful monuments in the world. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "03",
    title: "Dal lake",
    city: "Jammu and kashmir, India",
    distance: 2900,
    price: 3000,
    maxGroupSize: 8,
    desc: "Dal Lake, located in Srinagar, the summer capital of Jammu and Kashmir.Known for its stunning beauty, serene environment, and vibrant houseboats, Dal Lake offers a unique and unforgettable experience.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.3,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Paradise beach",
    city: "Pondicherry, India",
    distance: 2950,
    price: 2800,
    maxGroupSize: 8,
    desc: "Paradise Beach is  one of the most beautiful and popular beaches in Pondicherry.this pristine beach is known for its golden sands, clear blue waters, and serene atmosphere.  ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "12",
    title: "Hawa Mahal",
    city: "Jaipur, Rajasthan",
    distance: 3000,
    price: 80,
    maxGroupSize: 8,
    desc: "Jaipur, the capital city of Rajasthan, is known as the Pink City due to the distinctive pink color of its buildings. It is a vibrant blend of history, culture, and architectural marvels.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "05",
    title: "Tea Garden",
    city: "Assam, India",
    distance: 5000,
    price: 450,
    maxGroupSize: 8,
    desc: "Assam, known as the Land of the Rising Sun, is a northeastern state of India famous for its natural beauty, wildlife, tea plantations, and rich cultural heritage.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "08",
    title: "Andaman and Nicobar islands",
    city: "Indian Ocean",
    distance: 2500,
    price: 300,
    maxGroupSize: 10,
    desc: "The Andaman and Nicobar Islands, located in the Bay of Bengal, are a tropical paradise known for their stunning beaches, crystal-clear waters, vibrant coral reefs, and rich history. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
   
  },
  {
    id: "06",
    title: "Rishikesh",
    city: "Rishikesh, Uttrakhand",
    distance: 500,
    price: 2000,
    maxGroupSize: 8,
    desc: "Rishikesh, located in the state of Uttarakhand, is a renowned spiritual and adventure destination. Known as the Yoga Capital of the World, Rishikesh attracts visitors for its serene environment, yoga retreats, and thrilling adventure sports.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.3,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Golden Temple",
    city: "Amritsar, Punjab",
    distance: 400,
    price: 250,
    maxGroupSize: 8,
    desc: "The Golden Temple, also known as Harmandir Sahib, is the holiest shrine in Sikhism and one of the most iconic landmarks in India. Located in Amritsar, Punjab, the Golden Temple attracts millions of visitors each year for its spiritual significance, stunning architecture, and serene environment. ",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  
  
  {
    id: "10",
    title: "darjeeling",
    city: "Darjeeling, WestBengal",
    distance: 3000,
    price: 200,
    maxGroupSize: 8,
    desc: "Darjeeling, located in the state of West Bengal, is one of India's most famous hill stations. Nestled in the foothills of the Himalayas, Darjeeling is renowned for its stunning landscapes, tea gardens and  colonial architecture.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "11",
    title: "Vrindavan",
    city: "Vrindavan, uttar Pradesh",
    distance: 1000,
    price: 500,
    maxGroupSize: 8,
    desc: "Vrindavan, located in the Mathura district of Uttar Pradesh, is one of the most sacred towns in India for devotees of Lord Krishna. It is believed to be the place where Krishna spent his childhood and performed many of his divine leelas (pastimes). ",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
 
];

export default tour;
