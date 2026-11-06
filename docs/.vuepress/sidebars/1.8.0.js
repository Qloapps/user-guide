// Sidebar for QloApps 1.8.0. Paths are relative to docs/1.8.0/ (prefix added in versions.js).
module.exports = [
      {
        title: 'Introduction',
        path: '/introduction/',
        collapsable: true,
      },
      {
        title: 'Front Office Features',
        path: '/front_office/',
        collapsable: true,
        children: [
          ['front_office/home_page/', 'Home Page'],
          ['front_office/room_listing/', 'Room Listing Page'],
          ['front_office/room_detail/', 'Room Detail Page'],
          ['front_office/checkout/', 'Checkout Page'],
          ['front_office/guest_information/', 'Guest Information'],
          ['front_office/payment_information/', 'Payment Information'],
          ['front_office/booking_confirmation/', 'Booking Confirmation'],
          ['front_office/booking_history/', 'Booking History'],
          ['front_office/my_account/', 'My Account'],
          ['front_office/contact_us/', 'Contact Us'],
          ['front_office/our_properties/', 'Our Properties'],
        ]
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
          ['catalog/room_selling_objects/', 'Room Selling Objects'],
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
          ['orders/payment_receipts/', 'Payment Receipts'],
          ['orders/credit_slips/', 'Credit Slips'],
          ['orders/statuses/', 'Statuses'],
          ['orders/business_sources/', 'Business Sources'],
          ['orders/order_messages/', 'Order Messages'],
          ['orders/guest_registration_card/', 'Guest Registration Card'],
          ['orders/room_statuses/', 'Room Statuses'],
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
          ['hrs/manage_property_types/', 'Manage Property Types'],
          ['hrs/manage_amenities/', 'Manage Amenities'],
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
          ['modules/sitemap_generator/', 'Sitemap Generator'],
          ['modules/google_hotel_connector/', 'Google Hotel Connector'],
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
          ['advance_parameter/cron_task_manager/', 'Cron Task Manager'],
          ['advance_parameter/webservices/', 'Webservice'],
        ]
      },
    ]
