# CYPRESS-FRAMEWORK
Simple Factorial Web App with cypress + Simple Test Case Manual and Automated Documents 

# Test Document for Simple_Factorial-spec.cy.js
## _The Assessment of Quality Engineering_

[![](https://img.shields.io/badge/-odieSDET-1da1f2?logo=twitter&style=flat-square&logoColor=white)](https://twitter.com)
[![](https://img.shields.io/badge/-odieSDET-c32aa3?logo=instagram&style=flat-square&logoColor=white)](https://instagram.com) 
[![](https://img.shields.io/badge/-odieSDET-007bb5?logo=linkedin&style=flat-square&logoColor=white)](https://www.linkedin.com/in/ahmad-dodi-yandra-9424b4a9/)
[![](https://img.shields.io/badge/-odieSDET-ff0000?logo=youtube&style=flat-square&logoColor=white)](https://youtube.com)  
</div> 

## Test Plan & Strategy : Simple Factorial
> Access the web application: Open a web browser and navigate to http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io. Check that the web application is accessible and loads without any errors.

> Test the functionality of the application: Test the factorial calculation feature by entering different input values and verifying that the output is correct. Check for boundary conditions, negative values, and large values to ensure that the application handles them correctly.

> Identify issues: During testing, note down any issues you encounter with the application. This may include functional bugs (e.g. incorrect calculation results), usability bugs (e.g. confusing UI elements), copywriting issues (e.g. typos), and other issues.

> Document issues: Create a professional QA report that documents all the issues you identified during testing. Include details such as the steps to reproduce the issue, the expected behavior, and the actual behavior. Categorize the issues based on severity and priority to help the development team prioritize and address them.

> Design automated functional testing code and scripts: Using Katalon Studio or Cypress, design and implement automated functional testing scripts that test the factorial calculation feature of the web application. Make assumptions for the application's standard requirements and ensure that the expected results for calculation and website behaviors are met.

> Provide clear instructions: Write clear instructions/guide documents on how to set up and execute the automated testing scripts. Include sample results for reference.

> Document test cases: Create a comprehensive test cases document that includes both manual and automated test cases you conducted. List all the test cases and their expected results.


### Identify issues in the given web application:

##### Functional bugs:
Test the basic functionality of the web application by inputting valid and invalid numbers to calculate the factorial and verify that the calculated result is accurate.
Test the application with edge cases such as inputting large numbers, decimals, and negative numbers and ensure that the application provides an appropriate response.
Verify that the application provides error messages for invalid input and empty input fields.

##### Usability bugs:
Test the user interface for ease of use and consistency in design.
Check if all buttons, links, and input fields are functioning correctly.
Test the responsiveness of the application on different screen sizes and devices.
Check the accessibility of the application for users with disabilities.

##### Copywriting issues:
Review the text used in the application and ensure that it is grammatically correct and clear.
Verify that all the text is readable and appropriately sized.
Check the consistency of the text used in the application, such as button labels and error messages.

##### Other factors:
Check the performance of the web application by monitoring the page load time and response time.
Test the security of the application by attempting SQL injection attacks and cross-site scripting attacks.
Test the compatibility of the application with different browsers and operating systems.
Verify that the application is compliant with relevant laws and regulations, such as GDPR and CCPA.


### Test Objective
The objective of this test plan and strategy is to verify the functionality of the Simple_Factorial-spec.cy.js test script.

### Test Scope
The test will cover the following scenarios:
- The factorial of 0 is equal to 1
- Factorial of positive integer should be calculated correctly
- Negative integer input should display error message
- Non-numeric input should display error message
- Decimal number input should display error message
- Large number input should be calculated correctly
- Large number input should be calculated correctly with null output

### Test Environment
The tests will be executed on the following environment:
- OS : Windows 10
- Browser: Chrome 96.0.4664.45
- Cypress version: 8.5.0

### Test Case 1: The factorial of 0 is equal to 1
##### Test ID: TC001
###### Description:
This test case verifies that the application calculates the factorial of 0 correctly.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value '0' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value '0' is entered into the input field.
- The application displays the message 'The factorial of 0 is: 1'.

###### Test Data:
- Input value: 0
###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application correctly displayed the message 'The factorial of 0 is: 1'.

### Test Case 2: Factorial of positive integer should be calculated correctly
##### Test ID: TC002
###### Description:
This test case verifies that the application calculates the factorial of a positive integer correctly.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value '5' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value '5' is entered into the input field.
- The application displays the message 'The factorial of 5 is: 120'.

###### Test Data:
- Input value: 5

###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application correctly displayed the message 'The factorial of 5 is: 120'.

### Test Case 3: Negative integer input should display error message

##### Test ID: TC003

###### Description:
This test case verifies that the application displays an error message when a negative integer is entered into the input field.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value '-5' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value '-5' is entered into the input field.
- The application displays no message.

###### Test Data:
- Input value: -5

###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application did not display any message.

### Test Case 4: Non-numeric input should display error message

##### Test ID: TC004

###### Description:
This test case verifies that the application displays an error message when non-numeric input is entered into the input field.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value 'test' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value 'test' is entered into the input field.
- The application displays the message 'Please enter an integer'.

###### Test Data:
- Input value: test

###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application correctly displayed the message 'Please enter an integer'.

### Test Case 5: Large number input should be calculated correctly

##### Test ID: TC005

###### Description:
This test case verifies that when a large number (greater than 100) is entered into the input field, the application correctly calculates and displays the factorial of that number.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value '170' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value '170' is entered into the input field.
- The application displays the message 'The factorial of 170 is: 7.257415615307994e+306'.

###### Test Data:
- Input value: 170

###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application correctly displayed the message 'The factorial of 170 is: 7.257415615307994e+306'.

### Test Case 6: Decimal number input should display error message

##### Test ID: TC006

###### Description:
This test case verifies that when a decimal number is entered into the input field, the application correctly displays an error message.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value '5.5' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value '5.5' is entered into the input field.
- The application displays the message 'Please enter an integer'.

###### Test Data:
- Input value: 5.5

###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application correctly displayed the message 'Please enter an integer'.

### Test Case 7: Large number input should be calculated correctly with null output

##### Test ID: TC007

###### Description:
This test case verifies that when a large number greater than 170 is entered into the input field, the application correctly displays a null output.

###### Test Steps:
- Navigate to the application URL (http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/)
- Enter the value '171' into the input field with the ID '#number'
- Click on the 'Get Factorial' button with the ID '#getFactorial'

###### Expected Result:
- The application home page is displayed.
- The value '171' is entered into the input field.
- The application displays the message 'The factorial of 171 is: null'.

###### Test Data:
- mInput value: 171

###### Test Execution:
Test execution will be performed using the Cypress framework.

###### Test Results:
- The test passed successfully.
- The application correctly displayed the message 'The factorial of 171 is: null'.
