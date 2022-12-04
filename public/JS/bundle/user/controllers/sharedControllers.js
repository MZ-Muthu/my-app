// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let addNewAddress = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/new-address/`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return location.reload();
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

// update addresss
export let deleteAddress = async (id) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/user/address/delete-my-address/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return location.reload();
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

// Buy product
export let addNewMember = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/add-member/`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return location.reload();
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
