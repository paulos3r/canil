import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet, Pets, Contato } from '../models/petsModel';
import { Op } from 'sequelize'


export const canil = async (req:Request, res:Response) => {
    let pets = await Pets.findAll();

    res.render('pages/teste', {
        pets
    })
}
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
export const bird = (req:Request, res:Response)=>{
    let list  = Pet.getFromType('bird');
    res.render('pages/page', {
        menu: createMenuObject('bird'),
        banner:{
            title:'Todos os animais',
            backgound:'allanimals.jpg'
        },
        list
    });
}
export const cadastroPet = (req: Request, res: Response)=>{
    let cadastroPet = true;
    res.render('pages/formPageCadastroPet', {
        cadastroPet,
        banner:{
            title:'Cadastro de Pets para doação',
            backgound:'allanimals.jpg'
        }
    });
}
export const contact = (req:Request, res:Response)=>{
    res.render('pages/formPageContato', {

    });
}

export const contato = async (req:Request, res:Response)=>{
    let nome:string = req.body.nome;
    let email:string = req.body.email;
    let mensagem:string = req.body.mensagem

    const [contato, created] = await Contato.findOrCreate({
        where:{
            nome,
            email,
            mensagem
        },
        defaults:{
            nome:nome,
            email:email,
            mensagem: 'esta mensagem ja existe no banco'
        }
    });
    if(created){
        console.log('Enviado para banco')
    }else{
        console.log('houve algum problema no envio')
    }
    // RETORNA O CLIENTE 
    const contatos = await Contato.findAll();
    if(contatos){
        console.log( contatos[0]);
    }

    res.render('pages/dadoEnviado1', {
        nome,
        email,
        mensagem
    });
}

export const dadoEnviado = (req:Request, res:Response)=>{
    let nome: string = req.body.nome;
    let email: string = req.body.email;
    //teste
    console.log(nome, email)
    //enviando os dados para impressão
    res.render('pages/dadoEnviado', {
        nome: nome,
        email: email
    });
}

export const dadoEnviado1 = async (req:Request, res:Response)=>{

    const contatos = await Contato.findAll();
    if(contatos){
        console.log( contatos[0]);
    }
    res.render('pages/dadoEnviado1', {
        banner:{
            name:'Paulo'
        },
        contatos
    })
}