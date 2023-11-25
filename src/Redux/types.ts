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
}

export interface formLogInI {
    email: string
    password: string
}


export const HASHTAGS: Array<String> = [
    "Serene", "Calm", "Joy", "Elegance", "Charm", "Grace", "Pure", "Tranquil", "Simplicity", "Peace",
    "Ease", "Minimal", "Gentle", "Quiet", "Kindness", "Warmth", "Bliss", "Harmony", "Gratitude", "Cheer",
    "Radiant", "Delight", "Purity", "Genuine", "Wholesome", "Tender", "Soothing", "Natural", "Soft", "Sweet",
    "Crisp", "Bright", "Fresh", "Friendly", "Cute", "Happy", "Glow", "Dreamy", "Simple", "Lovely"
]


export const chooseRandomHashtags = ():Array<String> => {
    const arrayToReturn:Array<String> = [];
    for(let i = 1; i <= 5; i++){
        let randomNumber = Math.floor(Math.random() * 40);
        arrayToReturn.push(HASHTAGS[randomNumber])
    }
    return arrayToReturn;
}