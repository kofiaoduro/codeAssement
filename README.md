
Question 1: Question 1 was done in the folder called section 1

Question 2: == Is an equal sign that can compare a number to a string or a number to a Boolean

Example “2” == 2 would return true

But if you were to use === known as a strict equal to “2” === would return false. This equality checks to ensure both data types are the same



Coding Challenge: Simple Counter Component
Question 1:  was done under my counter Component

Question 2: Use Effect: The purpose of use Effect is to run code on every render.  For example let say we make a fetch request to an Api. The Api request will run on every render. If the data changes the use effect will rerender the data again



Section 3: Node.js

1)	my node application is connected to my server and client folder
2)	Ok first asynchronous operations essentially return a promise. what this  means is that when a data is fetched from a api  it returns a promise due to the fact that api’s might take long to fetch and this promise essentially means that the data be available or in the future. Node js handles this by moving to the next task without having to wait for the Api to load. This is beneficial be cause it leads to improved performance especially in applications that handle a high volume of request













Section 5:  Also provided information as to how I would create a user table in mongoDb in my models folder under the server folder
1)	Im not proficient in SQL but to create a user table this is how I would go about it 

CREATE TABLE USERS (
	userId: INTEGER PRIMARY KEY AUTOINCREMENT,
	name: TEXT NOT NULL,
	Email: TEXT NOT NULL
);

To insert one sample user
INSERT INTO USERS(name, email) values (“Kevin”, “Kevin@gmail.com”);
SELECT * FROM USERS

