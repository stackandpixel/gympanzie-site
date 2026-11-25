// Set BASE_PATH (e.g. "/gympanzie-site") only when serving from a sub-path such as
// stackandpixel.github.io/gympanzie-site. Leave it empty for a custom domain.
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};
export default nextConfig;
