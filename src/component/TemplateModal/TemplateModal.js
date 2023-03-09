import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, Platform, TouchableOpacity, Image,KeyboardAvoidingView } from 'react-native';
import styles from './style'
import { chevrondown } from '../../assets';
import { palette } from '../../theme';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { Cross } from '../../asset';
const OneTimeFeesPicker = (props) => {
  const dispatch=useDispatch();
  const [isPickerShow, setIsPickerShow] = useState(true);
  const [onFocus, setOnFocus] = useState(false);
  const [text,setText]=useState('')
  const [fees,setFees]=useState('')
  const showPicker = () => {
    setIsPickerShow(true);
  };
  const onChange = (value) => {
    props.onChange(value)
    console.log(value, "value")
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
      setOnFocus(false)
    }
  };
  const onselect = async(date) => {
    setIsPickerShow(false)
    setOnFocus(false)
    props.OnSelected(date) ? props.OnSelected(date) : null;
  }
  const onCancel = () => {
    props.onCancel();
    setIsPickerShow(false);
    setOnFocus(false)
  }
  
  const array=[
      `Thanks for reaching out to SwiftBel Moving.Someone from SwiftBel will reach out to you in next 2 hours. In the meantime, checkout www.swiftbel.com/moving and calculate your estimate.`,
      "Hello Customer Support we have now processed your documents and would like to move you on to the next step. Drop me a message. prakash@swiftbel.com.",
      "Hello Customer Support we have a new product out which may be of interest to your business. Drop me a message. prakash@swiftbel.com.",
      "Hi, Customer Support. Just to confirm I am on my way to your office.",

  ]
  const renderPickerIOS = () => {

    const renderOptionList = () => {
      return (
        <View style={[styles.overlayStyle, props.overlayStyle]}>
       
          <View style={[styles.optionContainer, props.optionContainer]}>
          <View style={{ height: 60,width:'100%', justifyContent: 'space-between', alignItems: 'flex-start', paddingLeft: 15, flexDirection: 'row',borderBottomWidth:1,borderColor:palette.lightGrey }}>
                        <TouchableOpacity onPress={() => props.onCancel()} style={{ alignSelf: 'center' }}>
                            <Image
                                source={Cross}
                                resizeMode='contain'
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.modatHeaderText}>{"Templates"}</Text>
                        <View>
                           

                        </View>
                    </View>
            
                    {
                                array.map((item)=>
                                <View>
                                    <TouchableOpacity onPress={()=>onselect(item)} style={{width:'90%',justifyContent:'center',alignSelf:'center',borderWidth:1,padding:15,borderRadius:15,marginTop:15,borderColor:palette.pup}}>
                                        <Text style={{fontSize:16,color:palette.pup}}>{item}</Text>
                                    </TouchableOpacity>
                                </View>
                                )
                            }
          </View>
         
        </View>
      )
    }
    return <View>
      
      <Modal
      avoidKeyboard={true}
        transparent
        visible={props.isVisible}
        statusBarTranslucent={true}
        //coverScreen={true}
        animationType={"slide"}>
        {renderOptionList()}
      </Modal>
    </View>
  }
  return (
    <View style={props.PickerContainerStyle} >
   
      {renderPickerIOS()}

    </View>
  );
};
OneTimeFeesPicker.defaultProps = {
    isVisible:false,
  data: [],
  value: '',
  onChange: () => { },
  headerName: '',
  onCancel: () => { },
  OnSelected: () => { },
  modalHeader: ''
}
export default OneTimeFeesPicker;
