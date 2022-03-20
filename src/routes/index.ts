import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/sarchController';


const router = Router();

router.get('/', PageController.home);
router.get('/dog', PageController.dog);
router.get('/cat', PageController.cat);
router.get('/fish', PageController.fish);

//contato com a equipe
router.get('/contact', PageController.contact)

router.get('/search', SearchController.search);




export default router;