import "../../assets/css/style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-sky-600 text-white"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="hover:underline">
            Schuab's Farmácia
          </Link>
          <div className="flex gap-4">
            Produtos
            <Link to="/categorias" className="hover:underline">
              Categoria
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
