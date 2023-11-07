/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
        {
            source: "/Login",
            destination: `http://localhost:4000/`,
        },
        {
            source: "/dashServicos/:path*",
            destination: `http://localhost:4000/dashServicos/:path*`,
        },
        {
            source: "/dashProdutosMethodos",
            destination: `http://localhost:4000/dashProdutosMethodos`,
        },
        {

            source: "/views/:path*",
            destination: `http://localhost:4000/views/:path*`,
        },
        {

            source: "/plugins/:path*",
            destination: `http://localhost:4000/plugins/:path*`,
        },
        {

            source: "/permissoes/:path*",
            destination: `http://localhost:4000/permissoes/:path*`,
        },
        {

            source: "/v2/:path*",
            destination: `http://localhost:4000/v2/:path*`,
        },
        {

            source: "/modo=dev",
            destination: `http://localhost:4000/?modo=dev`,
        },
    ]    
  },
  
};

module.exports = nextConfig;
