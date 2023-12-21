import { PhotoWithHashTags } from "./Slices/imageSlice"

export const localStorageSnapFiestaAboutConfig:string = 'SnapFiestaAboutConfig';

export type Image = {
    id: number
    url: string
    alt: string
    height: number
    width: number
    photographer_id: number
    photographer_url: string
    photographer: string
}

export interface userI {
    id?: string
    email?: string
    password?: string
    name?: string
    role?: string
    avatar?: string
    myWorks?: PhotoWithHashTags[]
    liked?: PhotoWithHashTags[]
}

export interface formLogInI {
    email: string
    password: string
}


export interface formSignUp extends formLogInI {
    name: string
    avatar: string
}

export interface formFilterI {
    hashTags: string
    color: string
}

export interface LinksI {
    messenger?: string
    facebook?: string
    x?: string
    github?: string
}

export interface LinkI {
    name: string
    href: string
}

export const HASHTAGS: Array<string> = [
    "Serene", "Calm", "Joy", "Elegance", "Charm", "Grace", "Pure", "Tranquil", "Simplicity", "Peace",
    "Ease", "Minimal", "Gentle", "Quiet", "Kindness", "Warmth", "Bliss", "Harmony", "Gratitude", "Cheer",
    "Radiant", "Delight", "Purity", "Genuine", "Wholesome", "Tender", "Soothing", "Natural", "Soft", "Sweet",
    "Crisp", "Bright", "Fresh", "Friendly", "Cute", "Happy", "Glow", "Dreamy", "Simple", "Lovely"
]


export const chooseRandomHashtags = ():Array<string> => {
    const arrayToReturn:Array<string> = [];
    for(let i = 1; i <= 5; i++){
        let randomNumber = Math.floor(Math.random() * 40);
        arrayToReturn.push(HASHTAGS[randomNumber])
    }
    return arrayToReturn;
}


export interface confI { 
    description: string
    skills: Array<string>
    links: LinkI[]
}


export interface artistI {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    street: string,
    state: string,
    country: string,
    longitude: number,
    id: number,
    gender: string,
    date_of_birth: string,
    job: string,
    city: string,
    zipcode: string,
    latitude: number,
    profile_picture: string
}

export interface genderI{
    male?: boolean
    female?: boolean
}

export interface experienceI {
    '0-2'?:boolean
    '2-5'?:boolean
    '5-10'?:boolean
    '10+'?:boolean
}

export interface ArtistsFormStateI extends Record<string, any> {
    keyword?:string
    country?: string
    male?: boolean
    female?: boolean
    '0-2'?:boolean
    '2-5'?:boolean
    '5-10'?:boolean
    '10+'?:boolean
}


export const allHashTags = [
    "Love",
    "Happy",
    "Smile",
    "Nature",
    "Peace",
    "Joy",
    "Fun",
    "Explore",
    "Friends",
    "Family",
    "Sunset",
    "Adventure",
    "Dream",
    "Inspire",
    "Gratitude",
    "Chill",
    "Laugh",
    "Healthy",
    "Motivate",
    "Serenity",
    "Kindness",
    "Balance",
    "Calm",
    "Energy",
    "Creativity",
    "Hope",
    "Positivity",
    "Imagine",
    "Harmony",
    "Celebrate"
  ]
  