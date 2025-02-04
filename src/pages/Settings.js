import React from "react";

const Settings = () => {
  return (
    <div class="dashboard-main-body">
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <h6 class="fw-semibold mb-0">Settings</h6>
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
          <li class="fw-medium">Settings</li>
        </ul>
      </div>

      <div class="row gy-4">
        <div class="col-xxl-4 col-sm-6">
          <h2>Settings Page</h2>
        </div>
      </div>
    </div>
  );
};

export default Settings;
