import React from "react";

const Reports = () => {
  return (
    <div class="dashboard-main-body">
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <h6 class="fw-semibold mb-0">Reports</h6>
        <ul class="d-flex align-items-center gap-2">
          <li class="fw-medium">
            <a
              href="index.html"
              class="d-flex align-items-center gap-1 hover-text-primary"
            >
              <iconify-icon
                icon="solar:home-smile-angle-outline"
                class="icon text-lg"
              ></iconify-icon>
              Dashboard
            </a>
          </li>
          <li>-</li>
          <li class="fw-medium">Reports</li>
        </ul>
      </div>

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
                      Report based on
                    </span>
                    <h6 class="fw-semibold my-1">Customer</h6>
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
                      Report based on
                    </span>
                    <h6 class="fw-semibold my-1">Devices</h6>
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
                      Report based on
                    </span>
                    <h6 class="fw-semibold my-1">Orders</h6>
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
      </div>
    </div>
  );
};

export default Reports;
