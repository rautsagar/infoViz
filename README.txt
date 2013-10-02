The purpose of this assignment is to provide you with a hands-on experience of building interactive visualizations on the web. The visualization framework/toolkit you will use is D3. Attached below is a csv file containing data about coffee product sales at a fictional company You are required to create an interactive barchart visualization using the data.

We understand that some students in class do not have a programming background. Hence, we will provide tutorials to assist on the assignment both in class and outside class. In addition, the bottom of this assignment contains a list of D3 resources that may be helpful. Chad Stolper's tutorial slides can be found here as well. You can also find Ramik's scatterplot example from Monday's class.

To begin, we have created a skeleton or template of the assignment for you to start with. It is available at: runnable template and code for template. The visualization shown in the template consists of two drop downs and an update button. Once the user chooses an attribute to show on the x-axis, say profit, and for the y-axis, say region, clicking on the update button should show a barchart with accumulated sum of profits over the different regions.

The following video shows what a correct final version of the assignment should look like, and it will help you understand what you need to implement. (Solution demo video)

Grading: The assignment will be graded out of a total of 10 points. There are two options for how you handle aggregation of the individual data values (this is one of the trickier aspects of D3 programming).

    You can choose to generate the 4 sets of summary stats in an Excel file. The 4 sets would be sum of sales by region, sum of profits by region, sum of sales by category, and sum of profits by category. You can create four csv files with those values and use that as input for the different views. If you do this, you can still earn a total of 10 points should your program work correctly.
    You can choose to generate the 4 sets of summation stats directly in javascript using D3. If you do this, a correct implementation would give you 2 extra credit points as a bonus. 

Submitting your assignment: We will use t-square to submit the code for the assignment. It is due at the start of class on the due date. More details about the submission procedure will be given in class. 