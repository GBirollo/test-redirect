import Tabs from '@/app/components/tabsprodtecnisa';

const Precos = () => {
  return (
    <div>
      <Tabs />
      <div className="p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/3 p-4">
            <label htmlFor="preco" className="block text-gray-600">Preço:</label>
            <input type="text" id="preco" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="preco_cli" className="block text-gray-600">Preço Cliente:</label>
            <input type="text" id="preco_cli" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="preco_comanda" className="block text-gray-600">Preço Comanda:</label>
            <input type="text" id="preco_comanda" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="preco_delivery" className="block text-gray-600">Preço Delivery:</label>
            <input type="text" id="preco_delivery" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="preco_sugerido" className="block text-gray-600">Preço Sugerido:</label>
            <input type="text" id="preco_sugerido" className="w-full border p-2 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precos;
