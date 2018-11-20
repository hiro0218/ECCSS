module.exports = ctx => {
  return {
    plugins: [
      require('autoprefixer')({
        grid: true,
        cascade: false,
      }),
    ],
  };
};
