# Home Page
The Home Page is the default landing page of the QloApps Front Office. It introduces guests to the hotel, highlights key amenities, showcases available rooms, and provides direct access to the booking process.

The homepage is designed to help visitors quickly learn about the property and start making reservations from a single page.

![Alt text](./homepage.jpeg)

Key Components
- Header Section
- Hero Banner Section
- Room Search Panel
- Hotel Interior Section
- Hotel Amenities Section
- Room Listing Section
- Guest Testimonials
- Footer Section


## Header Section


The Header Section is displayed at the top of every page in the QloApps Front Office.


![Alt text](./header_section.png)

- **Hotel logo**: The hotel logo helps visitors identify the property and strengthens brand recognition. Guests can click the logo from any page to return to the Home Page.

    > **Note for Administrators:** To change the website header logo displayed on the Front Office, navigate to **Preferences → Themes → Logo → Header Logo** in the Back Office and upload the desired logo. For more information, refer to the QloApps documentation: [Add New Theme](/1.8.0/preferences/themes/#add-new-theme)

- **Contact**: The contact section displays the hotel's email address and phone number, if they are configured.

    > **Note for Administrators:** The support email address and phone number displayed in the Front Office header can be configured from **Hotel Reservation System → General Settings → General Settings → Hotel Configuration → Support Contact Details**. For more information, refer to the QloApps documentation: [General Settings](/1.8.0/hrs/general_settings/#general-settings-2)

- **Language Selector**: The **Language Selector** allows guests to browse the website in their preferred language. Selecting a language updates the website content, making it easier for guests to navigate and complete their bookings.

    > **Note for Administrators:** Additional languages can be added or managed from **Localization → Languages**. For more information, visit our QloApps documentation: [Languages](/1.8.0/localization/languages/)

- **Currency Selector**: The **Currency Selector** allows guests to view room rates and booking prices in their preferred currency. Selecting a different currency updates the displayed prices across the website.

    > **Note for Administrators:** Currencies can be managed from **Localization → Currencies**. For more information, visit our QloApps documentation: [Currencies](/1.8.0/localization/currency/)

- **Sign In**: The Sign In option allows registered customers to access their accounts and manage their bookings. When clicked, guests will land on the authentication page.

![Alt text](./authentication.png)


The Authentication page includes:


- **Create an Account**: Allows new customers to register using their email address.
- **Already Registered:** Allows existing customers to sign in using their email address and password.
- **Forgot Your Password**: Allows registered customers to reset their account password.


After entering an email address on the Create an Account section, guests are redirected to the registration page.


The registration form includes:

![Alt text](./createaccount.jpeg)


- **Personal Information**: Allows guests to enter their personal details, such as Title, First name, Last name, Email, Phone and Password. If enabled by the administrator, the **Date of Birth** and **Nationality** fields are also displayed.
- **Newsletter Subscription**: Guests can select **Sign up for our newsletter!** and **Receive special offers from our partners!** to receive hotel updates and promotional offers.
- **Register**: Creates a new customer account.

 Note: Fields marked with an asterisk (*) are mandatory.

> **Note for Administrators:** The **Nationality** field is displayed only if **Enable nationality** is turned on from **Preferences → Customers** in the Back Office. It becomes mandatory when **Nationality is mandatory** is also enabled. For more information, refer to the QloApps documentation: [Customers](/1.8.0/preferences/customers/)
- **Booking cart**: The booking cart icon allows guests to view rooms added to their reservation and review booking details before checkout.


- **Navigation menu**- The Navigation Menu helps guests access important pages without scrolling through the entire website. Guests can open it by clicking the menu button in the header.

- **Properties link**: Optionally displays a link to the **Our Properties** page in the header menu.

    > **Note for Administrators:** The link can be enabled from **Hotel Reservation System → General Settings → Website Configuration → Display Properties link in Header**.


Hotels can add CMS pages, theme pages, and custom links to the navigation menu.  

![Alt text](./Navigationmenu.png)

Administrators can:

- Add CMS pages
- Add theme pages
- Add custom URLs
- Display links in the navigation menu
- Display links in the footer section

> **Note for Administrators:** Navigation links can be managed from the Back Office by navigating to **Modules and Services → Manage Modules → Navigation block → Configure**. From here, you can add **CMS pages**, **theme pages**, and **custom URLs** to the navigation menu. You can also choose which links are displayed in the **Navigation Menu** and the **website footer**.

> **Note for Administrators:** CMS pages can be created and managed from the Back Office by navigating to **Preferences → CMS**. From here, you can create new CMS pages including their titles and content. For more information, refer to the QloApps documentation: [CMS](/1.8.0/preferences/cms/)

## Hero Banner Section


The Hero Banner is the primary promotional area of the homepage. It creates the first impression for visitors and highlights the hotel's identity. Depending on the **Header Media Type** selected by the administrator, it can show either a slideshow of images or a looping background video.

![Alt text](./Herobanner.png)


- **Header images**: One or more images representing the hotel property. When two or more images are active, they slide automatically and guests can move between them using the arrows and/or dots.
- **Header video**: Instead of images, a muted video plays in a loop in the background.
- **Title**: A short heading displayed over each image. The title is displayed only when the header media type is **Image**.
- **Description**: A short message or tagline displayed over the image or video, reflecting the hotel's brand and services.

> **Note for Administrators:** The homepage header media can be managed from **Hotel Reservation System → General Settings → Landing Page Header Media** in the Back Office. From here, you can choose the **Header Media Type** (Image or Video), add images with their **Title** and **Description**, and set the **Navigation Type**, **Auto Slide**, **Slide Interval**, **Slide Animation** and **Content Alignment**. For a video, you can upload a video file or enter an **External Video URL**. For more information, refer to the QloApps documentation: [General Settings](/1.8.0/hrs/general_settings/)

*Note: The slider settings apply only when two or more images are active. The external video URL must be a direct link to a .mp4, .webm or .ogg file; YouTube and Vimeo links are not supported.*

## Room Search Panel

- **Room Search Panel**: The Room Search Panel allows guests to check room availability based on their preferred stay dates and occupancy requirements.

![Alt text](./Roomsearch.png)

Guests can enter the following details:
- **Property Location**: Allows guests to search by the preferred location. This field is displayed only when it is enabled by the administrator.
- **Select Property**: Displays the available hotels configured in the system. If the website has only one active property and **Display Hotel Name** is disabled, this field is hidden.
- **Check-in and Check-out Dates**: Guests can select their arrival date & departure date. The system uses these dates to calculate room availability.
- **Occupancy Selection**: Allows guests to specify the number of rooms, and the number of adults and children (with the age of each child) for every room. This field is not displayed when **Search without occupancy** is selected by the administrator.
- **Search Rooms**: After entering the required information, guests can click **Search Rooms** to view available accommodations.

> **Note for Administrators:** If you want guests to search for rooms **without selecting occupancy**, navigate to **Preferences → Room Types → Search** and set **Front End Search Type** to **Search without occupancy**. For more information, refer to the QloApps documentation: [Search](/1.8.0/preferences/room_types/#search)

> **Note for Administrators:** If you do not want guests to search by hotel location, you can disable the **Hotel Location** field from **Hotel Reservation System → General Settings → Search Panel Setting → Enable Hotel Location**. For more information, refer to the QloApps documentation: [General Settings](/1.8.0/hrs/general_settings/#general-settings-2)

## Hotel Interior Block

The Hotel Interior Block displays a gallery of images showcasing hotel rooms, facilities, and surrounding spaces.

This section helps guests visualize the property before making a reservation.

![Alt text](./hotelinterior.png)


The block includes:


- **Interiors Block Title**: Displays the title of the Interiors section.
- **Interiors Block Description**: Displays a brief introduction to the hotel's interiors and facilities.
- **Interior Images**: Displays images of hotel rooms, amenities, and other property areas in a slider, with four images on each slide. Guests can click an image to view it in a larger gallery.
- **Slider navigation**: Guests can move between the slides using dots, arrows, or both, and the slider can also move automatically.

> **Note for Administrators:** The **Hotel Interior Block** displayed on the Front Office homepage can be configured from **Hotel Reservation System → General Settings → Hotel Interior Block**. From here, you can set the **Interior Block Title** and **Interior Block Description**, choose the **Navigation Type** (Dots, Arrows, or Arrows and dots), enable **Auto slide**, set the **Slide Interval**, and add the interior images. For more information, refer to the QloApps documentation: [Hotel Interior Block](/1.8.0/hrs/general_settings/#hotel-interior-block)

## Hotel Amenities Block

The Hotel Amenities Block highlights the facilities and services available at the hotel. It helps guests understand the experience and conveniences offered during their stay.

![Alt text](./hotelamenities.png)


The amenities are displayed in an alternating image and text layout. Each amenity includes:
- **Amenities Block Title**: Displays the title of the Amenities section.
- **Amenities Block Description**: Displays a brief introduction to the hotel's facilities and services.
- **Amenity Image**: Displays a visual representation of the facility.
- **Amenity Title**: Shows the name of the service or facility.
- **Amenity Description**: Provides a brief overview of the amenity and its benefits.

> **Note for Administrators:** The **Hotel Amenities Block** displayed on the Front Office homepage can be configured from **Hotel Reservation System → General Settings → Hotel Amenities Block**. For more information, refer to the QloApps documentation: [Hotel Amenities Block](/1.8.0/hrs/general_settings/#hotel-amenities-block)


## Our Rooms Section
The Our Rooms Section displays available room types on the hotel website. Guests can view room details, compare pricing, and start the reservation process.

![Alt text](./roomblock.png)


The section displays:
- Room Block Title: Displays the title of the room section.
- Room Block Description: Displays a brief introduction to the available room types.

Each room card includes:
- Room Image: Displays a preview image of the room.
- Room Name: Shows the room type available for booking.
- Property Name and Location (optional): Shows the property name and location below the room name when enabled by the administrator.
- Room Features: Shows the key features of the room, such as the bed type and room area, using icons and values.
- Room Amenities: Shows icons of the amenities available in the room.
- Room Price: Displays the room rate per night (**/ Night**). If a discount applies, the original price is shown with a strike through.
- Book Now: Allows guests to proceed with booking the selected room. If booking is disabled for the website, for example in catalog mode, the button is displayed as **View**.

The room cards are displayed in a slider. Guests can move between the rooms using the arrows and/or dots, and the slider can also move automatically.


> **Note for Administrators:** The **Our Rooms** section can be configured from **Modules and Services → Manage Modules → Display Hotel Rooms → Configure**. From here, administrators can manage the section title and description, choose whether to show the property location on each room card, set the slider's **Navigation Type** (Arrows, Dots, or Arrows and dots), **Auto slide** and **Slide Interval**, and select the room types to display on the Front Office.

Note: Only active room types are displayed in the Our Rooms Section.


## Guest Testimonials Section
The Guest Testimonials Section displays reviews and feedback from previous guests. It helps build trust and gives potential customers insight into guest experiences.

![Alt text](./testimonial.png)


Each testimonial includes:

- Guest Review: Displays the guest's feedback about their stay.
- Guest Name: Shows the name of the reviewer.
- Designation: Displays the guest's designation or company, if provided.
- Guest Image: Displays the reviewer's profile image.

> **Note for Administrators:** The **Guest Testimonials** section can be managed from **Modules and Services → Manage Modules → Property Testimonial → Configure**. From here, administrators can set the block title and description, and add, edit, or remove testimonials displayed on the Front Office homepage.

## Footer Section

The Footer Section appears at the bottom of the QloApps Front office and contains additional navigation and informational links.

> **Note for Administrators:** To display navigation links in the website footer, navigate to **Modules and Services → Manage Modules → Navigation block → Configure**, then enable the **Show at footer block** option for the required pages or links.

![Alt text](./footerrr.png)


- **Social Networking Block**: Guests can connect with the hotel through social platforms such as Facebook or Twitter etc.

    > **Note for Administrators:** The social media links displayed in the **Social Networking** section can be managed from **Modules and Services → Manage Modules → Social Networking Block → Configure**. From here, administrators can enter or clear the profile URL for each supported social network. A network is displayed on the Front Office only when its URL is entered.

- **Payment Accepted Block**: The Payment Accepted Block section displays accepted payment gateways and payment cards. Examples include Visa, American Express, PayPal etc.

    > **Note for Administrators:** The payment methods displayed in the **Payment Accepted** section of the Front Office footer can be managed from **Modules and Services → Manage Modules → Footer Payment Accepted Block → Configure**. From here, administrators can add, edit, or remove the payment methods and their corresponding icons displayed to guests.

- **Newsletter Subscription Block**: The Newsletter Subscription section allows guests to enter their email address and click **Subscribe** to receive promotional offers and hotel updates.
    
- **Explore**: Allows guests to quickly access legal and informational content without searching through the website. The links shown here are the pages that the administrator has chosen to display in the footer, for example Policies, Legal Notice, Terms and Conditions, About Us and Secure Payment.

    > **Note for Administrators:** The links displayed in the Front Office footer can be managed from **Modules and Services → Manage Modules → Navigation block → Configure**. Enable the **Show at footer block** option for the required CMS pages or links to make them visible in the website footer.
