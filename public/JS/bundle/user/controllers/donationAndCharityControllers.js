// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let newFundDonation = async (data, id) => {
    try {
        const don = id && `patientId=${id}`;
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/new-fund-donner?${don}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Your donation successfully submited',
                        'success'
                    );
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
            return swal('Warning', err.response.data.message, 'error');
        }
        console.log(err);

        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// Buy product
export let newProductDonation = async (data, id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/new-product-donner/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Your donation successfully submited',
                        'success'
                    );
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
            return swal('Warning', err.response.data.message, 'error');
        }
        console.log(err);

        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// bulk product donation
export let newBulkProductDonner = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/new-product-donner/`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Your donation successfully submited',
                        'success'
                    );
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
            return swal('Warning', err.response.data.message, 'error');
        }
        console.log(err);

        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// product donation requester
export let newProductDonationRequester = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/new-product-donation-requester`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your donation request submited',
                        'success'
                    );
                    return setTimeout(() => location.reload(), 2000);
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
            return swal('Warning', err.response.data.message, 'error');
        }
        console.log(err);

        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// product donation requester
export let newFundDonationRequester = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/new-donation-requester`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your donation request submited',
                        'success'
                    );
                    return setTimeout(() => location.reload(), 2000);
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
            return swal('Warning', err.response.data.message, 'error');
        }
        console.log(err);

        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};
