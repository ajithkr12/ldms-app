import React, { useState } from "react";

function DashboardLpg() {
  return (
    <div class="row gy-4">
      <div class="col-xxl-3 col-sm-6">
        <div class="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-3">
          <div class="card-body p-0">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div class="d-flex align-items-center">
                <div class="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                  <span class="mb-0 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                    <iconify-icon
                      icon="flowbite:users-group-solid"
                      class="icon"
                    ></iconify-icon>
                  </span>
                </div>

                <div>
                  <span class="mb-2 fw-medium text-secondary-light text-md">
                    Total Customers
                  </span>
                  <h6 class="fw-semibold my-1">5000</h6>
                  <p class="text-sm mb-0">
                    Increase by
                    <span class="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-sm-6">
        <div class="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-2">
          <div class="card-body p-0">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div class="d-flex align-items-center">
                <div class="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                  <span class="mb-0 w-40-px h-40-px bg-purple flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                    <iconify-icon
                      icon="solar:wallet-bold"
                      class="text-white text-2xl mb-0"
                    ></iconify-icon>
                  </span>
                </div>

                <div>
                  <span class="mb-2 fw-medium text-secondary-light text-md">
                    Total Pending Orders
                  </span>
                  <h6 class="fw-semibold my-1">15,000</h6>
                  <p class="text-sm mb-0">
                    Increase by
                    <span class="bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm">
                      -200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-sm-6">
        <div class="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-5">
          <div class="card-body p-0">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div class="d-flex align-items-center">
                <div class="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                  <span class="mb-0 w-40-px h-40-px bg-red flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                    <iconify-icon
                      icon="fa6-solid:file-invoice-dollar"
                      class="text-white text-2xl mb-0"
                    ></iconify-icon>
                  </span>
                </div>

                <div>
                  <span class="mb-2 fw-medium text-secondary-light text-md">
                    Out For Delivery
                  </span>
                  <h6 class="fw-semibold my-1">15,000</h6>
                  <p class="text-sm mb-0">
                    Increase by
                    <span class="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-sm-6">
        <div class="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-4">
          <div class="card-body p-0">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div class="d-flex align-items-center">
                <div class="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                  <span class="mb-0 w-40-px h-40-px bg-success-main flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                    <iconify-icon
                      icon="streamline:bag-dollar-solid"
                      class="icon"
                    ></iconify-icon>
                  </span>
                </div>

                <div>
                  <span class="mb-2 fw-medium text-secondary-light text-md">
                    Total Payment Pending
                  </span>
                  <h6 class="fw-semibold my-1">15,000</h6>
                  <p class="text-sm mb-0">
                    Increase by
                    <span class="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-12">
        <div class="card h-100">
          <div class="card-body p-24">
            <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
              <h6 class="mb-2 fw-bold text-lg mb-0">Latest Notifications</h6>
              {/* <a
                href="#"
                class="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <iconify-icon
                  icon="solar:alt-arrow-right-linear"
                  class="icon"
                ></iconify-icon>
              </a> */}
            </div>
            <div class="table-responsive scroll-sm">
              <table class="table bordered-table sm-table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Device Name</th>
                    <th scope="col">Cus.Name</th>
                    <th scope="col">Address </th>
                    <th scope="col">Parameter 1</th>
                    <th scope="col" class="text-center">
                      {" "}
                      Warrning Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/images/asset/asset-img1.png"
                          alt=""
                          class="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                        />
                        <div class="flex-grow-1">
                          <h6 class="text-md mb-0 fw-normal">DVS23458987IN</h6>
                          <span class="text-sm text-secondary-light fw-normal">
                            Lpg
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-md mb-0 fw-normal">John Wick</h6>
                      <span class="text-sm text-secondary-light fw-normal">
                        Sample
                      </span>
                    </td>
                    <td>1234 Elm Street, Suite 100</td>
                    <td>Parameter</td>
                    <td class="text-center">
                      <span class="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/images/asset/asset-img1.png"
                          alt=""
                          class="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                        />
                        <div class="flex-grow-1">
                          <h6 class="text-md mb-0 fw-normal">DVS23458988IN</h6>
                          <span class="text-sm text-secondary-light fw-normal">
                            Lpg
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-md mb-0 fw-normal">Jane Smith</h6>
                      <span class="text-sm text-secondary-light fw-normal">
                        Sample
                      </span>
                    </td>
                    <td>5678 Maple Avenue, Apt. 202,</td>
                    <td>Parameter</td>
                    <td class="text-center">
                      <span class="bg-warning-focus text-warning-main px-16 py-4 radius-8 fw-medium text-sm">
                        In Progress
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/images/asset/asset-img1.png"
                          alt=""
                          class="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                        />
                        <div class="flex-grow-1">
                          <h6 class="text-md mb-0 fw-normal">DVS23458989IN</h6>
                          <span class="text-sm text-secondary-light fw-normal">
                            Lpg
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-md mb-0 fw-normal">Michael Johnson</h6>
                      <span class="text-sm text-secondary-light fw-normal">
                        Sample
                      </span>
                    </td>
                    <td>1298 oak Street, Suite 100</td>
                    <td>Parameter</td>
                    <td class="text-center">
                      <span class="bg-danger-focus text-danger-main px-16 py-4 radius-8 fw-medium text-sm">
                        Danger
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/images/asset/asset-img1.png"
                          alt=""
                          class="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                        />
                        <div class="flex-grow-1">
                          <h6 class="text-md mb-0 fw-normal">DVS23458980IN</h6>
                          <span class="text-sm text-secondary-light fw-normal">
                            Lpg
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-md mb-0 fw-normal">Emily Davis</h6>
                      <span class="text-sm text-secondary-light fw-normal">
                        Sample
                      </span>
                    </td>
                    <td>1234 ref Street, Suite 100</td>
                    <td>Parameter</td>
                    <td class="text-center">
                      <span class="bg-warning-focus text-warning-main px-16 py-4 radius-8 fw-medium text-sm">
                        In Progress
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/images/asset/asset-img1.png"
                          alt=""
                          class="flex-shrink-0 me-12 w-40-px h-40-px radius-8 me-12"
                        />
                        <div class="flex-grow-1">
                          <h6 class="text-md mb-0 fw-normal">DVS23458984IN</h6>
                          <span class="text-sm text-secondary-light fw-normal">
                            Lpg
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="text-md mb-0 fw-normal">William Brown</h6>
                      <span class="text-sm text-secondary-light fw-normal">
                        Sample
                      </span>
                    </td>
                    <td>5555 Birch Lane, Floor 3</td>
                    <td>Parameter</td>
                    <td class="text-center">
                      <span class="bg-success-focus text-success-main px-16 py-4 radius-8 fw-medium text-sm">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between mt-20">
              <h6 class="mb-2 fw-bold text-lg mb-0"></h6>
              <div class="d-flex align-items-center">
                <a
                  href="#"
                  class="text-primary-600 hover-text-primary d-flex align-items-center gap-2"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-left-linear"
                    class="icon"
                    style={{ fontSize: "24px" }}
                  ></iconify-icon>
                </a>
                <p
                  class="text-primary-500 hover-text-primary"
                  style={{ fontSize: "14px", margin: "0px 12px 0px 12px" }}
                >
                  Page 1
                </p>
                <a
                  href="#"
                  class="text-primary-600 hover-text-primary d-flex align-items-center gap-2"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    class="icon"
                    style={{ fontSize: "24px" }}
                  ></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLpg;
