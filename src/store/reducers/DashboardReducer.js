import Constants from "../../utils/Constant";
const { TYPE } = Constants
const initialState = {
    emailId: '',
    authToken: '',
    movingService: {},
    pressureWashingService: {},
    notificationData:[],
    userdetails:{}
}

const DashboardReducers = (state = initialState, action) => {

    switch (action.type) {
        case TYPE.LoginMail:
            return { ...state, emailId: action.payload }
        case TYPE.authToken:
            return { ...state, authToken: action.payload }
        case TYPE.movingPricedetails:
            return { ...state, movingService: action.payload }
        case TYPE.pressureWashingPriceDetails:
            return { ...state, pressureWashingService: action.payload }
            case TYPE.notificationData:
                return { ...state, notificationData: action.payload }
            case TYPE.userdetails:
                return { ...state, userdetails: action.payload }
        default:
            return state;
    }

}
export default DashboardReducers;