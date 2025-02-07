module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "power-assert", // Добавьте power-assert сюда
  ],
};
