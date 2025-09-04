const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "@isograph/plugin-swc",
        {
          // must be an absolute path
          root_dir: path.resolve(__dirname, "."),
          config: require("./isograph.config.json"),
        },
      ],
    ],
  },
};

module.exports = nextConfig;
