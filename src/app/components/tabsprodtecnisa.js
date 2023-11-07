import Link from 'next/link';

const TabsProdTecnisa = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/pages/integracaoprodtecnisa/pages/tributos">
            <a className="hover:text-blue-500">Tributos</a>
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/pages/integracaoprodtecnisa/pages/precos">
            <a className="hover:text-blue-500">Preços</a>
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/pages/integracaoprodtecnisa/pages/regras">
            <a className="hover:text-blue-500">Regras</a>
          </Link>
        </li>
        <li>
          <Link href="/pages/integracaoprodtecnisa/pages/produtobuybye">
            <a className="hover:text-blue-500">Produto Buybye</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default TabsProdTecnisa;
