export interface INftItem {
    id: string;
    name: string;
    type: NFTType;
    author: string;
    currencies: string;
    price: string;
    image: string;
    trait: NFTrait;
}

export type NFTType = 'neon' | 'basketball' | 'mafia' | 'assassin' | 'dj';

export type NFTrait =
    | 'upper_body'
    | 'lower_body'
    | 'hat'