import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Goods Group',
    icon: 'inbox-outline',
    link: './goods-group/library',
  },
  {
    title: 'Product Group',
    icon: 'layers-outline',
    link: './product-group/library',
  },
  {
    title: 'Customers',
    icon: 'people-outline',
    children: [
      {
        title: 'Add Customers',
        icon: 'person-add-outline',
        link: './customers/add-customers',
      },
      {
        title: 'Modify Customers',
        icon: 'edit-outline',
        link: './customers/mod-customers',
      },
      {
        title: 'View Customers',
        icon: 'eye-outline',
        link: './customers/view-customers-page',
      },
    ],
  },
  {
    title: 'Uoms',
    icon: 'activity-outline',
    link: './uoms',
  },
  {
    title: 'Calendars',
    icon: 'calendar-outline',
    link: './calendars/library',
  },
  {
    title: 'Room Group',
    icon: 'shopping-cart-outline',
    link: './roomgroups/library',
  },
  {
    title: 'SalesTeam',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'SalesTeam',
        icon: 'shopping-cart-outline',
        link: './salesteams/salesteam',
      },
      {
        title: 'SalesTeamBin',
        icon: 'shopping-cart-outline',
        link: './salesteambins/salesteambin',
      },
    ],
  },
  {
    title: 'Employee',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'Employee',
        icon: 'shopping-cart-outline',
        link: './employees/library',
      },
      {
        title: 'EmployeeResponsibility',
        icon: 'shopping-cart-outline',
        link: './employeeresponsibilities/library',
      },
    ],
  },
  {
    title: 'Warehouse',
    icon: 'cube-outline',
    link: './warehouse/library',
  },
  {
    title: 'Locations',
    icon: 'inbox-outline',
    link: './locations/library',
  },
  {
    title: 'Store Information',
    icon: 'shopping-bag-outline',
    link: './store-information/library',
  },
  {
    title: 'Code Master',
    icon: 'bookmark-outline',
    children: [
      {
        title: 'Code Master',
        link: './codemaster/codemaster',
      },
      {
        title: 'Code Detail',
        link: './codemaster/codedetail',
      },
    ],
  },
  {
    title: 'Structure',
    icon: 'shopping-bag-outline',
    children: [
      {
        title: 'Structure',
        link: './structure/structure',
      },
      {
        title: 'Structure Value',
        link: './structure/structure-value',
      },
    ]
  },
  {
    title: 'SecondaryCustomer',
    icon: 'shopping-bag-outline',
    link: './se-customer',
  },
  {
    title: 'Apply For',
    icon: 'archive-outline',
    children: [
      {
        title: 'Apply For Header',
        link: './applyfor/applyforheader',
      },
      {
        title: 'Apply For Customer',
        link: './applyfor/applyforcustomer',
      },
      {
        title: 'Apply For Secondary Customer',
        link: './applyfor/applyforsecondarycustomer',
      },
    ],
  },
];
