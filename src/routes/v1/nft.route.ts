import { Router } from 'express'
import { nftController } from '../../controllers';

const _router: Router = Router({
    mergeParams: true,
});

//ROLE LIST
_router.route('/').get(nftController.getAllNFT);

export const router = _router;