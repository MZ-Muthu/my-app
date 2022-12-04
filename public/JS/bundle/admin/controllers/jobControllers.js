// import packages
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// manage equipmnet images
export let createNewJobCategories = async (data) => {
    try {
        await axios({
            method: 'POST',
            url: `/api/v1/admin/module-management/job/create-job-categories`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your job categorie created Successfully',
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
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// update job categhories
export let updateJobCategories = async (data, id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/module-management/job/manage-job-categories/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Your job categorie updated Successfully',
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
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// create controllers
// post new job
export let postNewJob = async (data, id, from) => {
    try {
        await axios({
            method: 'POST',
            url: `/api/v1/admin/vendor-management/jobportal/post-new-job/${from}/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal('Success', 'Your job posted successfully.', 'success');
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
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};
// update job
export let updateMyJob = async (data, id, id2, from) => {
    console.log(data);
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/jobportal/update-job/${from}/${id}/${id2}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your job updated successfully.',
                        'success'
                    );
                    return setTimeout(
                        () =>
                            window.location.replace(
                                `/admin/vendor-management/vendor-details/${from}/${id}/jobs`
                            ),
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
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// post new user job
export let postNewUserJob = async (data, id) => {
    try {
        await axios({
            method: 'POST',
            url: `/api/v1/admin/user-management/jobportal/post-new-job/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal('Success', 'Your job posted successfully.', 'success');
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
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};
// update job
export let updateNewUserJob = async (data, id, id2) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/user-management/jobportal/update-job/${id}/${id2}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your job updated successfully.',
                        'success'
                    );
                    return setTimeout(
                        () =>
                            window.location.replace(
                                `/admin/user-management/jobportal/${id}/posted-jobs`
                            ),
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
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};
