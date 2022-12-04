// import packages
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// update speak to us
export let updateSchudles = async (availableTime, index, id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/speaktous/manage-availablity/${id}`,
            data: {
                availableTime,
                index
            }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your scheduling updated successfully.',
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

// update speak to us status
export let counsilarStatusUpdate = async (status, id) => {
    try {
        await axios({
            method: 'PATCH',
            url: `/api/v1/admin/vendor-management/speaktous/update-status/${status}/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Vendor Status updated successfully.',
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
