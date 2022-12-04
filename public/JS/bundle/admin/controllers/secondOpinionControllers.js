// import packages
import axios from 'axios';
import swal from 'sweetalert';

// update personal data
export let updateOpinionDoctorStatus = async (id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/second-opinion/manage-availablity/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `Your Status updated successfully.`,
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
                    'Something went wrong while processing your reques1t.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            return swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request2.',
            'error'
        );
    }
};

// update personal data
export let updateOpinionSelectedSponser = async (id, id2) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/second-opinion/select-sponser/${id}/${id2}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `Your Status updated successfully.`,
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
                    'Something went wrong while processing your reques1t.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            return swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request2.',
            'error'
        );
    }
};

// update personal data
export let updateOpinionRequestData = async (status, id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/module-management/second-opinion/verify-sponser/${status}/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `Your Status updated successfully.`,
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
                    'Something went wrong while processing your reques1t.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            return swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request2.',
            'error'
        );
    }
};

// update personal data
export let updateSecondOpinionSchudles = async (data, id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/second-opinion/manage-slots-availablity/${id}`,
            data: { availableQuota: [data] }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `Your Slots updated successfully.`,
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
                    'Something went wrong while processing your reques1t.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            return swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request2.',
            'error'
        );
    }
};

// market product update status
export let updateSecondOpinionVendorBookingStatus = async (status, id, id2) => {
    try {
        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want update the status?',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    await axios({
                        method: 'PATCH',
                        url: `/api/v1/admin/vendor-management/second-opinion/update-booking-status/${status}/${id}/${id2}`
                    })
                        .then((res) => {
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'Booking status updated successfully. .',
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
                }
            })
            .catch((err) => {
                return setTimeout(() => location.reload(), 2000);
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
