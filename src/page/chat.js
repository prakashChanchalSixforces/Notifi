import React, { useLayoutEffect, useEffect, useState, useReducer } from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  AppState,
  TextInput,
  Alert,
  Platform,
  Image,
  ImageBackground
} from 'react-native';
import { useDispatch } from 'react-redux';
import Message from '../component/message';
import { editProfile, Etc, more, ProfileUser, sentChat, stock, template } from '../asset';
import { fetchConvo, FromfetchConvo, SendMessage } from '../store/actions/Dashboard';
import MainHeader from '../component/Header/MainHeader/MainHeader';
import { formatMobileNumber } from '../utils/CommonFunctions';
import OneTimeFeesPicker from '../component/TemplateModal/TemplateModal';
import { palette } from '../theme';
import io from 'socket.io-client';
import KeyBoardAvoidingWrapper from '../component/KeyBoardAvoidingWrapper';

const socket = io('https://prod.swiftbel.com'); 





const Chat = props => {
  const { route, navigation } = props;
  const { channel } = route.params;
  const [isModal,setIsModal]=useState(false)
  const dispatchs = useDispatch()
  const [query, setQuery] = useState(null);
  const [state, dispatch] = useState({
    channel,
    messages: '',
    messageMap: {}, // redId => boolean
    loading: false,
    input: '',
    empty: '',
    error: '',
  });
  const [alldata, setAllData] = useState([])
  const [message, setMessage] = useState('')
  const [issend,setisSend]=useState(false)
  const [value,setValue]=useState({})
  // const sheetRef = React.useRef(null);
  // const snapPoints = React.useMemo(() => ["43%", "43%", modalHeight], []);

  //   const handleSheetChange = React.useCallback((index) => {
  //       console.log("handleSheetChange", index);
  //       setModalIndex(index)
  //   }, []);
  //   const handleSnapPress = React.useCallback((index) => {
  //       sheetRef.current?.snapToIndex(index);
  //   }, []);
  //   const handleSnapClose = React.useCallback((index) => {
  //       sheetRef.current?.close();
  //   }, []);
  useEffect(() => {
    init()
 } , [])
 useEffect(() => {
  // listen for incoming messages over socket

  socket.on('conversation', (msg) => {
      if(msg[0].from=== channel?.to&&msg[0].to==="+16042435773")
      {
  
    setAllData((prevMessages) => [msg[1], ...prevMessages])
  // socket.disconnect();

  }
  socket.close()
  socket.connect()
    console.log('Received message:', msg[0]);
  });
 
  return () => {
    socket.off('conversation');
    //socket.disconnect();
  };
  // return () => {
  //   // disconnect socket on unmount
  //   socket.disconnect();
  // };
}, []);

  const init = async () => {
    const res = await dispatchs(fetchConvo(channel?.to))
    const res1 = await dispatchs(FromfetchConvo(channel?.to))
    setAllData(res.data)
    const Dates = [...res.data, ...res1.data]
    Dates.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))
   
    setAllData(Dates)
  }

  const messageSubmit = async () => {
    setisSend(true)
    const data = {
      "from": "+16042435773",
      "to": channel?.to,
      "body": message
    }
    const value={
      "body":message,
      "type":"outbound-reply",
      "createdAt":new Date()
    }
    setValue(value)
    setMessage('')

    const res = await dispatchs(SendMessage(data))
    if (res.status === true) {
    //   const val=[value,...alldata]
    // setAllData(val)
    setisSend(false)
    setAllData((prevMessages) => [value, ...prevMessages])

    }
  }
  // useLayoutEffect(() => {
  //   const right = (
  //     <View style={style.headerRightContainer}>
  //       {/* <TouchableOpacity activeOpacity={0.85} style={style.headerRightButton} onPress={member}>
  //         <Icon name="people" color="#fff" size={28} />
  //       </TouchableOpacity>
  //       <TouchableOpacity activeOpacity={0.85} style={style.headerRightButton} onPress={leave}>
  //         <Icon name="directions-walk" color="#fff" size={28} />
  //       </TouchableOpacity> */}
  //     </View>
  //   );

  //   navigation.setOptions({
  //     title: createChannelName(channel),
  //     headerRight: () => right,
  //   });
  // });
  // // on state change
  // useEffect(() => {
  //   sendbird.addConnectionHandler('chat', connectionHandler);
  //   sendbird.addChannelHandler('chat', channelHandler);
  //   const unsubscribe = AppState.addEventListener('change', handleStateChange);

  //   if (!sendbird.currentUser) {
  //     sendbird.connect(currentUser.userId, (err, _) => {
  //       if (!err) {
  //         refresh();
  //       } else {
  //         dispatch({
  //           type: 'error',
  //           payload: {
  //             error: 'Connection failed. Please check the network status.',
  //           },
  //         });
  //       }
  //     });
  //   } else {
  //     refresh();
  //   }

  //   return () => {
  //     sendbird.removeConnectionHandler('chat');
  //     sendbird.removeChannelHandler('chat');
  //     unsubscribe.remove();
  //   };
  // }, []);

  // /// on query refresh
  // useEffect(() => {
  //   if (query) {
  //     next();
  //   }
  // }, [query]);

  // /// on connection event
  // const connectionHandler = new sendbird.ConnectionHandler();
  // connectionHandler.onReconnectStarted = () => {
  //   dispatch({
  //     type: 'error',
  //     payload: {
  //       error: 'Connecting..',
  //     },
  //   });
  // };
  // connectionHandler.onReconnectSucceeded = () => {
  //   dispatch({
  //     type: 'error',
  //     payload: {
  //       error: '',
  //     },
  //   });
  //   refresh();
  // };
  // connectionHandler.onReconnectFailed = () => {
  //   dispatch({
  //     type: 'error',
  //     payload: {
  //       error: 'Connection failed. Please check the network status.',
  //     },
  //   });
  // };

  // /// on channel event
  // const channelHandler = new sendbird.ChannelHandler();
  // channelHandler.onMessageReceived = (targetChannel, message) => {
  //   if (targetChannel.url === channel.url) {
  //     dispatch({ type: 'receive-message', payload: { message, channel } });
  //   }
  // };
  // channelHandler.onMessageUpdated = (targetChannel, message) => {
  //   if (targetChannel.url === channel.url) {
  //     dispatch({ type: 'update-message', payload: { message } });
  //   }
  // };
  // channelHandler.onMessageDeleted = (targetChannel, messageId) => {
  //   if (targetChannel.url === channel.url) {
  //     dispatch({ type: 'delete-message', payload: { messageId } });
  //   }
  // };
  // channelHandler.onUserLeft = (channel, user) => {
  //   if (user.userId === currentUser.userId) {
  //     navigation.navigate('Lobby', {
  //       action: 'leave',
  //       data: { channel },
  //     });
  //   }
  // };
  // channelHandler.onChannelDeleted = (channelUrl, channelType) => {
  //   navigation.navigate('Lobby', {
  //     action: 'delete',
  //     data: { channel },
  //   });
  // };

  // const handleStateChange = newState => {
  //   if (newState === 'active') {
  //     sendbird.setForegroundState();
  //   } else {
  //     sendbird.setBackgroundState();
  //   }
  // };
  // const member = () => {
  //   navigation.navigate('Member', { channel, currentUser });
  // };
  // const leave = () => {
  //   Alert.alert('Leave', 'Are you going to leave this channel?', [
  //     { text: 'Cancel' },
  //     {
  //       text: 'OK',
  //       onPress: () => {
  //         navigation.navigate('Lobby', {
  //           action: 'leave',
  //           data: { channel },
  //         });
  //       },
  //     },
  //   ]);
  // };
  // const refresh = () => {
  //   channel.markAsRead();
  //   setQuery(channel.createPreviousMessageListQuery());
  //   dispatch({ type: 'refresh' });
  // };
  // const next = () => {
  //   if (query.hasMore) {
  //     dispatch({ type: 'error', payload: { error: '' } });
  //     query.limit = 50;
  //     query.reverse = true;
  //     query.load((err, fetchedMessages) => {
  //       if (!err) {
  //         dispatch({ type: 'fetch-messages', payload: { messages: fetchedMessages } });
  //       } else {
  //         dispatch({ type: 'error', payload: { error: 'Failed to get the messages.' } });
  //       }
  //     });
  //   }
  // };
  // const sendUserMessage = () => {
  //   if (state.input.length > 0) {
  //     const params = new sendbird.UserMessageParams();
  //     params.message = state.input;

  //     const pendingMessage = channel.sendUserMessage(params, (err, message) => {
  //       if (!err) {
  //         dispatch({ type: 'send-message', payload: { message } });
  //       } else {
  //         setTimeout(() => {
  //           dispatch({ type: 'error', payload: { error: 'Failed to send a message.' } });
  //           dispatch({ type: 'delete-message', payload: { reqId: pendingMessage.reqId } });
  //         }, 500);
  //       }
  //     });
  //     dispatch({ type: 'send-message', payload: { message: pendingMessage, clearInput: true } });
  //   }
  // };
  // const selectFile = async () => {
  //   try {
  //     if (Platform.OS === 'android') {
  //       const permission = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  //       if (permission !== RESULTS.GRANTED) {
  //         const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  //         if (result !== RESULTS.GRANTED) {
  //           throw new Error('Please allow the storage access permission request.');
  //         }
  //       }
  //     } else if (Platform.OS === 'ios') {
  //       // TODO:
  //     }
  //     const result = await DocumentPicker.pick({
  //       type: [
  //         DocumentPicker.types.images,
  //         DocumentPicker.types.video,
  //        // DocumentPicker.types.audio,
  //         DocumentPicker.types.plainText,
  //        // DocumentPicker.types.zip,
  //        // DocumentPicker.types.pdf
  //       ],
  //     });

  //     const params = new sendbird.FileMessageParams();
  //     params.file = {
  //       size: result[0].size,
  //       uri: result[0].uri,
  //       name: result[0].name,
  //       type: result[0].type,
  //     };
  //     dispatch({ type: 'start-loading' });
  //     channel.sendFileMessage(params, (err, message) => {
  //       console.log(err,"error",message,params,result,params)
  //       dispatch({ type: 'end-loading' });
  //       if (!err) {
  //         dispatch({ type: 'send-message', payload: { message } });
  //       } else {
  //         setTimeout(() => {
  //           dispatch({ type: 'error', payload: { error: 'Failed to send a message.' } });
  //         }, 500);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     if (!DocumentPicker.isCancel(err)) {
  //       dispatch({ type: 'error', payload: { error: err.message } });
  //     }
  //   }
  // };
  // const viewDetail = message => {
  //   if (message.isFileMessage()) {
  //     // TODO: show file details
  //   }
  // };
  // const showContextMenu = message => {
  //   if (message.sender && message.sender.userId === currentUser.userId) {
  //     // message control
  //     // showActionSheetWithOptions(
  //     //   {
  //     //     title: 'Message control',
  //     //     message: 'You can edit or delete the message.',
  //     //     options: ['Edit', 'Delete', 'Cancel'],
  //     //     cancelButtonIndex: 2,
  //     //     destructiveButtonIndex: 1
  //     //   },
  //     //   buttonIndex => {
  //     //     switch (buttonIndex) {
  //     //       case 0: // edit
  //     //         break;
  //     //       case 1: // delete
  //     //         break;
  //     //       case 2: // cancel
  //     //         break;
  //     //     }
  //     //   }
  //     // );
  //   }
  // };
  return (
    <>
      <StatusBar barStyle="dark-content" />
     
      <SafeAreaView style={style.container}>
        <MainHeader
          leftText={true}
          onleftClick={() => navigation.goBack()}
          centerText={formatMobileNumber(channel?.to)}
        RightImage={Etc}
        />
   
        <FlatList
          data={alldata}
          inverted={true}

          renderItem={({ item, index }) => (
            <View>
 
              <Message
                {...props}
                key={index}
                channel={channel}
                message={item}
               // issend={ issend}
                

              // onPress={message => viewDetail(message)}
              // onLongPress={message => showContextMenu(message)}
              />
             
            </View>
          )}
          keyExtractor={(item,index )=> index}
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}
          ListHeaderComponent={
           (issend&& <Message
            {...props}
            key={1}
            channel={channel}
            message={value}
            issend={ issend}
            

          // onPress={message => viewDetail(message)}
          // onLongPress={message => showContextMenu(message)}
          />)
          }
          ListEmptyComponent={
            <View style={style.emptyContainer}>
              <Text style={style.empty}>{state?.empty}</Text>
            </View>
          }
          // onEndReached={() => next()}
          onEndReachedThreshold={0.5}
        />
       <KeyBoardAvoidingWrapper>
        <View style={style.inputContainer}>
          <TouchableOpacity onPress={()=>setIsModal(true)} activeOpacity={0.85} style={style.uploadButton} >
            <View style={style.bottomChatButton}>
              <Image
              source={template}
              resizeMode='contain'
              style={{width:25,height:25,tintColor:palette.purple,alignSelf:'center'}}
              />
            </View>
          </TouchableOpacity>
          <TextInput
            key={channel?.to}
            value={message}
            style={style.input}
            multiline={true}
            numberOfLines={2}
            onChangeText={content => {
              setMessage(content)
            }}
          />
          <TouchableOpacity onPress={() => messageSubmit()} activeOpacity={0.85} style={style.sendButton} >
            <Image source={sentChat} style={{ width: 28, height: 28, tintColor: message.length > 0 ? '#000000' : '#ddd', justifyContent: 'center' }} />
          </TouchableOpacity>
          {/* <BottomSheet
            ref={sheetRef}
            //enablePanDownToClose
            snapPoints={snapPoints}
            index={0}
            onChange={(index) => handleSheetChange(index)}
            enableHandlePanningGesture
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"

        >

        </BottomSheet> */}
        <OneTimeFeesPicker
        isVisible={isModal}
        OnSelected={(value)=>{
          setMessage(value)
          setIsModal(false)
        }}
        onCancel={()=>setIsModal(false)}
        />
        </View>
        </KeyBoardAvoidingWrapper>
      </SafeAreaView>
    </>
  );
};

const style = {
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
  headerRightButton: {
    marginRight: 10,
  },
  errorContainer: {
    backgroundColor: '#333',
    opacity: 0.8,
    padding: 10,
  },
  error: {
    color: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    fontSize: 24,
    color: '#999',
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: palette.lightGrey,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  height:40,
    color: '#555',
  },
  uploadButton: {
    marginRight: 10,
  },
  sendButton: {
    marginLeft: 10,
  },
  bottomChatButton: {
    height: 40,
    width: 40,
    borderRadius: 30,
    justifyContent: 'center',
    borderWidth:1,
    backgroundColor: palette.white,
    borderColor:palette.purple
  }
};

export default Chat;
