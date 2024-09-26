import express, { Router } from 'express';
import { newBeeper,  getAllBeepers, getBeeperById, updateStatus, deleteBeeper, getBeeperByStatus } from '../controllers/beeperController.js'


const router: Router = express.Router();


router.route('/')
    .post(newBeeper)
    .get(getAllBeepers);
router.route('/:id').get(getBeeperById);
router.route('/:id/status').put(updateStatus);
router.route('/').delete(deleteBeeper);
router.route('/').get(getBeeperByStatus);

export default router;