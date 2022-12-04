// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let differentlyAbledCheckout = async (data, id) => {
    try {
        document.cookie = `dsadpId=${id};expires=${new Date(
            Date.now()
        )};path=/`;
        document.cookie = `dsadpQt=${data};expires=${new Date(
            Date.now() + 1000 * 60 * 5
        )};path=/`;
        return location.assign('/differently-abled/checkout');
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
export let differentlyAbledPlaceOrder = async (id2) => {
    let [data] = await Promise.all([
        document.cookie.split('; ').map((el) => el.split('='))
    ]);
    data = new Map(data);
    data = Object.fromEntries(data);
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/order-differently-abled/${data.dsadpId}/${id2}`,
            data: { quantity: data.dsadpQt }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your response successfully submited',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/differently-abled/thank-you'),
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

// cancel a hearing aid bookings
export let cancelDifferentlyAbledOrder = async (id) => {
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
                        url: `/api/v1/user/cancel-differently-abled/${id}/`
                    })
                        .then((res) => {
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'You booking canceled successfylly.',
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