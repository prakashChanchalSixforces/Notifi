import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from '../../utils/Responsive/index'
import { Platform } from 'react-native'
import { palette } from '../../theme'
export default {
  backImage: {
    width: wp('3.0%'),
    height: hp('2.5%'),
    alignSelf: 'center',
    tintColor: palette.black,

  },
  subContainer: {
   
  },
  centerSubContainer: {
    justifyContent: 'center',
  },
  centerText: {
    fontSize: 16,
   marginTop:-2,
    color: palette.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    position: 'absolute',
    right: 0,
    paddingRight: wp('5%'),
    top: 0,
    zIndex: 2,
    borderRadius: Platform.OS === 'android' ? 15 : 0,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
    paddingTop:5,
   // paddingTop: Platform.OS === 'android' ? 28 : 35,
    // marginBottom: Platform.OS === 'ios' ? 0 : -35,
  },
  rightText: {
    fontSize: 18,
    lineHeight: 24,
   
    color: palette.black,
    marginHorizontal: 3,
    marginVertical: 3,
  },
  container: {
    height: 74,
    paddingHorizontal: wp('5%'),
    paddingTop: 10,
    

  },
  profileImage: {
    width: 30,
    height: 30,
   
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 10,
    backgroundColor: palette.pup,
  },
  prfImg:{
    width: 25,
    height: 25,
    tintColor:palette.white
  },
  containerView: {
    borderBottomWidth:Platform.OS === 'android' ?1:0,
    borderColor:Platform.OS === 'android' ?palette.lightGrey:palette.lightGrey,
   // alignItems: 'center',
    width: '100%',
    height:Platform.OS === 'android' ?45:55,
    paddingBottom:20,
    flexDirection: 'row',
  //  justifyContent: 'center',
  
  },
  profileContainer: {
    height: 35,
    marginTop: Platform.OS === 'android' ? hp('2%') : hp('7%'),
    marginBottom: hp('2%'),
    marginLeft: hp('2%'),
    zIndex: 1,
    // borderBottomWidth: 1,
    //borderBottomColor: palette.smokeWhite,
  },
  backArrow: {
   // position: 'absolute',
    width:wp('12%'),
    paddingTop: Platform.OS === 'android' ? 8 : 5,
    zIndex: 1,
    left: 0,
    top: 0,
    zIndex: 1,
 
    overflow: Platform.OS === 'android' ? 'hidden' : null,
  },
  backText: {
    paddingHorizontal: wp('1%'),
    fontSize: 16,
    //paddingLeft:wp('2%'),
    color: palette.white,
    textAlign: 'center'
  }
}