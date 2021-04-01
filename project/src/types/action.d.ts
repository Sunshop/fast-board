/**
 * redux action type
 */

declare namespace LineActionType {
  type ChangeLineWeightType = 'changeLineWeight';
  type ChangeLineColorType = 'changeLineColor';
  type ActionType = ChangeLineWeightActionType | ChangeLineColorActionType;
  interface ChangeLineWeightActionType {
    type: ChangeLineWeightType,
    value: number,
  }
  interface ChangeLineColorActionType {
    type: ChangeLineColorType,
    value: string,
  }
}

declare namespace CurType {
  type ChangeCurType = 'changeCurType';
  type ActionType = ChangeCurTypeActionType;

  interface ChangeCurTypeActionType {
    type: ChangeCurType,
    value: {
      curType: SvgChildType,
      parent: SvgMainType,
    },
  }
}
