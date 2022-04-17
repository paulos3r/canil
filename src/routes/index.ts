import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/sarchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dog', PageController.dog);
router.get('/cat', PageController.cat);
router.get('/fish', PageController.fish);
router.get('/bird', PageController.bird);
router.get('/cadastro-pet', PageController.cadastroPet);
router.post('/cadastro-pet', PageController.cadastroPet);

//contato com a equipe
router.get('/contact', PageController.contact);
router.post('/contact', PageController.contato);

router.post('/listaPageContato', PageController.listaPageContato);
router.get('/listaPageContato', PageController.listaPageContato)

router.post('/search', SearchController.search);

router.get('/teste', PageController.canil);

export default router;