# Inventory Management System

This is a basic web-based inventory management system that lets you:

- Add products with ID, name, and price.
- Prevent duplicate products using a Set.
- Display all products in the inventory.
- Calculate the total inventory value.
- Search for a product by name.
- Change the price of a product.
- Delete a product from the inventory.
- Categorize products using a Map to group by category.
- Display products grouped by category.

## Features

- Uses JavaScript objects to store products.
- Ensures no duplicate product names with a Set.
- Uses Map to store categories and their products.
- Interacts via simple HTML form inputs and buttons.
- Displays output on the page in a clean format.

## How to Use

1. Fill in the product information (ID, name, price) and click **Add Product**.
2. Use the **Show Inventory** button to list all products.
3. Use **Total Inventory Value** to see the total cost of all products.
4. Search products by entering the product name and clicking **Search Product**.
5. Change a product’s price by entering its name and the new price, then clicking **Change Price**.
6. Delete a product by entering its name and clicking **Delete Product**.
7. View products grouped by category by clicking **Show Categories**.

## Code Highlights

- Product names are stored in a Set to avoid duplicates.
- Categories are managed using a Map, grouping product names by category.
- Loops used:
  - `for...in` to iterate over product objects.
  - `forEach` to iterate over Sets and Maps.
  - `for...of` to iterate over Sets and Arrays.
