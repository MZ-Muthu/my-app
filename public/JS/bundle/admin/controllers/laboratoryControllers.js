// import packages
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// manage laboratory services
export let manageLaboratoryTest = async (data, type, id, id2) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/laboratory/manage-laboratory-tests/${type}/${id}?serviceId=${id2}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your Laboratory Test updated successfully.',
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
        console.log(err);
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

// mange laboratory service
export let createNewLaboratoryFacilities = async (data, type, id, id2) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/laboratory/manage-laboratory-facilities/${type}/${id}/?serviceId=${id2}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your Laboratory Test updated successfully.',
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
        console.log(err);
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

// hospital room images
export let addLaboratoryImages = async (data, id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/laboratory/add-laboratory-images/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Laboratory images updated successfully.',
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
        console.log(err);
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

// hospital delete images
export let removeLaboratoryImages = async (data, id) => {
    data = data.slice(data.lastIndexOf('/') + 1);
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/laboratory/remove-laboratory-images/${id}/${data}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        `Your image deleted Successfull.`,
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
        console.log(err);
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

// update option hospital booking status
export let updateLaboratoryBooking = async (status, form, id, id2) => {
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
                        obj.des = 'Please select the schedule time!!!';
                        obj.html =
                            '<input id="swaltscheduletime" type="time"  class="swal2-input">' +
                            '<input id="swalDescription" class="swal2-input" placeholder="Description">';
                        break;

                    case 'rejected':
                    case 'not-arrived':
                        obj.des = 'Do you want short description?';
                        obj.html =
                            '<input id="swalDescription" class="swal2-input" placeholder="Description">';
                        break;
                    case 'completed':
                        obj.des = 'Upload Lab Report!';
                        obj.html = `
                        <input id="swalFile" type=file class="swal2-input" placeholder="Description">
                        <input id="swalDescription" class="swal2-input" placeholder="Description">
                            `;
                        break;
                    default:
                        willDelete = false;
                        swal(
                            'Warning',
                            'Something went wrong. Please try valid method.',
                            'error'
                        );
                }
                if (willDelete) {
                    await Swal.fire({
                        title: obj.des,
                        html: obj.html,
                        focusConfirm: false,
                        preConfirm: () => {
                            if (status === 'accepted') {
                                form.append(
                                    'description',
                                    document.getElementById('swalDescription')
                                        .value
                                );
                                form.append(
                                    'time',
                                    document.getElementById('swaltscheduletime')
                                        .value
                                );
                            } else if (status === 'completed') {
                                form.append(
                                    'description',
                                    document.getElementById('swalDescription')
                                        .value
                                );

                                form.append(
                                    'image',
                                    document.getElementById('swalFile').files[0]
                                );
                            } else {
                                form.append(
                                    'description',
                                    document.getElementById('swalDescription')
                                        .value
                                );
                            }
                        }
                    })
                        .then(async (value) => {
                            await axios({
                                method: 'PATCH',
                                url: `/api/v1/admin/vendor-management/laboratory/update-laboratory-booking-status/${status}/${id}/${id2}`,
                                data: form
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

// market product update status
export let cancelUserLaboratoryBookings = async (id, id2) => {
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
                        url: `/api/v1/admin/user-management/laboratory/cancel-laboratory-booking/${id}/${id2}`
                    })
                        .then((res) => {
                            console.log(res.data);
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'Order status updated successfully. .',
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
