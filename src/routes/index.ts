import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/sarchController';


const router = Router();

router.get('/', PageController.home);
router.get('/dog', PageController.dog);
router.get('/cat', PageController.cat);
router.get('/fish', PageController.fish);

router.get('/search', SearchController.search)



export default router;