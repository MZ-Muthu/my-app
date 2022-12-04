// import packages
import axios from 'axios';
import swal from 'sweetalert';

export let login = async (phone, otp) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: '/api/v1/user/verify-user',
            data: { phone, otp }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal('Success', 'You are logined successfully.', 'success');
                    return setTimeout(() => location.assign('/'), 2000);
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    return swal('Warning', err.response.data.message, 'error');
                }
                return swal(
                    'Warning',
                    'Something went wrong while processing your request.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

export let senOTP = async (phone) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/user/user-otp',
            data: { phone }
        });

        if (res.data.status === 'Success') {
            const otp = document.getElementById('otp');
            otp.value = res.data.otp;
            swal('Success', 'OTP sended successfully.', 'success');
        }
    } catch (err) {
        if (err?.response?.data?.message) {
            return swal('Warning', err.response.data.message);
        }
        console.log(err);
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};
