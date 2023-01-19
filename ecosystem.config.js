module.exports = {
  apps: [
    {
      name: "yandas-landing",
      port: "3001",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./.output/server/index.mjs",
    },
  ],
};
