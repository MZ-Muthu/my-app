// import packages
import axios from 'axios';
import swal from 'sweetalert';

// send quotes for ambulance quotes
export let getHearinaAidProductPrice = async (data, dom) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/hearingaid/get-product-data',
            data
        })
            .then(async (res) => {
                if (res.data.status === 'Success') {
                    const elId = document.getElementById('hearingAidPrice');
                    const imgid = document.getElementById(
                        'hearingaid_image_slide'
                    );
                    const price = res.data.docs.size;
                    let html = '';
                    if (price.discountPrice) {
                        html = `
                        <h5 class="fw-bold">Rs.${price.discountPrice}
                            <small class="ms-2 text-secondary">
                                <del>Rs.${price.price}</del>
                            </small>
                        </h5>
                        `;
                    } else {
                        html = `
                        <h5 class="fw-bold">Rs.${price.price}
                        </h5>
                        `;
                    }

                    document.getElementById('hearingProductColor').innerText =
                        res.data.docs.color;
                    await Promise.all(
                        [...dom].map((el) => {
                            if (el.dataset.img === data.color) {
                                el.classList.add('Active-color');
                            } else el.classList.remove('Active-color');
                        })
                    );
                    const slide = `
                        <img class="product-big-image" id="main-img" src=${
                            res.data.docs.imageGallery[0]
                        } />
                        <div class="row mt-4">
                            ${res.data.docs.imageGallery
                                .map(
                                    (el, index) => `
                             <div class="col">
                                <img
                                    class="market_subImage product-small-image ${
                                        index === 0 && 'active-small-image'
                                    }"
                                    src=${el}
                                    style="width: 86px;"
                                    alt="product image"
                                />
                            </div>
                            `
                                )
                                .join(
                                    ''
                                )}                                                  
                        </div>
                        `;
                    imgid.innerHTML = slide;
                    elId.innerHTML = html;
                    const imgdom =
                        document.querySelectorAll('.market_subImage');
                    [...imgdom].map((el, index) => {
                        el.addEventListener('click', (e) => {
                            e.preventDefault();
                            const elId = document.getElementById('main-img');
                            [...imgdom].map((els, ins) => {
                                if (index === ins)
                                    els.classList.add('active-small-image');
                                else els.classList.remove('active-small-image');
                            });

                            return (elId.src = e.target.src);
                        });
                    });
                    console.log(document.getElementById('hearinagaid_details'));
                    return (document.getElementById(
                        'hearinagaid_details'
                    ).innerHTML = `
                        <option disabled>--size--</option>
                        ${res.data.docs.sizeList
                            .map((el) => {
                                console.log(el);
                                if (el.size === res.data.docs.size.size) {
                                    return `<option value=${el.hiwhaicscpID} selected>${el.size}</option>`;
                                } else
                                    return `<option value=${el.hiwhaicscpID}>${el.size}</option>`;
                            })
                            .join('')}
                        
                        `);
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// Buy product
export let hearingaidProductCheckout = async (data, id) => {
    try {
        document.cookie = `haidpdId=${JSON.stringify(data)};expires=${new Date(
            Date.now()
        )};path=/`;
        return location.assign('/hearing-aid/checkout');
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

// Buy product
export let hearingaidProductOrder = async (id2) => {
    let [data] = await Promise.all([
        document.cookie.split('; ').map((el) => el.split('='))
    ]);
    // data = JSON.parse(data);
    data = new Map(data);
    data = Object.fromEntries(data);
    data = JSON.parse(data.haidpdId);
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/order-hearingaid/${data.id}/${id2}`,
            data: {
                quantity: data.quantity,
                color: data.color,
                size: data.size
            }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your response successfully submited',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/differently-abled/thank-you'),
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

// Buy product
export let bookHearingAidHospital = async (date) => {
    let [data] = await Promise.all([
        document.cookie.split('; ').map((el) => el.split('='))
    ]);
    // data = JSON.parse(data);
    data = new Map(data);
    data = Object.fromEntries(data);
    data = data.bhidhId;
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/book-hearingaid-hosptial/${data}`,
            data: {
                date
            }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your response successfully submited',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/hearin-aid/thank-you'),
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

// cancel a hearing aid
export let cancelHearingAidOrder = async (id) => {
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
                        url: `/api/v1/user/cancel-hearingaid/${id}/`
                    })
                        .then((res) => {
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'You order canceled successfyll.',
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
                                'Something went wrong while processing your request3.',
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
                    'Something went wrong while processing your request2.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request1.',
            'error'
        );
    }
};

// cancel a hearing aid bookings
export let cancelHearingAidBookings = async (id) => {
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
                        url: `/api/v1/user/cancel-hearingaid-hospital/${id}/`
                    })
                        .then((res) => {
                            if (res.data.status === 'Success') {
                                swal(
                                    'Successs',
                                    'You booking canceled successfylly.',
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
                                'Something went wrong while processing your request3.',
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
                    'Something went wrong while processing your request2.',
                    'error'
                );
            });
    } catch (err) {
        if (err?.response?.data?.message) {
            swal('Warning', err.response.data.message, 'error');
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request1.',
            'error'
        );
    }
};
