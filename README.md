## **MEAN TERM FOUR: ANGULAR**

### By Lara Cook | 190218

<br />

---

## **Introduction**

---
### Single Page Application E-commerce Site
<br />

**The Brief**

Create a single page application online store of our choice. The requirements being that it needs to be a fully functioning SPA, functional routes to several pages, have dynamic and reactive components and have product pages that display relevant information.

<br />

**The Project**

The Shoebox is an online shoe retail store, supplying a variety of men's, women's and kids Nike branded shoes.

<br />

---

## **Run the Project**

---

<br />

After downloading the code, navigate to the project folder in the console. Alternatively, open the project in Visual Studio Code and open the terminal.

Run the server and open the project.

<br />

```
$ http-server . -p 3333
```

<br/>

**Open the project in your browser**

[http://localhost:3333]

<br />

---

## **Functions & Features**

---
<br />

### **Home Page**

- **View general information on The Shoebox**
- **See top 3 current favourite shoes** *(added using ng-repeat and filtered using ng-show to find all shoes with the favourite attribute equal to true)*

<br />

### **Footwear Page**

- **See all available shoes: image, name, price** *(added using ng-repeat)*
- **Search bar that allows you to quickly search shoes** *(made with a built-in angular filter)*
- **Select the shoe you want to view** *(using $params to get id of selected shoe)*

<br />

### **Product Page**

- **View all information on selected shoe** *(using $params to get id of selected shoe)*
- **Write a review on the selected shoe that appears with the other reviews - does not affect reviews on other shoes** *(cannot submit without filling in required fields and choose star rating with reactive stars)*
- **View all reviews on the selected shoe** *(added using ng-repeat, ordered using orderBy and filtered using ng-show to only shoe the reviews for that specific shoe based on the id)*

<br />

### **Contact Page**

- **Table of contact details** *(added using ng-repeat)*
- **Feedback from customers on the store in general** *(added using ng-repeat and ordered using orderBy)*
- **Write your own feedback that appears with the rest** *(cannot submit without filling in required fields correctly)*

<br />

### **About Page**

- **View information about The Shoebox**