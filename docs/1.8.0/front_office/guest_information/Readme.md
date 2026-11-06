# Guest Information

The Guest Information section allows guests to choose how they would like to proceed with the booking.

Guests can select one of the following options:

- **Login now:** Sign in using an existing account to continue the booking.
- **Guest checkout:** Complete the booking without creating an account.
- **Create an account:** Register a new account before proceeding with the booking.

![Guest Information](./Guest_checkout.png)

## 1. Guest Checkout

Guests can complete the booking process without creating an account by using the **Guest Checkout** option. This allows first-time or one-time visitors to make a booking quickly without registering on the website.

During Guest Checkout, guests must provide the following information:

* Social title
* First name
* Last name
* Email
* Phone
* Nationality (displayed only if enabled by the administrator)

Fields marked with an asterisk (*) are mandatory.

> **Note for Administrators:** The **Nationality** field is displayed only when **Enable nationality** is turned on from **Preferences → Customers** in the Back Office. It becomes mandatory when **Nationality is mandatory** is also enabled. For more information, refer to the QloApps documentation: [Customers](/1.8.0/preferences/customers/)

> **Note for Administrators:** Guest Checkout can be enabled or disabled from **Preferences → Orders → General → Enable Guest Checkout**. For more information, refer to the QloApps documentation: [General](/1.8.0/preferences/orders/#general)


![Guest Information](./guest_checkout_info.png)


After entering the required details, click **Save**.

The entered information is saved and displayed in a summary view within the **Guest Information** section. Guests can review the information before continuing with the checkout process.

![Guest Information Summary](./guest_checkout__details.png)

The summary displays:

* **Name:** Displays the guest's full name.
* **Email:** Displays the registered email address.
* **Phone Number:** Displays the contact number provided during Guest Checkout.

Guests can perform the following actions:

* **Edit:** Click **Edit** to modify the guest information. The Guest Information form will reopen, allowing changes before continuing.
* **Proceed:** Click **Proceed** to continue to the **Payment Information** section.


## 2. Registered User Checkout

Select **Login now** to sign in using an existing account.

## Login Information

Enter the following details:

* **Email address:** Enter the email address associated with your account.
* **Password:** Enter your account password.

![Registered User Checkout](./user_login.png)

## Forgot Password

If you cannot remember your password, click **Forgot your password?** to reset your account password.

## Sign in

After entering your credentials, click **Sign in** to log in and continue with the booking process.

![Registered User Checkout](./guest_info.png)


After signing in, your personal details are automatically displayed in the Guest Information section, including:

- Name
- Email Address
- Phone Number

This information is retrieved from your account and will be used for the reservation.

## Booking for Someone Else

If you are making a reservation on behalf of another person, select the **Booking for someone else?** checkbox and enter the guest's details, such as the social title, first name, last name, email and mobile phone.

![Registered User Checkout](./booking_for_someone_else.png)


After reviewing the guest information, click **Proceed** to continue to the Payment Information section.
