import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pets, Contato } from '../models/petsModel';
import { Op } from 'sequelize'


export const canil = async (req:Request, res:Response) => {
    let list = await Pets.findAll();
    console.log(list)
    res.render('pages/page', {
        list
    })
}
export const home = async (req: Request, res:Response) =>{
    //teste res.send('home no controller');
    let list = await Pets.findAll();

    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            backgound:'allanimals.jpg'
        },
        list
    });
}

export const dog = async (req: Request, res:Response)=>{
    let list = await Pets.findAll({
        where: {
            tipo:'dog'
        }
    });
    console.log(list);
    res.render('pages/page',{
        menu: createMenuObject('dog'),
        banner:{
            title: 'cachorres',
            backgound: 'banner_dog.jpg'
        },
        list
    })
}
export const cat = async (req: Request, res:Response) =>{
    //res.render('pages/home');
    let list = await Pets.findAll({
        where:{
            tipo:'cat'
        }
    });
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title:'Gatos',
            backgound:'banner_cat.jpg'
        },
        list
    });
}
export const fish = async (req: Request, res:Response) =>{

    //res.render('pages/home');
    let list  = await Pets.findAll({
        where:{
            tipo:'fish'
        }
    });
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner:{
            title:'peixes',
            backgound:'banner_fish.jpg'
        },
        list
    });
}
export const bird = async (req:Request, res:Response)=>{
    let list  = await Pets.findAll({
        where:{
            tipo: 'bird'
        }
    });
    res.render('pages/page', {
        menu: createMenuObject('bird'),
        banner:{
            title:'Todos os animais',
            backgound:'allanimals.jpg'
        },
        list
    });
}
export const cadastroPet = async (req: Request, res: Response)=>{
    let cadastroPet = true;
    console.log(req.body.nome_animal)
    if(req.body.nome_animal){
        let {nome_animal, raca_animal, imagem_animal, cor_animal, sexo_animal, localidade_animal, 
            telefone_animal, tipo_animal} = req.body;
        
        imagem_animal 

        let created = await Pets.create({
            nome:nome_animal,raca: raca_animal, 
            imagem: req.body.imagem_animal ? imagem_animal : imagem_animal = 'viraLata.png', 
            cor:cor_animal, sexo:sexo_animal, localidade:localidade_animal,telefone:telefone_animal, 
            tipo:tipo_animal
        });
        if(created){
            console.log('enviado para banco')
        }else{
            console.log('Houve algum problema');
            res.render('pages/404');
            return;
        }
        res.render('pages/formPageCadastroPet', {
            cadastroPet,
            banner:{
                title:'Cadastro de Pets para doação',
                backgound:'allanimals.jpg'
            },
            nome: nome_animal, raça:raca_animal,imagem: imagem_animal,cor: cor_animal,sexo: sexo_animal,
            localidade: localidade_animal
        });
    }else{
        res.render('pages/formPageCadastroPet',{
            cadastroPet,
            banner:{
                title:'Cadastro de Pets para doação',
                backgound:'allanimals.jpg'
            }
        });
    }
}

export const contact = (req:Request, res:Response)=>{
    res.render('pages/formPageContato', {

    });
}

export const contato = async (req:Request, res:Response)=>{  
}

export const listaPageContato = async (req:Request, res:Response)=>{
    //VARIAVEIS JSON BODY-PARSER
    let {nome, email, mensagem} = req.body;

    //INSERINDO NO BANCO DE DADOS
    const [contato, created] = await Contato.findOrCreate({
        where:{
            nome,
            email,
            mensagem
        },
        defaults:{
            nome:nome,
            email:email
        }
    });
    //VALIDAÇÃO
    if(created){
        console.log('Enviado para banco');
    }else{
        console.log('houve algum problema no envio')
    }

    res.render('pages/dadoEnviado1', {
        nome,
        email,
        mensagem
    });
}