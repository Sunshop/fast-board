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

declare type SvgMainType = 'line' | 'img' | 'text' | 'tip';

declare type SvgChildLineType = 'straightLine' | 'handLine';

declare type SvgChildType = SvgChildLineType | SvgMainType;
// declare type Svg

interface LineInfoType {
  id: string,
  path: string, // 路径
  weight: number, // 粗度
  color: string, // 颜色
  type: string, // 实虚线 形状
  // stroke?: string, // 颜色
  // strokeWidth?: string, // 粗细
  // strokeLinecap?: string, // 不同类型的开放路径的终结 默认圆形
  // strokeDasharray?: string, // 虚线
}

interface ImgType {
  id: string,
  imgUrl: string,
  type: string,
}

interface PathInfoType {
  type: SvgChildType,
  value: LineInfoType | ImgType,
}

declare type PathListType = Array<PathInfoType>;
