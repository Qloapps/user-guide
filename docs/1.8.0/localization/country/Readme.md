# Country

The **Countries Section** allows you to manage country-specific settings for your hotel. You can add, edit, or delete countries based on your business requirements.

Here, the admin can view the **ISO code, call prefix, zone and toggle the enable/disable** status of the country.

By default, only your own country is available in the list of countries.

![countries!](./Countries.png)

## Add a new country

To add a new country, first click on add new country and fill in the following fields:

![Add a new!](./Countries-Add-new.png)

- **Country**: Enter the name of the country which you want to add.(e.g- US for united states)
- **ISO code**: Enter the two or three digits ISO-3166 code of the country.

- **Call prefix**: International call code is referred as call prefix.
- **Default currency**: select the default currency from dropdown menu.

*Note: If needed, you can add a new currency using the [currency](../currency/)
- **Zone**: Select the geographical region of the country.

*Note: If required, you can also add new zones using [zones](../zones/)

- **Does it need zip/postal code?**: enable if you want the customer to provide a zip code while signing up to your website.

- **Zip/post code format**: Add the details regarding the format of postal code (or zip code). If you do not put anything, QloApps will not verify the validity of the zip code when given a new address for this country.

  *Note: Use the following codes for the postal code: "L" for one letter, "N" for one number and "C" for the country's ISO code (the one which you entered in the ISO field above).*

- **Address format**: Specify the desired address layout for displaying the address to guests. You can use the helper links beside the text field to include additional fields. During live usage, QloApps automatically replaces these placeholders with data from the customer’s account.


- **Active**: Enable the option to make the country available as an option to be selected.

- **Contains states**: It signifies whether the country contains "states" or not. Enable this option if the country contains states.


- **Do you need a tax identification number?**: click on yes if this country requires a tax identification number.
- **Display tax label (e.g. "Tax incl.")**: You can enable or disable the tax label using this option. Choose whether the tax status (included or excluded) should be displayed next to the prices or not.

## Edit a country

To edit a country, click the Edit option and provide all the details just as you did when adding it.

![edit country!](./Countries-Edit.png)

*Note- you can change default your country from  [Localisation](../localization/) menu.*