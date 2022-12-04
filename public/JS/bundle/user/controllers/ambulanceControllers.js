// import packages
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

export let sendNewAmbulanceQuotes = async (data) => {
    try {
        if (!data.length) {
            return swal(
                'warning',
                'Please select atleast one ambulace service',
                'error'
            );
        }
        document.cookie = `services=${JSON.stringify(data)};expires=${new Date(
            Date.now() + 1000 * 60 * 5
        )};path=/ambulance/ambulance-service/select-locations`;
        return location.assign('/ambulance/ambulance-service/select-locations');
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

// send quotes for ambulance quotes
export let requestAmbulanceQuotes = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/user/post-new-ambulance-qoute',
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your quotes send successfully.',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/ambulance/ambulance-service'),
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// cancelQuoteUser
export let cancelQuoteUser = async (id) => {
    try {
        swal({
            title: 'Are you sure?',
            text: 'Are you want perform this action?',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Are you willing to enter your description?', {
                        content: 'input'
                    })
                        .then(async (data) => {
                            await axios({
                                method: 'PATCH',
                                url: `/api/v1/user/cancel-ambulance-quotes/${id}/`,
                                data
                            })
                                .then((res) => {
                                    if (res.data.status === 'Success') {
                                        swal(
                                            'Successs',
                                            'Your status updated successfully.',
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
                                        'Something went wrong while processing your request.',
                                        'error'
                                    );
                                });
                        })
                        .catch((err) => {
                            if (err?.response?.data?.message) {
                                return swal(
                                    'Warning',
                                    err.response.data.message,
                                    'error'
                                );
                            }
                            console.log(err);
                            return swal(
                                'Warning',
                                'Something went wrong while processing your request.',
                                'error'
                            );
                        });
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    return swal('Warning', err.response.data.message, 'error');
                }
                console.log(err);
                return swal(
                    'Warning',
                    'Something went wrong while processing your request.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// update user ambulance status
export let updateUserAmbulanceStatus = async (status, id) => {
    try {
        swal({
            title: 'Are you sure?',
            text: 'Are you want perform this action?',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
            .then(async (willDelete) => {
                let obj = {};
                switch (status) {
                    case 'accepted':
                    case 'rejected':
                        obj.des = 'Are you willing to enter the description?';
                        obj.html =
                            '<input id="swalDescription" class="swal2-input" placeholder="Description">';
                        break;
                    case 'canceled':
                        willDelete = false;
                        swal(
                            'Warning',
                            "You can't perform this action on single quotes",
                            'error'
                        );
                        break;
                    case 'responded':
                    case 'completed':
                        willDelete = false;
                        swal(
                            'Warning',
                            "You can't able to perform this action from user side. Do it with vendor side.",
                            'error'
                        );
                        break;

                    default:
                        willDelete = false;
                        swal(
                            'Warning',
                            'Something went wrong. Please try valid status.',
                            'error'
                        );
                }
                if (willDelete) {
                    await Swal.fire({
                        title: obj.des,
                        html: obj.html,
                        focusConfirm: false,
                        preConfirm: () => {
                            return {
                                description:
                                    document.getElementById('swalDescription')
                                        .value
                            };
                        }
                    })
                        .then(async (value) => {
                            await axios({
                                method: 'PATCH',
                                url: `/api/v1/user/update-ambulance-quote/${status}/${id}/`,
                                data: value.value
                            })
                                .then((res) => {
                                    if (res.data.status === 'Success') {
                                        swal(
                                            'Successs',
                                            'Your status updated successfully.',
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
                                        'Something went wrong while processing your request.',
                                        'error'
                                    );
                                });
                        })
                        .catch((err) => {
                            if (err?.response?.data?.message) {
                                return swal(
                                    'Warning',
                                    err.response.data.message,
                                    'error'
                                );
                            }
                            console.log(err);
                            return swal(
                                'Warning',
                                'Something went wrong while processing your request.',
                                'error'
                            );
                        });
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    return swal('Warning', err.response.data.message, 'error');
                }
                console.log(err);
                return swal(
                    'Warning',
                    'Something went wrong while processing your request.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};
