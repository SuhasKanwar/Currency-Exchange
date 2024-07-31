# Currency Exchange

![Project_013_Currency_Converter](https://github.com/user-attachments/assets/8aa6805a-e55d-4549-9a22-8304a97cd234)

**Description:** Convert currencies instantly with our easy-to-use currency converter. Get real-time exchange rates for over 158 currencies worldwide. Perfect for travelers, traders, and anyone needing accurate currency conversions.

## Features

- **Real-Time Exchange Rates:** Access up-to-date conversion rates for various currencies.
- **Dynamic Currency Selection:** Choose currencies from dropdowns with real-time updates.
- **Amount Input:** Enter the amount to convert and see instant results.
- **Interactive Flags:** Visual representation of selected currencies with flags.

## Technology Stack

- **HTML:** Provides the structure for the currency converter interface.
- **CSS:** Styles the application for a modern and clean look, including responsive design features.
- **JavaScript:** Handles API integration, dynamic updates, and user interactions.

## File Structure

- `index.html` - Main HTML file for the currency converter.
- `assets/` - Directory containing images and stylesheets.
  - `images/` - Contains image files (e.g., favicon).
    - `favicon.png` - Favicon for the site.
  - `style_sheets/` - Contains CSS files for styling.
    - `Project_013_styles.css` - Primary stylesheet.
- `scripts/` - Contains JavaScript files.
  - `app.js` - Handles currency conversion functionality.
  - `country_codes.js` - Contains country codes for dropdown menus.

## Project Structure

### HTML

The HTML file sets up the structure of the currency converter, including the header, form elements for input and currency selection, and buttons for conversion. It includes links to external stylesheets and scripts for functionality.

### JavaScript

The JavaScript file handles dynamic functionalities including:
- **Populating Dropdowns:** Fills currency options in the dropdown menus.
- **Updating Exchange Rates:** Fetches real-time conversion rates and calculates the converted amount based on user input.
- **Updating Flags:** Changes the flag icons based on the selected currency.
- **Swapping Currency Flags:** Allows users to swap the source and target currencies.

### CSS

The CSS file styles the web page, including:
- **General Styling:** Applies layout and design to the body and container.
- **Form Styling:** Defines the appearance of the form, input fields, and buttons.
- **Responsive Design:** Ensures the form is displayed correctly on different screen sizes.

## API Integration

The project uses the ExchangeRate API for fetching real-time currency exchange rates.

- **API Endpoint:** `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest`
- **Dashboard:** [ExchangeRate API Dashboard](https://app.exchangerate-api.com/dashboard/confirmed)

## Note

The project includes fallback code for a different API, which can be used as an alternative if needed.

## Contributors
**Suhas Kanwar**
