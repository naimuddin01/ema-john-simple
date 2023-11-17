# ema-john-simple ( e-commerce platform )

An e-commerce platform developed with node.js and react , providing a smooth shopping experience for users. Features include user registration and login, product browsing, cart management, secure checkout with PayPal integration and SSL, and order history tracking in customer profiles. Even guest users can shop hassle-free. Also, product lists and details can be fetched with REST APIs.

## Table of Contents

- [Overview](#overview)
- [Project Installation](#project-installation)
  - [Environment Variable](#configure-the-env-file)
  - [SSL Integration](#ssl-integration)
  - [Paypal Integration](#paypal-integration)
- [Expectation](#expectation)
- [Future Work](#future-works)

## Overview

Welcome to my E-Commerce Platform, a robust and user-friendly online shopping solution built with react and node.js. Our platform offers a rich set of features for both registered and guest users.

**Key Features :**

1. **User Authentication:** User registration and login for personalized shopping experiences. Guest users can explore and shop without signing in.

2. **Product Catalog:** Browse an extensive product catalog with detailed descriptions and images. Fetch product lists and details through APIs.

3. **Shopping Cart:** Add items to the cart and manage quantities. Easily review and modify your cart's contents.

4. **Secure Checkout:** Integration with PayPal and SSL for secure and trusted payment processing.

5. **Order History:** Completed orders are automatically logged in the user's profile. Easily track past orders and reorder favorite items.

6. **APIs:** Utilize RESTful APIs to retrieve product lists and details programmatically.

## Project Installation

Follow these steps to set up and run this e-commerce platform on your local machine.

**Clone the Repository**

```bash
https://github.com/naimuddin01/ema-john-simple.git
```

**Install project dependencies:**

```bash
cd your-project
npm install
```

**Set up Firebase:**
- Make sure you have a Firebase project created on the Firebase Console.
- Authenticate with Firebase and select your project:
```bash
firebase login
firebase use --add
```

**Usage:**
Explain how to use your project. Include any specific commands or scripts that users need to run. For example:
```bash
npm start
```


# **Set Up the Backend and Database**
**Here is the Backend Code :** [Backend](https://github.com/naimuddin01/ema-john-simple-server) 

Provide step-by-step instructions on how to install and set up your project. Include any necessary commands or configuration steps. For example:

**Clone the Repository**
```bash
https://github.com/naimuddin01/ema-john-simple-server.git
```

**Install project dependencies:**
```bash
cd your-project
npm install
```

### Configure the .env file backend

Explain how to set up the necessary configuration, especially the .env file.
1. Create a .env file in the project root directory:
   ```bash
    touch .env
   ```
2. Add the following environment variables to your .env file:
    ```bash
    DB_User=your-mongoBD-project-userName
    DB_PASS=your-mongoBD-project-PASS
   ```
    
3. Add the following environment variables to your .env file for SSL:
  ```bash
  SSLCommerz_StoreID = your-store-id
  SSLCommerz_StorePassword = your-store-password
   ```

### SSL Integration

General steps to integrate SSLcommerze payment system

1. **Register with the Payment Gateway:** Sign up [here](https://developer.sslcommerz.com/registration/) for an account with the chosen payment gateway. During registration, you will receive API credentials, such as API keys and other relevant information.

2. **Install Required Packages:** Required packages are already installed if you install the `requirements.txt` file. But you can install sslcommerze package manually by running the following command

  ```bash
  npm install sslcommerz-lib
  ```

## Expectation

The expectations for my e-commerce platform project built using Django and Django Rest Framework can be outlined as follows:

1. **User-Friendly Shopping Experience**

2. **Authentication and User Profiles**

3. **Product Catalog**

4. **Secure Payment Processing**

5. **Order History and Tracking**

6. **API Integration**

7. **Performance and Scalability**

8. **Maintenance and Updates**

## Future Works

Here are some potential future work areas to consider:

1. **Product Recommendations:** Implement recommendation algorithms to suggest products to users based on their browsing and purchase history.

2. **Advanced Search and Filtering:** Enhance the search functionality with filters, tags, and categories to make it easier for users to find products.

3. **Wishlist and Favorites:** Enable users to create wishlists or mark products as favorites for future reference.

4. **Marketing and Promotions:** Develop marketing features such as promotional codes, discounts, and targeted email campaigns to attract and retain customers.

5. **Multi-Vendor Support:** Transition this platform into a multi-vendor marketplace, enabling other sellers to list their products.

6. **Analytics and Reporting:** Add analytics tools to track customer behavior, sales data, and overall platform performance..
