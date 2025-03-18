const { description, name } = require('../../package')

module.exports = {
  base: '/',
  title: name,
  description: description,
  head: [
      ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
      ['script', {}, `
        (function() {
            var script = document.createElement('script');
            script.innerHTML = 'window.chatbotConfig = { url: "https://ask.bagisto.com:5000/qlo/chat", logoUrl: "https://docs.qloapps.com/qlologo.png" };';
            document.head.appendChild(script);
        })();
    `],
    ['script', { src: 'https://vikastiwari-webkul.github.io/ai-chatbot/chatbot.js', async: true }]
  ],
  themeConfig: {
    logo: '/logo.png',
    docsRepo: 'Qloapps/user-guide',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: true,
    nav: [
      {
        text: 'Download',
        link: 'https://qloapps.com/download/',
      },
      {
        text: 'Development Documentation',
        link: 'https://devdocs.qloapps.com/'
      },
      {
        text: 'Forum',
        link: 'https://forums.qloapps.com/'
      },
      {
        text: 'Extensions',
        link: 'https://qloapps.com/addons/'
      },
    ],

    sidebar: [
      {
        title: 'Introduction',
        path: '/introduction/',
        collapsable: true,
      },
      {
        title: 'Dashboard',
        path: '/dashboard/',
        collapsable: true,
        children: [
          ['dashboard/guest_insights/', 'Guest Insights'],
          ['dashboard/filter/', 'Filters'],
          ['dashboard/occupancy/', 'Occupancy'],
          ['dashboard/operations_today/', 'Operations Today'],
          ['dashboard/revenue/', 'Revenue'],
          ['dashboard/insights/', 'Insights'],
          ['dashboard/availabilty/', 'Availabilty'],
          ['dashboard/activity_overview/', 'Activity Overview'],
          ['dashboard/performance/', 'Performance'],
          ['dashboard/sales/', 'Sales'],
          ['dashboard/targets/', 'Targets'],
          ['dashboard/updates_hc/', 'Updates and Help center'],
        ]
      },
      {
        title: 'Catalog',
        path: '/catalog/',
        collapsable: true,
        children: [
          ['catalog/manage_room_types/', 'Manage Room Types'],
          ['catalog/manage_service_products/', 'Manage Services Products'],
          ['catalog/categories/', 'Categories'],
          ['catalog/features/', 'Features'],
        ]
      },
      {
        title: 'Customers',
        path: '/customers/',
        collapsable: true,
        children: [
          ['customers/customers/customers', 'Customers'],
          ['customers/address/address', 'Addresses'],
          ['customers/groups/groups', 'Groups'],
          ['customers/booking_carts/booking_carts', 'Booking Carts'],
          ['customers/customer_service/customer_service', 'Customer Service'],
          ['customers/contacts/contacts', 'Contacts'],
          ['customers/titles/titles', 'Titles']
        ]
      },
      {
        title: 'Orders',
        path: '/orders/',
        collapsable: true,
        children: [
          ['orders/orders/', 'Orders'],
          ['orders/invoices/', 'Invoices'],
          ['orders/credit_slips/', 'Credit Slips'],
          ['orders/statuses/', 'Statuses'],
          ['orders/order_messages/', 'Order Messages'],
        ]
      },
      {
        title: 'Discounts',
        path: '/discounts/',
        collapsable: true,
        children: [
          ['discounts/cart_rule/', 'Cart Rules'],
          ['discounts/catalog_price_rules/', 'Catalog Price Rules'],
        ]
      },
      {
        title: 'Hotel Reservation System',
        path: '/hrs/',
        collapsable: true,
        children: [
          ['hrs/manage_hotel/', 'Manage Hotel'],
          ['hrs/book_now/', 'Book Now'],
          ['hrs/manage_hotel_features/', 'Manage Hotel Features'],
          ['hrs/manage_refund_rules/', 'Manage Order Refund Rules'],
          ['hrs/manage_refund_request/', 'Manage Order Refund Request'],
          ['hrs/general_settings/', 'General Settings'],
        ]
      },
      {
        title: 'Channel Manager',
        path: '/channel_manager/',
        collapsable: true,
      },
      {
        title: 'Modules and Services',
        path: '/modules/',
        collapsable: true,
        children: [
          ['modules/manage_modules/', 'Manage Modules'],
          ['modules/modules_catalog/', 'Modules catalog'],
          ['modules/positions/', 'Positions'],
          ['modules/payments/', 'Payments'],
        ]
      },
      {
        title: 'Localization',
        path: '/localization/',
        collapsable: true,
        children: [
          ['localization/localization/', 'Localization'],
          ['localization/languages/', 'Languages'],
          ['localization/zones/', 'Zones'],
          ['localization/country/', 'Countries'],
          ['localization/states/', 'States'],
          ['localization/currency/', 'Currencies'],
          ['localization/taxes/', 'Taxes'],
          ['localization/tax_rules/', 'Tax Rules'],
          ['localization/translations/', 'Translations'],
        ]
      },
      {
        title: 'Preferences',
        path: '/preferences/',
        collapsable: true,
        children: [
          ['preferences/general/', 'General'],
          ['preferences/orders/', 'Orders'],
          ['preferences/room_types/', 'Room Types'],
          ['preferences/customers/', 'Customers'],
          ['preferences/themes/', 'Themes'],
          ['preferences/seo_url/', 'SEO & URLs'],
          ['preferences/cms/', 'CMS'],
          ['preferences/images/', 'Images'],
          ['preferences/store_contacts/', 'Store Contacts'],
          ['preferences/maintenance/', 'Maintenance'],
          ['preferences/geolocation/', 'Geolocation'],
        ]
      },
      {
        title: 'stats',
        path: '/stats/',
        collapsable: false,
      },
      {
        title: 'Administration',
        path: '/administration/',
        collapsable: true,
        children: [
          ['administration/preferences/', 'Preferences'],
          ['administration/quick_access/', 'Quick Access'],
          ['administration/employees/', 'Employees'],
          ['administration/profile/', 'Profile'],
          ['administration/permissions/', 'Permissions'],
          ['administration/menus/', 'Menus'],
        ]
      },
      {
        title: 'Advanced Parameter',
        path: '/advance_parameter/',
        collapsable: true,
        children: [
          ['advance_parameter/configuration_information/', 'Configuration Information'],
          ['advance_parameter/performance/', 'Performance'],
          ['advance_parameter/email/', 'E-mail'],
          ['advance_parameter/csv_import/', 'CSV Import'],
          ['advance_parameter/db_backup/', 'DB Backup'],
          ['advance_parameter/sql_manager/', 'SQL Manager'],
          ['advance_parameter/logs/', 'Logs'],
          ['advance_parameter/webservices/', 'Webservice'],
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/medium-zoom',
      {
        background: '#000',
      }
    ],
    '@vuepress/plugin-back-to-top',
  ]
}
