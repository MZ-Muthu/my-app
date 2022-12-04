// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let bookUserHomecare = async (id, id2) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/apply-home-care-service/${id2}/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your response successfully submited',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/homecare-services/thank-you'),
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
