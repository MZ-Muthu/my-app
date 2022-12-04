// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let meetTheExpertCheckout = async (data) => {
    try {
        document.cookie = `emscrId=${data};expires=${new Date(
            Date.now()
        )};path=/`;
        return location.assign(`/meet-the-experts/checkout`);
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

// update pharmacy cart
export let bookMeetTheExpert = async (id) => {
    try {
        let [data] = await Promise.all([
            document.cookie.split('; ').map((el) => el.split('='))
        ]);
        data = new Map(data);
        data = Object.fromEntries(data);
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/book-expert/${data.emscrId}/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Booking successfully Successfully.',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/meet-the-experts/thank-you'),
                        2000
                    );
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    return swal('Warning', err.response.data.message, 'error');
                }
                return swal(
                    'Warning',
                    'Something went wrong while processing your request2.',
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
            'Something went wrong while processing your request1.',
            'error'
        );
    }
};

// cancel a user quote
export let cancelMeetTheExpert = async (id) => {
    try {
        swal({
            title: 'Are you sure?',
            text: "Once you canceled this quuote you wont't able to resume it!",
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    await axios({
                        method: 'PATCH',
                        url: `/api/v1/user/cancel-expert-booking/${id}/`
                    })
                        .then((res) => {
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'You booking canceled successfyll.',
                                    'success'
                                );
                                return setTimeout(
                                    () => location.reload(),
                                    2000
                                );
                            }
                        })
                        .catch((err) => {
                            if (err?.response?.data?.message) {
                                return swal(
                                    'Warning',
                                    err.response.data.message,
                                    'error'
                                );
                            }
                            return swal(
                                'Warning',
                                'Something went wrong while processing your request3.',
                                'error'
                            );
                        });
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    return swal('Warning', err.response.data.message, 'error');
                }
                return swal(
                    'Warning',
                    'Something went wrong while processing your request2.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request1.',
            'error'
        );
    }
};
