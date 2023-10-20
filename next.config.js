/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
        {
            source: "/dashServicos/:path*",
            destination: `http://erpbuybyehomolog.methodostecnologia/dashServicos/:path*`,
        },
        {

            source: "/views/:path*",
            destination: `http://erpbuybyehomolog.methodostecnologia/views/:path*`,
        },
        {

            source: "/plugins/:path*",
            destination: `http://erpbuybyehomolog.methodostecnologia/plugins/:path*`,
        },
        {

            source: "/permissoes/:path*",
            destination: `http://erpbuybyehomolog.methodostecnologia/permissoes/:path*`,
        },
        {

            source: "/v2/:path*",
            destination: `http://erpbuybyehomolog.methodostecnologia/v2/:path*`,
        },
    ]    
  },
};

module.exports = nextConfig;
