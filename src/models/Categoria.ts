import Produto from './Produto';
export default interface Catoegoria {
    id: number;
    nome: string;
    produtos?: Produto[] | null;
}