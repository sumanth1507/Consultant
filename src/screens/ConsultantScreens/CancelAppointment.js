import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';

import {cancelAppointments} from '../../ServerApis/ConsultantApis';

const CancelAppointment = props => {
  const {navigation} = props;

  const [reason, setReason] = React.useState('');

  const cancelSlot = async () => {
    const data = {
      userEmail:props.route.params.email,
      slotId:props.route.params.slotId,
      reason:reason
    }
    const returnData = await cancelAppointments(data);
    //console.log('called',data);
  };

  return (
    <View>
      <Text>cancelAppointment</Text>
      <TextInput
        placeholder="Enter Reason"
        onChangeText={text => setReason(text)}
      />
      <Button title="cancel" onPress={cancelSlot} />
      <Button title="Back" onPress={() => navigation.navigate('Your Appointments')} />
    </View>
  );
};

export default CancelAppointment;
