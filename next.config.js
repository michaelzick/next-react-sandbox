module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 500,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};
