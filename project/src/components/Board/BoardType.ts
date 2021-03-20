// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

export enum SvgContentType {
  line = 1,
  img = 2,
}

export interface LineType {
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

export interface PathInfoType {
  type: SvgContentType,
  value: LineType | ImgType,
}

export type PathListType = Array<PathInfoType>;
