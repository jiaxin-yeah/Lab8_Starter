# Lab 8 - Starter
Name: Jiaxin Ye and Sisy Chen <br>
1) Where would you fit your automated tests in your Recipe project development pipeline? <br>

**Answer:** Within a Github action that runs whenever code is pushed since we don't have to manually run the tests if we're within a github action. Also, we can run the tests whenever the codes are published so that we can quickly identify if our codes are correct or not. <br>

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no) <br>

**Answer:** No since end to end test emulates user actions from start to finish. If we want to test if a function is returning the correct output, unit testing is a better choice. <br>

3) Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. <br>

**Answer:** I wouldn't since the "message" feature involves an interative function: writing and sending a message to another user, so end to end testing is more suitable. <br>

4) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters. <br>

**Answer:** I would since the "max message length" feature just requires us to check the length of a single function. It won't affect the behavior of other functions. So, unit testing is a good choice. <br>
