const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  // Support MDX and TSX/JSX pages
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Note: do not set `turbopack.root` to this folder alone; PostCSS can still resolve
  // `@import "tailwindcss"` from the parent `Documents/Github` path and then fail to find
  // `node_modules/tailwindcss`. To silence the multi-lockfile warning, remove the stray
  // `package-lock.json` under your home directory or open only the `blog` folder in the editor.
  async redirects() {
    return [
      {
        source: "/blog/customer-lifetime-value-and-the-acquisition-budget",
        destination: "/blog/clv-ecobank-jumia-acquisition",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const appleTouch = "/profile.jpg";
    return [
      { source: "/apple-touch-icon.png", destination: appleTouch },
      { source: "/apple-touch-icon-precomposed.png", destination: appleTouch },
    ];
  },
});

module.exports = nextConfig;
