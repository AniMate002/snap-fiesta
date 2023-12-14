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