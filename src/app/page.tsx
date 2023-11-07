import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  //redirect(appURLs.homolog.fronturl, RedirectType.push);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Central BuyBye</h1>

      <Link href="/Login">
        Login
      </Link>
      <Link href="/dashServicos/servicosHome">
        Home
      </Link>

      <Link href="/integracaoprodtecnisa">
        Nova Page
      </Link>

      <Link href="/pages/integracaoprodtecnisa/pages/edicaoprodtecnisa">
        Edicao
      </Link>
    </main>
  )
}
