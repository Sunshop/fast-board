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

declare enum SvgContentType {
  line = 1,
  img = 2,
  text = 3,
}
