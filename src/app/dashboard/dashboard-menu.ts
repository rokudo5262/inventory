import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Goods Group',
    icon: 'inbox-outline',
    link: './goods-group',
  },
  {
    title: 'Product Group',
    icon: 'layers-outline',
    link: './product-group',
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
    title: 'UOMs',
    icon: 'activity-outline',
    link: './UOMs',
  },
  {
    title: 'Calendars',
    icon: 'calendar-outline',
    link: './calendars',
  },
  {
    title: 'Room Group',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'RoomGroup',
        icon: 'shopping-cart-outline',
        link: '/dashboard/roomgroups/library',
      },
      {
        title: 'SalesTeam',
        icon: 'shopping-cart-outline',
        link: '/dashboard/salesteams/salesteam',
      },
      {
        title: 'SalesTeamBin',
        icon: 'shopping-cart-outline',
        link: '/dashboard/salesteambins/salesteambin',
      },
      {
        title: 'Employee',
        icon: 'shopping-cart-outline',
        link: '/dashboard/employees/employee',
      },
      {
        title: 'EmployeeResponsibility',
        icon: 'shopping-cart-outline',
        link: '/dashboard/employeeresponsibilities/employeeresponsibility',
      },
    ],
  },
  {
    title: 'Warehouse',
    icon: 'cube-outline',
    children: [
      {
        title: 'Warehouse',
        link: './warehouse/warehousepage',
      },
    ],
  },

  {
    title: 'Locations',
    icon: 'inbox-outline',
    link: './locations',
  },


  {
    title: 'Store Information',
    icon: 'shopping-bag-outline',
    children: [
      {
        title: 'Store Information',
        link: './store-information/store-information',
      }
    ]
  },
  {
    title: 'Code Master',
    icon: 'bookmark-outline',
    children: [
      {
        title: 'Code Master',
        link: './codeMaster/codeMaster',
      },
      {
        title: 'Code Detail',
        link: './codeMaster/codeDetail',
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
      // {
      //   title: 'Structure-value',
      //   link: './structure/structure-value',
      // }
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

