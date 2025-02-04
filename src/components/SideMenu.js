import React from "react";
import { Link } from "react-router";

function SideMenu({
  closeMobileSidebar,
  isSidebarActive,
  isMobileSidebarOpen,
}) {
  return (
    <aside
      className={`sidebar ${isSidebarActive ? "active" : ""} ${
        isMobileSidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <button
        type="button"
        class="sidebar-close-btn"
        onClick={closeMobileSidebar}
      >
        <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
      </button>
      <div>
        <a href="index.html" class="sidebar-logo">
          <img
            src="assets/images/logo.png"
            alt="site logo"
            class="light-logo"
          />
          <img
            src="assets/images/logo-light.png"
            alt="site logo"
            class="dark-logo"
          />
          <img
            src="assets/images/logo-icon.png"
            alt="site logo"
            class="logo-icon"
          />
        </a>
      </div>
      <div class="sidebar-menu-area">
        <ul class="sidebar-menu" id="sidebar-menu">
          <li class="">
            <a href="/">
              <iconify-icon
                icon="solar:home-smile-angle-outline"
                class="menu-icon"
              ></iconify-icon>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="sidebar-menu-group-title">Application</li>
          <li>
            <a href="/customers">
              <iconify-icon icon="mage:email" class="menu-icon"></iconify-icon>
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="/devices">
              <iconify-icon
                icon="bi:chat-dots"
                class="menu-icon"
              ></iconify-icon>
              <span>Devices</span>
            </a>
          </li>
          <li>
            <a href="/orders">
              <iconify-icon
                icon="solar:calendar-outline"
                class="menu-icon"
              ></iconify-icon>
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a href="/reports">
              <iconify-icon
                icon="material-symbols:map-outline"
                class="menu-icon"
              ></iconify-icon>
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <iconify-icon
                icon="material-symbols:map-outline"
                class="menu-icon"
              ></iconify-icon>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideMenu;
