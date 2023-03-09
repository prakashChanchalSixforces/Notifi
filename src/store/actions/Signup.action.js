import Constants from "../../utils/Constant";


import EncryptedStorage from 'react-native-encrypted-storage';
import NetworkOps from "../../network/NetworkOps";
import { ServiceEnum } from "../../network/Urls";
const { TYPE } = Constants
export const registerMail = (payload) => ({
  type: TYPE.registerMail,
  payload,
});
export const registerId = (payload) => ({
  type: TYPE.registerId,
  payload,
});
export const onSubmitMail = (mailId) => async (dispatch) => {
  const data = {
    "email": mailId
  };
  dispatch(registerMail(mailId));
  const res = await NetworkOps.post(ServiceEnum.register, data);
  if (res.status === true) {
    const id = res.data._id.toString()
    console.log(id,"datataaa")
    dispatch(registerId(id));
  }
  return res;
}

export const rensendVerification = (data) => async (dispatch) => {
  const res = await NetworkOps.post(`${ServiceEnum.resendVerification}?user=${data}`)
  return res;
}
export const setPassword = (data) => async (dispatch) => {
  const res = await NetworkOps.post(ServiceEnum.setPassword, data);
  if(res.status===true)
    {
      try {
        await EncryptedStorage.setItem(
            "access_token",
            JSON.stringify({
                token : res.token,
                username : '',
                isServiceProvider:false
            })
        );
    } catch (error) {
    }
    console.log(res.token,"token")
      dispatch({type:TYPE.authToken,payload:res.token})
}
  return res;
}
export const verifyId = () => async (dispatch, getstate) => {
  const { registerId } = getstate().SignUp
  console.log(getstate())
  const res = await NetworkOps.get(`${ServiceEnum.userDetails}/${registerId}`);
  return res;
}
export const google_Signup = (tokenId) => async (dispatch) => {
  const data = {
    "tokenId": tokenId
  };
  const res = await NetworkOps.post(ServiceEnum.gooleSignup, data);
  console.log(res.email, "res")
  return res;
};
export const Apple_SignUp = (data) => async (dispatch) => {
  const res = await NetworkOps.post(ServiceEnum.appleSignup, data);
  console.log(res, "res")
  try {
    await EncryptedStorage.setItem(
        "access_token",
        JSON.stringify({
            token : res.token,
            username : '',
            isServiceProvider:false
        })
    );
} catch (error) {
}
  return res;
};

export const newCreateProfile = (data) => async (dispatch) => {
  console.log(data,"data");
  const details={...data,"thruAdmin":"false"}
  const res = await NetworkOps.post(ServiceEnum.newCreateProfile, details);
  dispatch({
      type: 'EMAIL',
      payload: data.email
  })
  return res;
}
export const setNewServices = (data,registerEmail) => async (dispatch,getstate) => {
  console.log(data,"data")
  console.log(data,"data");
  const details = {
      "email": registerEmail,
      "servicesOffered": data
  }
  console.log(details,"details")
  const res = await NetworkOps.post(ServiceEnum.newSetServices, details);
  console.log(res.message,"details")
  console.log(res.message)
  return res;
}
export const newPasswordSet = (data) => async (dispatch, getstate) => {

  const res = await NetworkOps.post(ServiceEnum.newPasswordSet, data);
  if (res.status === 'success' || res.status === true) {
    try {
      await EncryptedStorage.setItem(
          "access_token",
          JSON.stringify({
              token: res.token,
              username: res.uniqueUrl,
              isWorkerProfile: res.data.isWorkerProfile
          })
      );
  } catch (error) {
  }
  }
  return res;
}