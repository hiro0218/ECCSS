module.exports = ctx => {
  return {
    plugins: [
      require('autoprefixer')({
        grid: true,
        cascade: false,
      }),
      require('postcss-flexbugs-fixes'),
    ],
  };
};
