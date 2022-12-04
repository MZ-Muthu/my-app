// import packages
import axios from 'axios';
import swal from 'sweetalert';

// send quotes for ambulance quotes
export let getMarketProductPrice = async (data, dom) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/market/get-product-data',
            data
        })
            .then(async (res) => {
                if (res.data.status === 'Success') {
                    if (res.data.docs.productType === 'colorOnly') {
                        const elId = document.getElementById('marketPrices');
                        const imgid =
                            document.getElementById('market_image_slide');

                        const price = res.data.docs.color.subDetails[0];
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
                        document.getElementById(
                            'marketProductColor'
                        ).innerText = res.data.docs.color.color;
                        await Promise.all(
                            [...dom].map((el) => {
                                if (el.dataset.img === data.color) {
                                    el.classList.add('Active-color');
                                } else el.classList.remove('Active-color');
                            })
                        );
                        const slide = `
                        <img class="product-big-image" id="main-img" src=${
                            res.data.docs.color.imageGallery[0]
                        } />
                        <div class="row mt-4">
                            ${res.data.docs.color.imageGallery
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
                                const elId =
                                    document.getElementById('main-img');
                                [...imgdom].map((els, ins) => {
                                    if (index === ins)
                                        els.classList.add('active-small-image');
                                    else
                                        els.classList.remove(
                                            'active-small-image'
                                        );
                                });

                                return (elId.src = e.target.src);
                            });
                        });
                    } else if (res.data.docs.productType === 'sizeOnly') {
                        const elId = document.getElementById('marketPrices');
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
                        return (elId.innerHTML = html);
                    } else if (res.data.docs.productType === 'colorWithSize') {
                        const elId = document.getElementById('marketPrices');
                        const imgid =
                            document.getElementById('market_image_slide');
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

                        document.getElementById(
                            'marketProductColor'
                        ).innerText = res.data.docs.color;
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
                                const elId =
                                    document.getElementById('main-img');
                                [...imgdom].map((els, ins) => {
                                    if (index === ins)
                                        els.classList.add('active-small-image');
                                    else
                                        els.classList.remove(
                                            'active-small-image'
                                        );
                                });

                                return (elId.src = e.target.src);
                            });
                        });
                        return (document.getElementById(
                            'market_color_wih_size'
                        ).innerHTML = `
                        <option disabled>--size--</option>
                        ${res.data.docs.sizeList
                            .map((el) => {
                                if (el.size === res.data.docs.size.size) {
                                    return `<option value=${el.hiwmmpdssID} selected>${el.size}</option>`;
                                } else
                                    return `<option value=${el.hiwmmpdssID}>${el.size}</option>`;
                            })
                            .join('')}
                        
                        `);
                    }
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

// send quotes for ambulance quotes
export let marketAddNewCart = async (data, id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/add-to-cart/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Your cart added successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// add new wishlist
export let marketAddNewWishList = async (id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/add-to-wishlist/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return swal(
                        'Success',
                        'Your wishlist added successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// Buy product
export let marketBuyProduct = async (data, id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/product-to-checkout/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return location.assign('/medical-market/checkout');
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// place order
export let marketPlaceOrder = async (id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/order-product/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your order placed successfully.',
                        'success'
                    );
                    return setTimeout(
                        () => location.assign('/medical-market/shop'),
                        2000
                    );
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    return swal('Warning', err.response.data.message, 'error');
                }

                return swal(
                    'warning',
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

// update cart
export let updateMarketCart = async (data, id) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/user/market/product/update-cart/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your cart updated successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// delete cart
export let deleteMarketCart = async (id) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/user/market/product/delete-cart/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your cart deleted successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// delete wishlist
export let deleteMarketWishlist = async (id) => {
    try {
        const res = await axios({
            method: 'DELETE',
            url: `/api/v1/user/market/product/delete-wishlist/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your wishlist deleted successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// cancel medical market order
export let cancelMedicalMarketOrders = async (id) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/user/market/product/cancel-order/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your order canceled successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// order product from crats
export let orderProducFromMarketCart = async (ids) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/cart-to-checkout/`,
            data: { ids }
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return location.assign('/medical-market/checkout');
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// move wihlist to cart
export let moveWishlistToCartInMarket = async (id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/wishlist-to-cart/${id}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    return location.assign('/medical-market/my-cart');
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// request new quotes
export let newUserProductQuote = async (data, id) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/api/v1/user/market/product/request-quote/${id}`,
            data
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    swal(
                        'Success',
                        'Your quotes sended successfully.',
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
            return swal('Warning', err.response.data.message);
        }
        return swal(
            'Warning',
            'Something went wrong while processing your request.'
        );
    }
};

// cancel a user quote
export let cancelAUserQuotes = async (id) => {
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
                        url: `/api/v1/user/market/product/cancel-quote/${id}/`
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

// respond quotes
export let updateUserQuotes = async (userResponse, id) => {
    try {
        swal({
            title: 'Are you sure?',
            text: 'You want perform this action.',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
            .then(async (willDelete) => {
                if (willDelete)
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
                                url: `/api/v1/user/market/product/update-quote-status/${id}`,
                                data: { cause: value, status: userResponse }
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
