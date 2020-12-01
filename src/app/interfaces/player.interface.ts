export interface IPlayer {
    _id: string;
    name: string;
    position: string;
    thumbnail: string;
    signin: ISignin;
    born: IBorn;
}

export interface IBorn {
    '$date': string;
}

export interface ISignin {
    amount: number;
    currency: string;
}

