# CYPRESS-FRAMEWORK
Simple Factorial Web App with cypress + Simple Test Case Manual and Automated Documents 

# Test Document for Simple_Factorial-spec.cy.js
## _The Assessment of Quality Engineering_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Test Plan: Simple_Factorial-spec.cy.js
### Test Objective
The objective of this test plan is to verify the functionality of the Simple_Factorial-spec.cy.js test script.

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
