// import packages
import axios from 'axios';
import swal from 'sweetalert';

// Buy product
export let getHospitalPakcages = async (id, id2, id3) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `/api/v1/hospital/package/get-package-details/${id}/${id2}/${id3}`
        })
            .then((res) => {
                if (res.data.status === 'Success') {
                    const li = [];
                    const data = [];
                    res.data.docs.map((el, index) => {
                        const html = `                    
                                    <li class="nav-item border rounded" role="presentation">
                                        <button class="nav-link inside-nav fw-bold ${
                                            index === 0 && 'active'
                                        }" id="pills-${index}-tab" data-bs-toggle="pill" data-bs-target="#pills-${index}" type="button" role="tab" aria-controls="pills-${index}" aria-selected="false" tabindex="-1">${
                            el.packageName
                        }
                                        </button>
                                    </li>
                `;
                        const html2 = `
                        <div class="tab-pane fade false ${
                            index === 0 && 'active'
                        } show" id="pills-${index}" role="tabpanel" aria-labelledby="pills-${index}-tab">
                            <div>
                                <h5 class="mt-4 main-color text-uppercase fw-bold">Packages Details</h5>
                                <div class="small-shdow rounded">
                                    <div class="d-flex justify-content-between">
                                        <div><h5 class="fw-bold mt-3 ms-3">${
                                            el.packageName
                                        } Health check Package</h5></div>
                                        <div><p class="package-price">Rs.${
                                            el.price
                                        }</p></div>
                                    </div>
                                    <div class="p-3">
                                        <p>Recommended To :<span class="text-secondary">Age &gt;${
                                            el.recommendAge
                                        } years for all</span></p>
                                        <p class="text-secondary">This is very helpfull so use it.</p>
                                        ${el.serviceList
                                            .map(
                                                (els) =>
                                                    `  <div class="mt-3">
                                                        <h6 class="text-uppercase">${
                                                            els.serviceTitle
                                                        }</h6>
                                                        ${els.services
                                                            .map(
                                                                (els2) =>
                                                                    `
                                                               <p class="m-0 text-secondary"><i class="fa-solid fa-chevron-right me-2"></i>${els2}</p>
                                                            `
                                                            )
                                                            .join('')}
                                                     
                                                    </div>`
                                            )
                                            .join('')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        `;
                        li.push(html);
                        data.push(html2);
                    });
                    const elId = document.getElementById('pills-tab');
                    elId.innerHTML = li.join('');
                    const elId2 = document.getElementById('pills-tabContent');
                    elId2.innerHTML = data.join('');
                }
            })
            .catch((err) => {
                console.log(err);
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
