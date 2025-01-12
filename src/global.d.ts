// declare module "*.scss" {
//   interface IClassNames {
//     [className: string]: string;
//   }
//   export const classNames: IClassNames;
// }
// declare module "*.scss" {
//   const content: { [className: string]: string };
//   export = content;
// }

// declare module "*.scss" {
//   const classNames: Record<string, string>;
//   export default classNames;
// }

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}
