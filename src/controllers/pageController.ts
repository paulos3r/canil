import { Request, Response} from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet} from '../models/pets';

export const home = (req: Request, res:Response) =>{
    //teste res.send('home no controller');
    let list = Pet.getAll();

    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            backgound:'allanimals.jpg'
        },
        list
    });
}
export const dog = (req: Request, res:Response) =>{
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title:'cachorros',
            backgound:'banner_dog.jpg'
        },
        list
    });
}
export const cat = (req: Request, res:Response) =>{
    //res.render('pages/home');
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title:'Gatos',
            backgound:'banner_cat.jpg'
        },
        list
    });
}
export const fish = (req: Request, res:Response) =>{
    //res.render('pages/home');
    let list  = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner:{
            title:'peixes',
            backgound:'banner_fish.jpg'
        },
        list
    });
}
export const contact = (req:Request, res:Response)=>{
    let formulario = true;
    res.render('pages/formPage', {
        formulario
    })
}
