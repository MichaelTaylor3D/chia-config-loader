// index.d.ts
declare module "chia-config-loader" {
  interface ChiaConfig {
    // Specify the properties and types of the Chia configuration object here
    [key: string]: any; // Replace 'any' with more specific types if known
  }

  function getChiaConfig(): ChiaConfig;

  export { getChiaConfig };
}
