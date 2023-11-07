"use client"
import Tabs from '@/app/components/tabsprodtecnisa';
import { useState } from 'react';

const Regras = () => {
  const [formValues, setFormValues] = useState({
    hora_ini: '',
    hora_fim: '',
    preco_sugerido_regras: '',
    selecao: 'Selecione',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <Tabs />
      <div className="p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/3 p-4">
            <label htmlFor="selecao" className="block text-gray-600">Seleção:</label>
            <select
              id="selecao"
              name="selecao"
              value={formValues.selecao}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md"
            >
              <option value="Selecione">Selecione</option>
              <option value="Básico">Básico</option>
              <option value="Extra">Extra</option>
            </select>
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="hora_ini" className="block text-gray-600">Hora início:</label>
            <input type="text" id="hora_ini" name="hora_ini" value={formValues.hora_ini} onChange={handleInputChange} className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="hora_fim" className="block text-gray-600">Hora fim:</label>
            <input type="text" id="hora_fim" name="hora_fim" value={formValues.hora_fim} onChange={handleInputChange} className="w-full border p-2 rounded-md" />
          </div>
          <div className="w-1/3 p-4">
            <label htmlFor="preco_sugerido_regras" className="block text-gray-600">Preço Sugerido:</label>
            <input type="text" id="preco_sugerido_regras" name="preco_sugerido_regras" value={formValues.preco_sugerido_regras} onChange={handleInputChange} className="w-full border p-2 rounded-md" />
          </div>
        </div>
        <div className="min-w-full">
          <div className="flex">
            <div className="mr-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 block">Incluir</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-2 block">Alterar</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md block">Excluir</button>
            </div>
            <div className="max-w-screen-md w-full">
            <table className="min-w-full border rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-center">Tipo</th>
                  <th className="px-4 py-2 text-center">Hora Início</th>
                  <th className="px-4 py-2 text-center">Hora Fim</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="px-4 py-2 border border-gray-300">Básico</td>
                  <td className="px-4 py-2 border border-gray-300">10:00</td>
                  <td className="px-4 py-2 border border-gray-300">12:00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">Extra</td>
                  <td className="px-4 py-2 border border-gray-300">12:01</td>
                  <td className="px-4 py-2 border border-gray-300">13:00</td>
                </tr>
                {/* Você pode adicionar mais linhas aqui conforme necessário */}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regras;

