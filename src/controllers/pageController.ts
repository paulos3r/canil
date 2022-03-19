import { Request, Response} from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res:Response) =>{
    //teste res.send('home no controller');
    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            backgound:'allanimals.jpg'
        }
    });
}
export const dog = (req: Request, res:Response) =>{
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title:'cachorros',
            backgound:'banner_dog.jpg'
        }
    });
}
export const cat = (req: Request, res:Response) =>{
    //res.render('pages/home');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title:'Gatos',
            backgound:'banner_cat.jpg'
        }
    });
}
export const fish = (req: Request, res:Response) =>{
    //res.render('pages/home');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner:{
            title:'peixes',
            backgound:'banner_fish.jpg'
        }
    });
}
