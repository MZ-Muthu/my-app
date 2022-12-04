// import packages
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// Buy product
export let addPharmacyCart = async (id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/pharmacy/add-to-cart/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Cart Added Successfully.',
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

// update pharmacy cart
export let updatePharmacyCart = async (data, id) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/user/pharmacy/update-cart/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Cart Updated Successfully.',
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

// update pharmacy cart
export let placePharmacytOrder = async (id) => {
    try {
        let [data] = await Promise.all([
            document.cookie.split('; ').map((el) => el.split('='))
        ]);
        data = new Map(data);
        const form = new FormData();
        data = Object.fromEntries(data);
        form.append('medicines', JSON.parse(data.ppofcId));
        data = JSON.parse(data.ppollId);
        form.append('location', data.location);
        form.append('type', data.type);
        console.log(data.type);
        if (data.type === 'prescription') {
            await Swal.fire({
                title: 'Upload Prescription!!',
                html: `<input id="swalFile" type=file class="swal2-input" placeholder="Description">`,
                focusConfirm: false,
                preConfirm: () => {
                    form.append(
                        'prescription',
                        document.getElementById('swalFile').files[0]
                    );
                }
            });
        }

        await axios({
            method: 'POST',
            url: `/api/v1/user/pharmacy/pharmacy-availablity/${id}`,
            data: form
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your request submited Successfully.',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/pharmacy/thank-you'),
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

        return swal(
            'Warning',
            'Something went wrong while processing your request.',
            'error'
        );
    }
};

// place pharmcy product
export let placePharmacyCartOrder = async (data) => {
    try {
        document.cookie = `ppofcId=${JSON.stringify(data)};expires=${new Date(
            Date.now()
        )};path=/`;
        return location.assign('/pharmacy/checkout');
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
