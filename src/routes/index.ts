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
// router.post('/dadoEnviado', (req, res)=>{
//     res.send(req.body.nome)
// });
router.post('/dadoEnviado', PageController.dadoEnviado);

router.get('/dadoEnviado1', PageController.dadoEnviado1);
// router.post('/dadoEnviado',PageController.dadoEnviado);
router.post('/contact', PageController.contato);

router.get('/search', SearchController.search);

router.get('/teste', PageController.canil);

export default router;