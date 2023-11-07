import Tabs from '@/app/components/tabsprodtecnisa';
import 'font-awesome/css/font-awesome.min.css';

const ProdBuybye = () => {
  const image64 = "";
  return (
    <div>
      <Tabs />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Última Aba</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/3 p-4">
            <img src={image64} alt="Imagem" className="w-16 h-16 object-cover rounded-full" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 block">Alterar</button>
          </div>
          <div className="w-1/3 p-4">
          <label htmlFor="codigo" className="block text-gray-600">Código:</label>
            <div className="relative"> {/*onClick={handleSearch}*/ }
              <input type="text" id="codigo" readOnly className="w-full border p-2 rounded-md bg-gray-200 pr-10" value="Código" />
              <button className="bg-gray-200 text-gray-600 px-2 py-2 rounded-md absolute top-0 right-1"><i className="fa fa-search"></i></button>
            </div>
          </div>
          <div className="w-1/3 p-4">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md mt-6 block">Desvincular</button>
          </div>
          <div className="w-1/3 p-4"></div>
          <div className="w-1/3 p-4">
            <label htmlFor="descricao_buybye" className="block text-gray-600">Descrição:</label>
            <input type="text" id="descricao_buybye" className="w-full border p-2 rounded-md"  />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="grupo_buybye" className="block text-gray-600">Grupo:</label>
            <input type="text" id="grupo_buybye" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4"></div>
          <div className="w-1/3 p-4">
            <label htmlFor="sub_grupo_buybye" className="block text-gray-600">Sub Grupo:</label>
            <input type="text" id="sub_grupo_buybye" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="fabricante_buybye" className="block text-gray-600">Fabricante:</label>
            <input type="text" id="fabricante_buybye" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProdBuybye;
