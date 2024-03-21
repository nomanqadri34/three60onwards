import { Router } from 'express';
import {
  getRazorpayApiKey,
 allPayments,
} from '../controllers/RazorpayController';
const router = Router();
router.route('/razorpay-key').get(isLoggedIn, getRazorpayApiKey);
router.route('/').get(isLoggedIn, authorizeRoles('ADMIN'), allPayments);
export default router;