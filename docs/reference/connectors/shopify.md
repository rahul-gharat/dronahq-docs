---
sidebar_position: 1
title: Shopify
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Shopify Connector provides seamless integration with the Shopify e-commerce platform, enabling you to manage and automate various aspects of your online store. With this connector, you can retrieve product information, manage orders, update customer data, and perform other essential e-commerce tasks directly from your application. 

## Prerequisite

1. API Key and Password: Obtain the API credentials (API Key and Password) from your Shopify admin panel. Go to "Apps" > "Manage private apps" > "Create a new private app" to generate the required credentials.

3. Store Subdomain: Note down the exact subdomain of your Shopify store, as they will be used to establish the connection between your application and the store.

4. Scopes and Permissions: Configure the necessary access scopes and permissions for the private app in Shopify. Make sure to grant appropriate permissions based on the actions you plan to perform using the connector.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key and password` and `Subdomain` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.


### Configuring Custom Apps

1. Create Custom App - For more info refer [this](https://help.shopify.com/en/manual/apps/app-types/custom-apps)
2. Go to `Configuration` Tab, Click on Configure Button under `Admin Api Integration` Section & provide scopes for your app & Click Save

:::info NOTE
Add atleast `read_products` scope. For consuming other Api’s for Customers, Price Rules, Discounts, you will to add `read_customers` or `write_customers`, `read_price_rules` or `write_price_rules` and `read_discounts` or `write_discounts` respectively.
:::

3.  Go to Api Credentials Tab and click on Install app
<figure>
  <Thumbnail src="/img/reference/connectors/shopify/creds.jpeg" alt="Credentials to connect" />
  <figcaption align = "center"><i>Credentials to connect</i></figcaption>
</figure>

-  Provide account name and Enter your Shopify Subdomain. For Example, subdomain of `https://MYSHOP.myshopify.com/` is `MYSHOP` even if you use a custom domain like `https://name-of-shop.com/`.



<figure>
  <Thumbnail src="/img/reference/connectors/shopify/details.png" alt="Shopify with configuration details." />
  <figcaption align = "center"><i>Shopify with configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

| Action                      | Description                                                                                           |
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| CreateProduct               | Create a new product in your Shopify store.                                                          |
| GetProductList              | Retrieve a list of products from your Shopify store.                                                 |
| GetProductDetails           | Get details of a specific product in your Shopify store.                                             |
| UpdateProduct               | Update details of an existing product in your Shopify store.                                         |
| CreateProductVariant        | Add a new variant (option) to an existing product in your Shopify store.                             |
| GetOrderDetails             | Retrieve details of a specific order in your Shopify store.                                          |
| GetAllOrders                | Get a list of orders from your Shopify store.                                                        |
| CreatePriceRule             | Create a new price rule (discount) for products in your Shopify store.                                |
| GetPriceRules               | Retrieve a list of all price rules from your Shopify store.                                          |
| GetSinglePriceRule          | Get details of a specific price rule in your Shopify store.                                          |
| DeletePriceRule             | Delete a price rule from your Shopify store.                                                         |
| CreateDiscountCode          | Generate a new discount code for a price rule in your Shopify store.                                  |
| GetAllDiscountCodes         | Get a list of discount codes associated with a price rule in your Shopify store.                      |
| GetSingleDiscountCode       | Retrieve details of a specific discount code in your Shopify store.                                   |
| DeleteDiscountCode          | Delete a discount code from a price rule in your Shopify store.                                       |
| GetAllCustomers             | Retrieve a list of all customers from your Shopify store.                                            |
| GetSingleCustomer           | Get details of a specific customer in your Shopify store.                                            |
| RetrieveOrdersByCustomer    | Retrieve orders associated with a specific customer in your Shopify store.                            |
| SearchCustomerByQuery       | Search for customers using a query in your Shopify store.                                            |
| CreateCustomer              | Create a new customer in your Shopify store.                                                         |
| SendInviteToCustomer        | Send an invitation to a customer to create an account in your Shopify store.                           |
| UpdateCustomer              | Update details of an existing customer in your Shopify store.                                        |

