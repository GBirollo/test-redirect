import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

const DataTableProdLista = ({ data }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (data && data.rows) {
      const dataTable = $(tableRef.current).DataTable({
        data: data.rows,
        columns: [
          { data: 'codigo' },
          { data: 'id_prod_cab' },
          { data: 'descricao' },
          { data: 'descricao_buybye' },
          { data: 'ean' },
          {
            data: function (row, type, set) {
              return `
              <div class="acoes">
                </i> <i class="fas fa-pencil"></i>
              </div> `;
            },
          },
        ],
      });

      return () => {
        dataTable.destroy();
      };
    }
  }, [data]);

  const handleEdit = (rowData) => {
    console.log(rowData, 'entrou aqui');
  };

  return (
    <table ref={tableRef} className="display centered mtd-datatable" style={{ width: '100%', textAlign:'center' }}>
      <thead>
        <tr>
          <th>Cód Tecnisa</th>
          <th>Cód Buybye</th>
          <th>Descrição Tecnisa</th>
          <th>Descrição Buybye</th>
          <th>EAN</th>
          <th>Ações</th>
        </tr>
      </thead>
    </table>
  );
};

export default DataTableProdLista;
