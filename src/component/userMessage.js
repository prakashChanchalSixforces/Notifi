import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import { withAppContext } from '../context';


import { useSelector,useDispatch} from 'react-redux';
import { ProfileUser } from '../asset';
import { palette } from '../theme';
const UserMessage = props => {
  const dispatch=useDispatch();
  const { channel,key, message,issend,dataLength } = props;
  const isMyMessage = message?.type === "inbound";
  const profileData = useSelector(state => state.Profile)
  console.log(key,dataLength,"elel")
  return (
    <TouchableOpacity
      activeOpacity={0.75}
     // onPress={() => onPress(message)}
     // onLongPress={() => onLongPress(message)}
      style={{
        ...style.container,
        flexDirection: message?.type!=="inbound" ? 'row-reverse' : 'row',
      }}
    >
      {(
         message?.type==="inbound"?
      <View style={style.profileImageContainer}>
        
         
          <Image source={ProfileUser} style={style.profileImage} /></View>:
          <View style={{backgroundColor:palette.pink,width:35,height:35,marginTop:10, borderRadius:10, marginHorizontal: 10,justifyContent:'center'}}>
          <Text style={{textAlign:'center',alignSelf:'center',color:palette.white}}>SB</Text>
          </View>
        )}
      
      <View style={{ ...style.content, alignItems: message?.type!=="inbound" ? 'flex-end' : 'flex-start',}}>
       
        <View style={{ ...style.messageBubble, backgroundColor: message?.type!=="inbound" ? palette.purple : palette.smokeWhite,paddingRight:message?.type==="inbound"?15:null,paddingLeft:message?.type!=="inbound"?15:null  }}>
          <Text style={{ ...style.message, color: message?.type!=="inbound"  ? '#fff' : '#333',textAlign: message?.type!=="inbound" ? 'right' : 'left', }}>{message.body}</Text>
          <Text style={{...style.readReceipt,textAlign: message?.type!=="inbound" ? 'right' : 'left',color:message?.type!=="inbound"?'#ffffff':palette.blue }}>{moment(message.createdAt).format('hh:mm A')}</Text>
        </View>
      </View>
      <View style={{ ...style.status, alignItems: message?.type!=="inbound"  ? 'flex-end' : 'flex-start' }}>
        {issend === true && (
          <Progress.Circle size={12} indeterminate={true} indeterminateAnimationDuration={800} color="#999" />
        )}
        {/* {message.sendingStatus === 'succeeded' && readReceipt > 0 && (
          <Text style={style.readReceipt}>{readReceipt}</Text>
        )} */}
        {/* <Text style={style.updatedAt}>{moment(message.createdAt).fromNow()}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const style = {
  container: {
    paddingHorizontal: 4,
    marginVertical: 5,
  },
  profileImageContainer: {
    width:35,height:35,
    marginHorizontal: 12,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:palette.pup,
    borderRadius: 10,
    marginTop:5,
  },
  profileImage: {
  
   
    width: 20,
    height: 20,
    borderWidth: 0,
    borderRadius: 16,
   
    tintColor:palette.white
  },
  content: {
    alignSelf: 'center',
    marginHorizontal: 4,
  },
  nickname: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#888',
    marginHorizontal: 8,
  },
  messageBubble: {
    maxWidth: 240,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 2,
  },
  message: {
    fontSize: 16,
  },
  status: {
    alignSelf: 'flex-end',
    marginHorizontal: 3,
    marginBottom: 3,
  },
  readReceipt: {
    marginTop:5,
    fontSize: 10,
    color: '#f89',
  },
  updatedAt: {
    fontSize: 12,
    color: '#999',
  },
};

export default withAppContext(UserMessage);
