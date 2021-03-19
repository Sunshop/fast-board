type ChangeLineWeightType = 'changeLineWeight';
export const KEY_CHANAGELINEWEIGHT: ChangeLineWeightType = 'changeLineWeight';
export interface ChangeLineWeightActionType {
  type: ChangeLineWeightType,
  value: number,
}

type ChangeLineColorType = 'changeLineColor';
export const KEY_CHANAGELINECOLOR: ChangeLineColorType = 'changeLineColor';
export interface ChangeLineColorActionType {
  type: ChangeLineColorType,
  value: string,
}

export type ActionType = ChangeLineWeightActionType | ChangeLineColorActionType;
