// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let newBloodDonner = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/blood-donation/new-blood-donner`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Donner created Successfully.',
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

// new blood request
export let newBloodRequest = async (data, elId) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/blood-donation/new-blood-requester`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    elId.reset();
                    return swal(
                        'Success',
                        `Your request send to all ${data.bloodGroup}donners,near 20KM radius.`,
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

// new send indidvidual reaeust
export let sendIndividualBloodRequest = async (id, id2) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/blood-donation/send-blood-request/${id}/${id2}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    elId.reset();
                    return swal(
                        'Success',
                        `You request submited successfully.`,
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

// new send indidvidual reaeust
export let sendBloodRequestStatus = async (data) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/user/blood-donation/update-blood-requester/${data}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `You request submited successfully.`,
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

// new request from others
export let updateBloodRequestFromOtherUser = async (data, id, id2) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/user/blood-donation/update-my-requests/${data}/${id2}/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `You request submited successfully.`,
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

export let verifyBloodRequesters = async (id) => {
    try {
        swal('Please enter the verification code.', {
            content: 'input'
        }).then(async (value) => {
            if (!value) {
                return swal(
                    'Warning',
                    'Verification code should be included.',
                    'error'
                );
            }
            await axios({
                method: 'PATCH',
                url: `/api/v1/user/blood-donation/verify-blood-donnar/${id}/${value}`
            })
                .then((res) => {
                    if (res.data.status === 'Success') {
                        swal(
                            'Successs',
                            'Your status updated successfully.',
                            'success'
                        );
                        return setTimeout(() => location.reload(), 2000);
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
