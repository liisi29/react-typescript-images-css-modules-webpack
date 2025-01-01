declare module "*.module.css";
declare module "*.css";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}
// ./src/@types/eslint-plugin-react-hooks.d.ts
declare module "eslint-plugin-react-hooks" {
  import type { ESLint } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    // eslint-plugin-react-hooks does not use FlatConfig yet
    configs: Record<string, ESLint.ConfigData>;
  };
  export default plugin;
}
