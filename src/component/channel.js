import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import {  ellipsis } from '../utils';
import { palette } from '../theme';
import { ProfileUser } from '../asset';
import { formatMobileNumber } from '../utils/CommonFunctions';




const Channel = props => {
  const { sendbird, channel, onPress } = props;
  const [name, setName] = useState('');
  const [lastMessage, setLastMessage] = useState('Hello');
  const [unreadMessageCount, setUnreadMessageCount] = useState('');
  const [updatedAt, setUpdatedAt] = useState('2feb');

  // const channelHandler = new sendbird.ChannelHandler();
  
  // channelHandler.onChannelChanged = updatedChannel => {
  //   if (updatedChannel.url === channel.url) {
  //     updateChannelName(updatedChannel);
  //     updateLastMessage(updatedChannel);
  //     updateUnreadMessageCount(updatedChannel);
  //     updateUpdatedAt(updatedChannel);
  //   }
  // };
  // channelHandler.onUserJoined = (updatedChannel, user) => {
  //   if (updatedChannel.url === channel.url) {
  //     if (user.userId !== sendbird.currentUser.userId) {
  //       updateChannelName(updatedChannel);
  //     }
  //   }
  // };
  // channelHandler.onUserLeft = (updatedChannel, user) => {
  //   if (updatedChannel.url === channel.url) {
  //     if (user.userId !== sendbird.currentUser.userId) {
  //       updateChannelName(updatedChannel);
  //     }
  //   }
  // };

  // const updateChannelName = channel => {
  //   setName(createChannelName(channel));
  // };
  // const updateLastMessage = channel => {
  //   if (channel.lastMessage) {
  //     const message = channel.lastMessage;
  //     if (message.isUserMessage()) {
  //       setLastMessage(message.message);
  //     } else if (message.isFileMessage()) {
  //       setLastMessage(message.name);
  //     }
  //   }
  // };
  // const updateUnreadMessageCount = channel => {
  //   setUnreadMessageCount(createUnreadMessageCount(channel));
  // };
  // const updateUpdatedAt = channel => {
  //   setUpdatedAt(moment(channel.lastMessage ? channel.lastMessage.createdAt : channel.createdAt).fromNow());
  // };

  // useEffect(() => {
  //   // channel event listener
  //   sendbird.addChannelHandler(`channel_${channel.url}`, channelHandler);
  //   updateChannelName(channel);
  //   updateLastMessage(channel);
  //   updateUnreadMessageCount(channel);
  //   updateUpdatedAt(channel);
  //   return () => {
  //     sendbird.removeChannelHandler(`channel_${channel.url}`);
  //   };
  // }, []);
  const array = [palette.lightPink,palette.orange,palette.pup,palette.green,palette.purple,palette.indinRed,palette.lightGreen,'#000080','#800000'];

  function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

  return (
    <TouchableOpacity activeOpacity={0.75} style={style.container} onPress={() => onPress(channel)}>
      <View   style={[style.profileImage,{backgroundColor:getRandomItem(array)}]}>
      <Image
        source={ProfileUser}
        style={style.prfImg}
      />
       <View style={{backgroundColor:palette.pink,width:22,height:22,marginTop:10, borderRadius:6, marginHorizontal: 10,justifyContent:'center',position:'absolute',right:-13,bottom:-3,borderWidth:2,borderColor:palette.white}}>
          <Text style={{textAlign:'center',alignSelf:'center',color:palette.white,fontSize:10}}>SB</Text>
          </View>
      </View>
      <View style={style.contentContainer}>
        <Text style={[style.name]}>{formatMobileNumber(channel?.to)}</Text>
        <Text style={style.lastMessage}>{ellipsis(channel?.body.replace(/\n/g, ), channel?.body)}</Text>
      </View>
      <View style={style.propertyContainer}>
        <Text style={style.updatedAt}>{moment(channel?.createdAt).format('DD MMM')}</Text>
        {channel?.unreadMessageCount > 0 ? (
          <View style={style.unreadMessageCountContainer}>
            <Text style={style.unreadMessageCount}>{unreadMessageCount}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const style = {
  container: {
    flexDirection: 'row',
    backgroundColor: palette.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth:1,
    borderColor:palette.smokeWhite
  },
  profileImage: {
    width: 44,
    height: 44,
   
    borderRadius: 12,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 15,
    backgroundColor: palette.pup,
  },
  prfImg:{
    width: 25,
    height: 25,
    tintColor:palette.white
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    alignSelf: 'center',
    paddingBottom: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.black,
    marginBottom: 2,
  },
  lastMessage: {
    fontSize: 14,
    marginTop:1,
    color: '#999',
  },
  propertyContainer: {
    alignItems: 'center',
  },
  unreadMessageCountContainer: {
    minWidth: 20,
    padding: 3,
    borderRadius: 10,
    backgroundColor: '#742ddd',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  unreadMessageCount: {
    fontSize: 12,
    color: '#fff',
  },
  updatedAt: {
    fontSize: 12,
   fontWeight:'400',
    marginTop: 2,
    marginBottom: 4,
    color:palette.purple
  },
};

export default Channel;
