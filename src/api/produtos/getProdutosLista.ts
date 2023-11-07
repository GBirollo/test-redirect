import api from '@/services/api';

const getProdutosLista = async(payload : any): Promise<any> => {
    const response = await api.put('tecnisa/produtos/getProdutosLista', payload);

    return response.data;
};

export default getProdutosLista;