/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Abhays_portfolio',  // Adjust to your repository name
    assetPrefix: '/Abhays_portfolio/',  // Ensure assets load properly on GitHub Pages
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreBuildErrors: true,
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,  // Disable Next.js image optimization for static exports
    },
};

export default nextConfig;
