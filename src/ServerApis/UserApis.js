import instance from '../config/axiosConfig';

export const userAuth = async user => {
  try {
    const userData = await instance.post('user/auth', user);
    console.log(userData);
    return userData;
  } catch (e) {
    console.log(e);
  }
};

export const userCreate = async user => {
  //console.log('Apis create Call', user);
  const userData = await instance.post('user/create', user);
  //console.log(userData.data);
  return userData.data;
};

export const userLogout = async () => {
  const userData = await instance.post('user/logout');
  console.log(userData);
};

export const getConsultantSlots = async doctorEmail => {
  try {
    console.log('Apsi call ', doctorEmail);
    const slotsData = await instance.get('user/getConsultantSlots', {
      params: {doctorEmail},
    });
    const data = slotsData.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getuserDetails = async () => {
  try {
    const userData = await instance.get('user/getProfile');
    //console.log(userData.data);
    return userData.data;
  } catch (e) {
    console.log(e);
  }
};

export const userBookAppointment = async bookingDetails => {
  try {
    console.log("Api Data : ",bookingDetails);
    const bookingData = await instance.post(
      'user/bookAppointment',
      bookingDetails,
    );
    console.log(bookingData.data);
    return bookingData.data;
  } catch (e) {
    console.log(e);
  }
};

export const userSignup = async user => {
  try {
    console.log(user);
    //const userData = await instance.post('user/create', user);
    //console.log(userData.data);
    return userData.data;
  } catch (e) {
    console.log(e);
  }
};

export const forgetPass = async user => {
  try {
    console.log('Api call ', user);
    const returnData = await instance.post('user/forgetPassowrd', user);
    console.log(returnData.data);
    return returnData.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMyAppointments = async () => {
  try {
    const appointmentsData = await instance.get('user/MyAppointments');
    //console.log('api data : ', appointmentsData.data);
    return appointmentsData.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateSlot = async (slot) => {
  try {
    const returnData = await instance.post('user/updateSlot', slot);
    //console.log(returnData.data);
    return returnData.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateProfile = async (user) => {
  try {
    const returnData = await instance.post('user/updateProfile', user);
    //console.log(returnData.data);
    return returnData.data;
  } catch (e) {
    console.log(e);
  }
}
