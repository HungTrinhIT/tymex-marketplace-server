import mongoose, { Schema } from 'mongoose';
import { INftItem } from '../interfaces/NFTInterface';

export interface INftModel extends INftItem, Document { }

const NFTSchema: Schema = new Schema({
    name: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        enum: ['neon', 'basketball', 'mafia', 'assassin', 'dj'],
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    currencies: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    trait: {
        type: String,
        enum: [
            'upper_body',
            'lower_body',
            'hat',
            'shoes',
            'accessory',
            'legendary',
            'mythic',
            'epic',
            'rare',
            'common',
        ],
        required: true,
    },
});

export default mongoose.model<INftModel>('NFT', NFTSchema);
