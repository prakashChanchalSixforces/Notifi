import React from 'react';
import {
    View, Text, Image, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import Styles from './Style';
import style from '../Styles'

import { ButtonWithIcon } from '../..';
import { Back, Etc, ProfileUser } from '../../../asset/index';
import { palette } from '../../../theme';
const MainHeader = ({
    onleftClick = () => { },
    rightText = '',
    customStyle,
    imageSource=null,
    leftText='',
    RightImage=null,
    centerText='',
    leftImage=null,
    centerImage=null,
    leftIconStyle={},
    onRightClick=()=>{},
    containerStyle={},
    rightStyle={},
    centerTextStyle={},
    leftImageContainer={}

}) => {

  
    const renderLeftContainer = () => (
        <View style={style.backArrow}>
          <TouchableOpacity
            onPress={onleftClick}
            underlayColor={palette.lightGrey}
          >
            {!imageSource ? (
              <Image
                style={style.backImage}
                source={Back}
              />
            )
              : (
                  <View style={leftImageContainer}>
                <Image
                  style={[style.backImage,leftIconStyle]}
                  source={imageSource}
                />
                </View>
              )}
    
          </TouchableOpacity>
        </View>
      );

      const rendercenterImage=()=>(
<TouchableOpacity style={style.centerSubContainer} onPress={()=>onRightClick()}>
        <Image
        source={centerImage}
        style={[Styles.centerImage]}
        />
        </TouchableOpacity>
      )
    const renderCenterContainer = () => (
      <View style={{flexDirection:'row',marginBottom:25}}>
         <View   style={[style.profileImage,{backgroundColor:palette.pup}]}>
      <Image
        source={ProfileUser}
        style={style.prfImg}
      />
       <View style={{backgroundColor:palette.pink,width:18,height:18,marginTop:10, borderRadius:4, marginHorizontal: 10,justifyContent:'center',position:'absolute',right:-13,bottom:-3,borderWidth:2,borderColor:palette.white}}>
          <Text style={{textAlign:'center',alignSelf:'center',color:palette.white,fontSize:8,fontWeight:'500'}}>SB</Text>
          </View>
      </View>
        <TouchableHighlight
          underlayColor="none"
          style={style.subContainer}
        //  onPress={onPressCenterContainer}
        >
          <View>
          <Text numberOfLines={1} style={[style.centerText]}>{centerText}</Text>
          <Text numberOfLines={1} style={[{fontSize:10,color:palette.purple}]}>{"add contact details"}</Text>
          </View>
        </TouchableHighlight>
        </View>
      );

      const renderRightContainer = () => (
        <TouchableOpacity style={style.rightView} onPress={()=>onRightClick()}>
        <Image
        source={RightImage}
        style={[Styles.RightImage,rightStyle]}
        />
        </TouchableOpacity>
      );
      const renderRightText = () => (
        <TouchableOpacity  style={style.rightView} onPress={()=>onRightClick()}>
        <Text style={{fontSize:18,fontWeight:'500',color:palette.black,fontFamily:"Roobert-Medium",...rightStyle}}>{rightText}</Text>
        </TouchableOpacity>
      );
    return (
        <View style={{...Styles.mainContainer,containerStyle}}>
            <View style={[style.containerView,containerStyle]}>
         {leftText||imageSource? renderLeftContainer():null}
         { centerImage?rendercenterImage(): renderCenterContainer()}
         {RightImage? renderRightContainer():null}
         {rightText?renderRightText():null}
         </View>
        </View>
    );
}
MainHeader.propTypes = {
    onleftClick: propTypes.func,
    onRightClick:propTypes.func,
    onPressCenterContainer: propTypes.bool,
    onPressRightContainer: propTypes.func,
    centerText: propTypes.string,
    rightText: propTypes.string,
    leftImage:propTypes.any,
    leftIconStyle:propTypes.object,
    hideBackButton: propTypes.bool,
    imageSource: propTypes.any,
    centerImage:propTypes.any,
    customStyle: propTypes.object,
    leftText:propTypes.string,
    RightImage:propTypes.any,
    containerStyle: propTypes.object,
    rightStyle:propTypes.object,
    centerTextStyle:propTypes.object,
    leftImageContainer:propTypes.object
};

export default MainHeader;