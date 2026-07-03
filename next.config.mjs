/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets live in /public/images. Remote patterns kept in case the
    // original CDN-hosted images are referenced during incremental migration.
    remotePatterns: [{ protocol: "https", hostname: "ebosspro.com" }],
  },
  async redirects() {
    return [
      // Legacy hero/nav linked to topic-ai.php (404'd live). Canonical: /topics/ai.
      { source: "/topic-ai", destination: "/topics/ai", permanent: true },
      { source: "/topic-ai.php", destination: "/topics/ai", permanent: true },
      // Old .php entry points → App Router routes.
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index2.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
