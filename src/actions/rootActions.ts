export enum RootTypeKeys {
  ROOT_ACTION
}

export interface RootAction {
  type: number
  payload: string
}

export const rootAction = (payload: string): RootAction => ({
  type: RootTypeKeys.ROOT_ACTION,
  payload
})
