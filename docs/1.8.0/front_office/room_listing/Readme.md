# Room Listing Page
The Room Listing page displays all rooms available for the selected hotel, stay dates, and occupancy details. Guests can compare room options, apply filters, review pricing, and proceed with booking.


![Logo](./available_rooms.png)

Each room card includes the following information:

**Room Image:** Displays a preview image of the room, allowing guests to get a quick visual overview of the accommodation.

**Room Name:** Displays the name of the room type available for booking.

**Room Description:** Provides a brief summary of the room, including its features and facilities.
To view additional information about the room, click **View More**.

> **Note for Administrators:** Room details such as the name, price, and description can be updated from Catalog → Manage Room Types by editing the desired room type. Changes are automatically reflected on the Front Office.


**Room Features:** Displays the featured features of the room, such as the bed type or room area, as an icon followed by its value.

**Room Amenities:** Displays the featured amenities available in the room as icons. Hover over an icon to see the name of the amenity.

> **Note for Administrators:** Featured features are managed from **Catalog → Features** by setting **Is Featured** to **Yes**. Amenities are managed from **Hotel Reservation System → Manage Amenities** and assigned to each room type from **Catalog → Manage Room Types → Amenities**, where you can also choose the **Featured amenities**. The number of features and amenities displayed on each room card can be set from **Hotel Reservation System → General Settings → Website Configuration**.

**Occupancy Details:** Shows the maximum number of guests that can be accommodated in the room, including the number of adults and children allowed.

**Example:** A room is displayed as **4 Max guests: 2 Adults, 2 Children**, which means:

* Maximum Guests: 4
* Adults: 2
* Children: 2

**Availability Status:** Displays the current room availability. If only a few rooms remain, a notification such as **"Hurry! 5 Rooms left"** may be displayed.

**Room Price:** Displays the room rate per night (**/Per Night**). If a discount applies, the original price is displayed with a strike through next to the discounted price.

**Select Occupancy**

The **Select Occupancy** option allows guests to specify the number of rooms, adults, and children for their stay before proceeding with the booking.

Click the Select Occupancy dropdown to open the occupancy configuration panel.

![occupancy](./occupancy.png)

**Occupancy Configuration**

Guests can configure the occupancy details for each room individually.

- **Adults:** Select the number of adults staying in the room.
- **Children:** Select the number of children staying in the room.

When children are added, guests must specify the age of each child. The child's age is used to determine occupancy eligibility and apply any child-specific pricing or policies configured by the hotel.

- **Add Room:**
Click **Add Room** to include an additional room in the reservation. A separate occupancy section will be created for the new room, allowing guests to configure adults and children for each room individually.

- **Save Occupancy:**

 After selecting the number of adults, children, and entering the ages of all children, click **Done** to save the occupancy details.

**Note**: QloApps supports two different booking methods for the Front Office:

**1) Room Occupancy:** Guests select the number of adults and children for each room before booking. This option is ideal when occupancy-based pricing or occupancy restrictions are used.

**2) Rooms Quantity (No. of rooms):** Guests simply select the number of rooms they want to book without specifying occupancy during room selection. In this case, a **Qty** counter with **+** and **-** buttons is displayed on the room card instead of **Select Occupancy**.

> **Note for Administrators**: To configure the preferred booking method from the Back Office, navigate to Preferences → Room Types → Search → In front-end, add rooms to cart with and choose either Room Occupancy or Rooms Quantity (No. of rooms). For more information, refer to the QloApps documentation: [Search](/1.8.0/preferences/room_types/#search)

![room_wise_occupancy](./room_wise.png)


**Book Now**

Click **Book Now** to add the selected room to your cart. A pop-up with the message **Room successfully added to your cart** will appear, allowing you to click **Continue browsing** or **Proceed to checkout**.

![cart](./popout.png)

## Search Panel
The search panel allows guests to modify their search without returning to the homepage.

- **Property Location:** Select your preferred location where you would like to stay. This field is displayed only when it is enabled by the administrator.

- **Select Property:** Select the desired hotel from the dropdown list.

- **Stay Dates:** Modify the check-in and check-out dates for your reservation.

- **Occupancy:** Update the number of guests and rooms required. After the occupancy is set, it is displayed in the field, for example **2 Adults, 1 Child, 1 Room**.

Now Click on **Search Rooms** to refresh the room availability based on the updated search criteria.

![Logo](./amenities_search.png)

## Amenities Filter
The Amenities filter helps guests find rooms with specific facilities.

The available amenities depend on the amenities configured by the hotel.

Select one or more amenities to filter the room results. Only the rooms that have all the selected amenities are displayed.

To remove the selected amenities, click **Clear Filter.**

> **Note for Hotel Administrators:** The amenities displayed in this filter are managed from the Back Office. Navigate to **Hotel Reservation System → Manage Amenities** to add, modify, or remove amenities. Only active amenities are listed.

## Features Filter
The Features filter helps guests find rooms with specific room features. Each feature selected by the administrator is displayed as a separate filter with its values, for example the bed type.

Select one or more values to filter the room results.

> **Note for Administrators:** The Features filter is displayed only when **Show Features filter** is enabled in the filter module, as described in the note at the end of this page. You can then select the features that should be displayed in the filter. Features are managed from **Catalog → Features**.

## Price Filter
The Price Filter allows guests to narrow down room results based on their preferred price range. This helps users quickly find accommodations that match their budget.

**Setting a Price Range:**

 The filter displays the minimum and maximum room prices available for the selected search criteria.

Guests can:

- Drag the left slider handle to set the minimum price.
- Drag the right slider handle to set the maximum price.
- View rooms that fall within the selected price range.

![Price Filter](./price.png)

As the price range is adjusted, the room listings are automatically updated to display only the rooms that match the selected budget.

**Clear Filter:**

 Click **Clear Filter** to remove the selected price range and display all available rooms.


> **Note for Administrators:** To enable or disable the filters, navigate to **Modules and Services**, search for **Layered filters and sorting block**, and click **Configure**. From there, set **Show Price filter**, **Show Amenities filter** and **Show Features filter** to **Yes** or **No**, and click **Save**.

## Sort By
The **Sort By** dropdown allows guests to change the order of the room results. The following options are available:

- **Recommended**: The default order.
- **Price : Lowest First**: Displays the room with the lowest price first.
- **Price : Highest first**: Displays the room with the highest price first.
