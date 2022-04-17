import { Request, Response} from 'express'; 
import { Pets, Pet } from '../models/petsModel'
import { createMenuObject } from '../helpers/createMenuObject';
import { Op } from 'sequelize'

// export const search = (req: Request, res:Response) =>{
    
//     let query: string = req.query.q as string;
//     let list = Pet.getFromName(query);

//     if(!query){
//         res.redirect('/');
//         return;
//     }
//     res.render('pages/page', {
//         menu: createMenuObject(''),
//         list
//     });
// }
export const search = async (req: Request, res: Response)=>{
    let raca = req.body.pesquisa as string

    let list = await Pets.findOne({
        where:{
            raca:
            {
                [Op.like]: raca
            }
        }
    });
    console.log(list)
    if(list===null){
        res.redirect('/');
        return;
    }
    res.render('pages/page',{
        menu: createMenuObject(''),
        banner:{
            title:'Me adota por favor',
            backgound:'allanimals.jpg'
        },
        list
    });
}



// SELECT "id", "nome", "raca", "imagem", "cor", "sexo", "localidade", "telefone", "tipo" 
// FROM "pets" AS "Pets" 
// WHERE "Pets"."query" LIKE NULL LIMIT 1;