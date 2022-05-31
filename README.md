Jonathan's Juggling Ball Market is a responsive database which stores product names, types, colors, stock quantities, prices, and images particular to juggling balls added by users. 

The market offers a variety of customization when it comes to storing this data, and does so by the implementation of the seven "RESTful Routes" seen below:

/balls/ - GET - INDEX
/balls/new - GET - NEW
/balls/:id - DELETE - DESTROY
/balls/:id - PUT - UPDATE
/balls - POST - CREATE
/balls/:id/edit - GET - EDIT
/balls/:id - GET - SHOW

These routes provide users access to the full database through the Index page, which links to the indiividual items' "Show" pages, and also offers users the ability to modify data, delete data, buy a product, and create a new one. 

The Show pages for each item lists all the data collected when a new item is added (these elements are listed in the opening of this document.) The Show page--like the Index page--provides users access to buy an item, modify it, and delete it.

When an item is out of stock, the Buy buttons on both the Index and Show pages are removed, and the latter page lists the message "Out of Stock." Please note that stock quantities are always the first specified piece of information on each item's title. 
