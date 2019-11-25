import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    icon: "dashboard",
    class: ""
  },
  {
    path: "/admin/admin-profile",
    title: "Profile",
    icon: "person",
    class: ""
  },
  {
    path: "/admin/add-candidate",
    title: "Add candidate",
    icon: "person_add",
    class: ""
  },
  {
    path: "/admin/candidate-list",
    title: "list Condidate",
    icon: "content_paste",
    class: ""
  },
  {
    path: "/admin/typography",
    title: "Financial Management",
    icon: "library_books",
    class: ""
  },
  { path: "/admin/icons", title: "Offres", icon: "bubble_chart", class: "" },
  { path: "/admin/maps", title: "Maps", icon: "location_on", class: "" },
  {
    path: "/admin/notifications",
    title: "Notifications",
    icon: "notifications",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
