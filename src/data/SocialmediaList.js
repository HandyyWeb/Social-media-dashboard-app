import down from '../assets/icon-down.svg';
import up from '../assets/icon-up.svg';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import youtube from '../assets/icon-youtube.svg';
import twitter from '../assets/icon-twitter.svg';

export const socialItems = [
    {
        logo :{
            name : "facebook",
            value :  facebook,
        },
        id : "@nathanf",
        followers : 1987,
        attribute : "followers",
        number : 12,
        mark : {
            name : "up",
            value : up,
        }
    },
    {
        logo : {
            name : "twitter",
            value : twitter,
        },
        id : "@nathanf",
        followers : 1044,
        attribute : "followers",
        number : 99,
        mark : {
            name : "up",
            value : up,
        }
    },
    {
        logo :{
            name : "instagram",
            value : instagram,
        },
        id : "@realnathanf",
        followers : "11k",
        attribute : "followers",
        number: 1099,
        mark :{
            name : "up",
            value : up,
        }
    },
    {
        logo :{
            name : "youtube",
            value : youtube,
        },
        id : "Nathan F.",
        followers : 8239,
        attribute : "Subscribers",
        number : "144",
        mark :{
            name : "down",
            value : down,
        }
    }
]

export const statistics = [
    {
        bloc_1 :{
            number : 87, 
            icon : {
                name : "up",
                value : up,
            }, 
            rate : 3,
            attribute : "Page Views",
        },
        bloc_2 : {
            number : 53, 
            icon : {
                name : "down",
                value : down
            }, 
            rate : 2,
            attribute : "Likes",
        },
        logo : facebook,
    },
    {
        bloc_1 : {
            number : 5462, 
            icon : {
                name : "up",
                value : up,
            }, 
            rate : 2257,
            attribute : "Likes",
        },
        bloc_2 : {
            attribute : "Profile Views",
            number : "52k",
            icon : {
                name : "up",
                value : up,
            },
            rate : 1357,
            },
        logo : instagram,
    },
    {
        bloc_1 : {
            attribute : "Retweets",
            number : 117, 
            icon : {
                name : "up",
                value : up,
            }, 
            rate : 333,
        },
        bloc_2: {
            attribute : "Likes",
            number : 507, 
            icon : {
                name : "up",
                value : up,
            }, 
            rate: 553,
        },
        logo : twitter,
    },
    {
        bloc_1:  {
            attribute : "Likes",
            number : 107, 
            icon : {
                name : "down",
                value : down,
            }, 
            rate: 19,
        },
        bloc_2:  {
            attribute : "Total Views",
            number : 1407, 
            icon : {
                name : "down",
                value : down,
            }, 
            rate: 12,
        },
        logo : youtube,

    }
]

