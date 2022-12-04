// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let selectLaboratories = async (data) => {
    try {
        document.cookie = `umlcssId=${data};expires=${new Date(
            Date.now()
        )};path=/`;
        return location.assign(`/laboratorys/lists?services=${data}`);
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
export let laboratoriesCheckout = async (data, date, id) => {
    try {
        document.cookie = `lbbslId=${data};expires=${new Date(
            Date.now()
        )};path=/`;
        document.cookie = `lbbddId=${date};expires=${new Date(
            Date.now()
        )};path=/`;
        document.cookie = `lbblbId=${id};expires=${new Date(
            Date.now()
        )};path=/`;
        return location.assign(`/laboratorys/checkout/`);
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

// update pharmacy cart
export let placeLaboratoryOrder = async (id) => {
    try {
        let [data] = await Promise.all([
            document.cookie.split('; ').map((el) => el.split('='))
        ]);
        data = new Map(data);
        data = Object.fromEntries(data);
        console.log(data);
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/laboratory/book-laboratory/${data.lbblbId}`,
            data: {
                services: data.lbbslId.split(','),
                date: data.lbbddId,
                address: id
            }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Booking successfully Successfully.',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/laboratory/thank-you'),
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
