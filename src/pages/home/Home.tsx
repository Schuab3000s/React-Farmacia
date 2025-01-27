import "../../assets/css/style.css";

function Home() {
  return (
    <>
      <div className="bg-green-400 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">Compre aqui seus remédios</p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white 
                                            border-white border-solid border-2 py-2 px-4"
              >
                Produtos
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://www.opovo.com.br/_midias/jpg/2023/01/12/medicamentos_controlados_6-20806400.jpg"
              alt="Imagem Página Home"
              className="w-150 h-100 rounded-lg m-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
