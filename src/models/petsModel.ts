import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/pets'

let constPet;
type PetType =  'dog'|'cat'|'fish'|'bird';
type PetSex = 'Macho'|'Fêmea'|'';

interface PetInterface extends Model{
    id: number,
    nome:string,
    raca:string
    imagem:string,
    cor:string,
    sexo:string,
    localidade: string,
    telefone:string,
    tipo:string
}
interface contatoInterface extends Model{
    id:number,
    email:string,
    nome:string,
    mensagem:string
}
export const Contato = sequelize.define<contatoInterface>("contato",{
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
    },
    email:{
        type: DataTypes.STRING
    },
    nome:{
        type: DataTypes.STRING
    },
    mensagem:{
        type: DataTypes.STRING
    }
},
    {
        tableName: 'contato',
        timestamps: false
    }
);
export const Pets = sequelize.define<PetInterface>("Pets", {
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING
    },
    raca:{
        type: DataTypes.STRING
    },
    imagem:{
        type: DataTypes.STRING
    },
    cor:{
        type: DataTypes.STRING
    },
    sexo:{
        type: DataTypes.STRING
    },
    localidade:{
        type: DataTypes.STRING
    },
    telefone:{
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    }
},
    {
        tableName: 'pets',
        timestamps:false
    }
)


const data: Pet[] = [
    //especies liberadas pelo temos sete espécies de aves consideradas domésticas pelo Ibama e Ministério da Agricultura.
    //Manom, Mandarim, Diamente Gold, Canário, Periquito, Calopsita e Rolinha Diamante
    {
        type: 'bird',
        image: 'manon.jpg',
        name: 'Manom',
        color: 'Marrom e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'bird',
        image: 'mandarim.jpg',
        name: 'Mandarim',
        color: 'Marrom e Preto',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'bird',
        image: 'diamente-gold.jpg',
        name: 'Diamente Gold',
        color: 'Marrom e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'bird',
        image: 'canario.jpg',
        name: 'Canário',
        color: 'Marrom e Preto',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'bird',
        image: 'piriquito.jpg',
        name: 'Periquito',
        color: 'Marrom e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'bird',
        image: 'calopsita.jpg',
        name: 'Calopsita',
        color: 'Marrom e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'bird',
        image: 'rolinha-diamante.jpg',
        name: 'Rolinha Diamante',
        color: 'Marrom e Preto',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'pinscher.jpg',
        name: 'Pinscher',
        color: 'Marrom e Preto',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Fêmea',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Macho',
        localidade: 'Goiânia - GO'
    },
];

type Pet = {
    type: PetType,
    image:string,
    name:string,
    color:string,
    sex: PetSex,
    localidade:string
};

export const Pet = {
    //pega todos os pets
    getAll: (): Pet[]=>{
        return data;
    },
    //filtra pelo tipo do pats
    getFromType: (type: PetType): Pet[]=>{
        return data.filter(item => item.type === type);
    },
    //filtra pelo nome do pats
    getFromName: (name: string): Pet[] => {
        // condição retorna -1 por que não foi encontrado se retornar 0 achou indexOf e quese sensetive
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
        //{
        //     if(item.name.indexOf(name) > -1){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // });
    }
};