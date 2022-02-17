import { IGlobal } from './global'
import { IHomePage } from './flow'

export interface IStoreState {
  global: IGlobal
  homePage: IHomePage
}

export interface IAction<T = any> {
  type: string
  payload: T
}
