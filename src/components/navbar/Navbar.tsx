import "../../assets/css/style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg">
          Schuab's Farmácia
          <div className="flex gap-4">
            Produtos 
            <Link to='/categoria' className='hover:underline'>Categoria</Link> 
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
