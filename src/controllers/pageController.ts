import { Request, Response} from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res:Response) =>{
    //teste res.send('home no controller');
    res.render('pages/page',{
        manu: createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            backgound:'allanimals.jpg'
        }
    });
}
export const dogs = (req: Request, res:Response) =>{
    res.render('pages/page', {
        manu: createMenuObject('dog'),
        banner:{
            title:'cachorros',
            backgound:'banner_dog.jpg'
        }
    });
}
export const cats = (req: Request, res:Response) =>{
    //res.render('pages/home');
    res.render('pages/page', {
        manu: createMenuObject('cat'),
        banner:{
            title:'Gatos',
            backgound:'banner_cat.jpg'
        }
    });
}
export const fishes = (req: Request, res:Response) =>{
    //res.render('pages/home');
    res.render('pages/page', {
        manu: createMenuObject('fish'),
        banner:{
            title:'peixes',
            backgound:'banner_fish.jpg'
        }
    });
}
