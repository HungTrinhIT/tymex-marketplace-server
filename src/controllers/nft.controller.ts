import { NextFunction, Request, Response } from 'express';
import { jsonAll } from '../utils/general';
import NFTMModel from '../models/nft';

//GET ROLES LIST
const getAllNFT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let pageOptions: { page: number; limit: number } = {
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10,
        };

        const count = await NFTMModel.countDocuments({})

        const listNFTs = await NFTMModel.find().limit(pageOptions.limit * 1)
            .skip((pageOptions.page - 1) * pageOptions.limit)
            .sort({ createdAt: -1 });

        const meta = {
            total: count,
            limit: pageOptions.limit,
            totalPages: Math.ceil(count / pageOptions.limit),
            currentPage: pageOptions.page
        }

        //SEND RESPONSE
        return jsonAll<any>(res, 200, listNFTs, meta);
    } catch (error) {
        next(error);
    }
};

//EXPORT
export default {
    getAllNFT,
};
