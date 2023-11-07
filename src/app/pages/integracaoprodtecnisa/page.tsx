'use client'
import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import DataTableProdLista from '../../components/gridprodutoslista';
import getProdutosLista from '@/api/produtos/getProdutosLista';

const IntegracaoProdTecnisa = () => {
    const [dataProdutos, setdataProdutos] = useState([]);
    useEffect(() => {
        const fecthData = async() => {
            const dadosprodutos = await getProdutosLista({"limit" : 10,
            "pagina" : 1,
            "descricao": ""});

            setdataProdutos(dadosprodutos);
        };

        fecthData();
    }, []);

    return (
      <div className="container-fluid consultar-prodtecnisa">
        <div className="w-100 text-right atualizar-data-table">
	    </div>
        <div id="divJogaNovoTableProdTecnisa" className="mtd-datatable overflow-hidden">
            <DataTableProdLista data={dataProdutos} />
        </div>
      </div>
    );
  };
  
export default IntegracaoProdTecnisa;
