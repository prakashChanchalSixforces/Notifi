import Constants from "../../utils/Constant";

import EncryptedStorage from 'react-native-encrypted-storage';
import NetworkOps from "../../network/NetworkOps";
import { ServiceEnum } from "../../network/Urls";
const { TYPE } = Constants
export const genAction = (type, payload) => ({ type, payload })


export const fetchAllConvo= () => async (dispatch, getstate) => {
const data={
  "from": "+919720293318",
   "to":"919720293318",
   "body":"nsncd"
  }
  const res = await NetworkOps.post(ServiceEnum.fetchAllConvo, data)
  return res
}
export const fetchConvo= (value) => async (dispatch, getstate) => {
  const data={
    "from": "+919720293318",
     "to":"919720293318",
     "body":"nsncd"
    }
    const res = await NetworkOps.post(`${ServiceEnum.FetchConvo}?from=+16042435773&to=${value}`)
    return res
  }
  export const FromfetchConvo= (value) => async (dispatch, getstate) => {
    const data={
      
      "to":"+16042435773",
        "from": "+917060208598"
    
      }
      const res = await NetworkOps.post(`${ServiceEnum.FetchConvo}?to=+16042435773&from=${value}`)
      return res
    }
    export const SendMessage= (value) => async (dispatch, getstate) => {
        const res = await NetworkOps.post(`${ServiceEnum.sendMessage}`,value)
        return res
      }