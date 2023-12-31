import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Demon slayer episode Kyojuro Rengoku vs Akaza was stunning",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tony",
    username: "tonyStark",
    createdAt: new Date("2023-06-15"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/reng_vs_akaza.webp",
  },
  {
    _id: uuid(),
    content:
      "Final Episode of DemonSlayer was excellent hope they release the next season asdasdasdasfdfdsfasdjlsahdkj",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vegeta",
          lastName: "Bejīta Yonsei",
          username: "PrinceVegeta",
          password: "vegetaTrunks",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Master Ultra instict",
          portfolio: "https://dragonball.fandom.com/wiki/Vegeta",
          avatar:
            "https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/vegeta.webp",
        },
        {
          _id: uuid(),
          firstName: "Tony",
          lastName: "Stark",
          username: "tonyStark",
          password: "ironman",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Scientist,Philanthropist,Avengers",
          portfolio: "https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man",
          avatar:
            "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/tony.jpg?raw=true",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kakshi",
    username: "kakshiOfTheSharigan",
    createdAt: new Date("2023-06-25"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "",
  },
  {
    _id: uuid(),
    content: "waiting for next season of Jujutsu Kaisen",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vegeta",
          lastName: "Bejīta Yonsei",
          username: "PrinceVegeta",
          password: "vegetaTrunks",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Master Ultra instict",
          portfolio: "https://dragonball.fandom.com/wiki/Vegeta",
          avatar:
            "https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/vegeta.webp",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kakshi",
    username: "kakshiOfTheSharigan",
    createdAt: new Date("2023-06-21"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "",
  },
  {
    _id: uuid(),
    content: "Waiting for Attack on Titan Final episode",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vegeta",
          lastName: "Bejīta Yonsei",
          username: "PrinceVegeta",
          password: "vegetaTrunks",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Master Ultra instict",
          portfolio: "https://dragonball.fandom.com/wiki/Vegeta",
          avatar:
            "https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/vegeta.webp",
        },
        {
          _id: uuid(),
          firstName: "Tony",
          lastName: "Stark",
          username: "tonyStark",
          password: "ironman",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Scientist,Philanthropist,Avengers",
          portfolio: "https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man",
          avatar:
            "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/tony.jpg?raw=true",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kakshi",
    username: "kakshiOfTheSharigan",
    createdAt: new Date("2023-06-11"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/eren.webp",
  },
  {
    _id: uuid(),
    content: "Hope soon vegeta will get ultra instinct",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tanjiro",
    username: "TanjiroTheSunBreather",
    createdAt: new Date("2023-06-14"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "https://raw.githubusercontent.com/Nithin3008/social_media_proj/master/public/images/vegeta.webp",
  },
  {
    _id: uuid(),
    content: "Waiting for Satoru Gojo to unleash his full power",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Vegeta",
    username: "PrinceVegeta",
    createdAt: new Date("2023-06-24"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/Gojo.jpg?raw=true",
  },
  {
    _id: uuid(),
    content: "Finaaly the Attack on titan ends😭😭😭😭😭",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Naruto",
    username: "narutoUzumaki",
    createdAt: new Date("2023-12-12"),
    updatedAt: formatDate(),
    comment: [],
    following: [],
    followers: [],
    img: "",
  },
];
