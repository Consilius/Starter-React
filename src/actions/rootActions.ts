export enum RootTypeKeys {
  ROOT_ACTION = 'ROOT_ACTION'
}

export interface RootAction {
  type: string
  payload: string
}

export const rootAction = (payload: string): RootAction => ({
  type: RootTypeKeys.ROOT_ACTION,
  payload
})
