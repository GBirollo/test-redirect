import Tabs from '@/app/components/tabsprodtecnisa';

const Tributos = () => {
  return (
    <div>
      <Tabs />
      <div className="p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/3 p-4">
            <label htmlFor="ncm" className="block text-gray-600">NCM:</label>
            <input type="text" id="ncm" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="cest" className="block text-gray-600">CEST:</label>
            <input type="text" id="cest" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="icms" className="block text-gray-600">ICMS:</label>
            <input type="text" id="icms" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="aliquota-icms" className="block text-gray-600">ALIQUOTA ICMS:</label>
            <input type="text" id="aliquota-icms" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="icms-reducao" className="block text-gray-600">ICMS Redução %:</label>
            <input type="text" id="icms-reducao" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="pis-cofins-incidencia" className="block text-gray-600">PIS/COFINS Incidência:</label>
            <input type="text" id="pis-cofins-incidencia" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="cfop" className="block text-gray-600">CFOP:</label>
            <input type="text" id="cfop" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="cst-icms" className="block text-gray-600">CST ICMS:</label>
            <input type="text" id="cst-icms" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="cst-pis-cofins" className="block text-gray-600">CST PIS/COFINS:</label>
            <input type="text" id="cst-pis-cofins" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="aliquota-pis" className="block text-gray-600">ALIQUOTA PIS:</label>
            <input type="text" id="aliquota-pis" className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="aliquota-cofins" className="block text-gray-600">ALIQUOTA COFINS:</label>
            <input type="text" id="aliquota-cofins" className="w-full border p-2 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tributos;
