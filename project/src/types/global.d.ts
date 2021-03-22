/**
 * 全局类型使用 declare
 * npm包使用 export
 * /// <reference path="..." />
 * 三斜线引用告诉编译器在编译过程中要引入的额外的文件。
 *
 * TS类型声明文件的正确使用姿势
 * [https://www.freesion.com/article/2489716074/]
 *
 * Tips: namespace 一般用来声明对象
 */

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

declare type SvgContentType = 'line' | 'img' | 'text';

interface LineType {
  id: string,
  d: string,
  stroke?: string, // 颜色
  strokeWidth?: string, // 粗细
  strokeLinecap?: string, // 不同类型的开放路径的终结
  strokeDasharray?: string, // 虚线
}

interface ImgType {
  id: string,
  imgUrl: string,
}

interface PathInfoType {
  type: SvgContentType,
  value: LineType | ImgType,
}

declare type PathListType = Array<PathInfoType>;
