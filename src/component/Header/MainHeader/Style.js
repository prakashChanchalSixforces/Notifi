import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from '../../../utils/Responsive/index'
import { Platform } from 'react-native'
import { palette } from '../../../theme'
export default {
  RightImage: {
    width: wp('1%'),
    height: hp('2.0%'),
  },
  centerImage: {
    width: wp('28%'),
    height: hp('3%'),
  },
  backArrow: {
    position: 'absolute',
    paddingTop: Platform.OS === 'android' ? 10 : 50,
    zIndex: 1,
    left: 0,
    top: 0,
    zIndex: 1,
    flexDirection: 'row',
    paddingLeft: wp('2%'),
    overflow: Platform.OS === 'android' ? 'hidden' : null,
  },
  mainContainer: {

    height: Platform.os==='ios'?40:40,
  
    backgroundColor:'white',
   paddingBottom:10,
    alignItems:'center',
    width:wp('100%'),
    borderBottomWidth:Platform.OS === 'android' ?1:2,
    borderColor:Platform.OS === 'android' ?palette.lightGrey:palette.lightGrey
  },
  subContainer: {
    justifyContent: 'center',
  },

  profileContainer: {
    flex: 1,
    height: hp('4%'),
    marginTop: Platform.OS === 'android' ? hp('3%') : hp('7%'),
    marginBottom: hp('2%'),
    marginLeft: wp('2%'),
    zIndex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  backText: {
    paddingHorizontal: wp('1%'),
    fontSize: 16,
    color: palette.black,
    textAlign: 'center'
  }
}