# Lab 8 - Starter

## Team

Team Member: Leon Tan.

I am doing this on my own.

## "Check Your Understanding" answers

Q1: Where would you fit your automated tests in your Recipe project
development pipeline? Select one of the following and explain why.

Ans: Within a Github action that runs whenever code is pushed because
this is the only way to ensure that the main branch always passes all
tests.

Q2: Would you use an end to end test to check if a function is
returning the correct output?

Ans: no. End-to-end test is meant for multi-steps procedures.

Q3: Would you use a unit test to test the “message” feature of a
messaging application? Why or why not? For this question, assume the
“message” feature allows a user to write and send a message to another
user.

Ans: the message feature involves multi-step interaction. It should be
tested with end-to-end test.

Q4: Would you use a unit test to test the “max message length” feature
of a messaging application? Why or why not? For this question, assume
the “max message length” feature prevents the user from typing more
than 80 characters.

Ans: yes. This is a unit test that ensures a message object never
accepts message text longer than N chars.

