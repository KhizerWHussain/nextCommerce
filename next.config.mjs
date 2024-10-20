/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: ".next",
    compress: true,
    cacheMaxMemorySize: 0,
    crossOrigin: "anonymous",
    optimizeFonts: true,
    output: "standalone",
    productionBrowserSourceMaps: false,
    reactStrictMode: true,
    poweredByHeader: true,
    trailingSlash: false,
    cleanDistDir: true,
    experimental: {
        optimizeServerReact: true,
        optimizeCss: true,
        disableOptimizedLoading: false,
        scrollRestoration: true,
    }
    
    
};

export default nextConfig;
