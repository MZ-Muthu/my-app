// import packages
import axios from 'axios';
import swal from 'sweetalert';

// request new quotes
export let newProductQuote = async (
    productName,
    productDescription,
    quantity,
    from
) => {
    try {
        await axios({
            method: 'POST',
            url: `/api/v1/quotes/${from}/request-quotes`,
            data: [{ productName, productDescription, quantity }]
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal('Success', 'Your quote send successfully', 'success');
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

// cancel a quote
export let cancelAQuotes = async (id, from) => {
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
                        url: `/api/v1/quotes/${from}/cancel-quote/${id}`
                    })
                        .then((res) => {
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'This quote was successfully canceled.',
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

// respond quotes
export let updateQuotes = async (userResponse, id, from) => {
    try {
        swal({
            title: 'Are you sure?',
            text: 'You want perform this action.',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
            .then(async (willDelete) => {
                swal(
                    `Description about your ${userResponse}: ${
                        userResponse === 'negotiate'
                            ? '(Note : If you send multiple negotiate before vendor replay, Your last negotiation details will only show the vendor)'
                            : ''
                    }`,
                    {
                        content: 'input'
                    }
                )
                    .then(async (value) => {
                        await axios({
                            method: 'PATCH',
                            url: `/api/v1/quotes/${from}/update-quote-status/${userResponse}/${id}`,
                            data: { cause: value }
                        })
                            .then((res) => {
                                if (res.data.status === 'Success') {
                                    swal(
                                        'Success',
                                        'Your response successfully submited',
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
                        return swal(
                            'Warning',
                            'Something went wrong while processing your request.',
                            'error'
                        );
                    });
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
