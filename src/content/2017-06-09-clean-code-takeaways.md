---
layout: portfolio_entry
title: Clean Code Takeaways
description: Takeaways from reading Clean Code by Robert C. Martin.
date: 2017-06-09
excerpt_separator: <!--more-->
tags: Programming
---

I recently started reading Clean Code by Robert C. Martin. Over the years, I have heard high praise from people who have found this book helpful, and I have finally found the time to start reading it. So far I find this to be an excellent book. As I continue reading it, I will update this post with my general conclusions which I have listed below:

<!--more-->

### Main points of book:

#### Naming:
* Make variables meaningful.
  * Except when in loops, use longer variable names that are searchable and describe the purpose of the variable.
* Class names should be composed of nouns.
* Method names should be composed of verbs.
* Functions ideally should require zero argument.
  * The more arguments a function requires, the worse the function has become.
* Don't use single letter variable names because they are hard to search for.
* Make sure a variable has context by appending the context to the beginning of the name or, preferably, using a class.
* Name variables in a way that meaning is clear without the need for a comment.
* Never use the word 'variable' in a variable or the word 'table' in a table name, etc.
* Use proper spelling for variable names.
  * Make sure they can be pronounced.

#### Functions:
* Functions should be as small as possible.
  * They should do only one thing.
* If a function can be divided into separate parts that accomplish different tasks, it is too large.
* A function should only work on one level of abstraction.
* Always use a longer name for a function, rather than a snort name with a comment describing it.
* Always return a value from a function rather than changing its input argument.
* Never use 'flag' arguments like 'true' or 'false' in a function.
  * Instead use two functions for each purpose that the flag would have toggled.
* A function written with more than two parameters would be better written as a class or broken up into multiple functions.
  * Also consider passing in an object to a function instead of two or more arguments.
* Write functions in the form of verb(noun).
  Also consider writing a function that spells out the expected order of arguments in the function name (i.e. doesCatEqualDog(cat, dog);).
* A function call should not exhibit side affects. In other words, if a function is clearly designed to do one thing, it should not do something else that is not obvious (such as checking an argument's value, but also saving that argument as a cookie).

#### Comments:
* If possible, make your code more clear (proper function naming, etc) instead of relying on your comment to explain what you are doing with the code.
* Comments have a tendancy to gradually become inaccurate as the code gets older.
* Using long lists of changes at the top of a piece of code is no longer necessary due to version control systems.
* Resist the urge to comment-out old code. This old code will be tracked by your version management, so delete it.

#### Formatting:
* Chose a programming code-formatting style and stick to it.
 - If you are working as a part of a team, pick a style the team agrees to; and everyone on the team should abide by that style.
 * Variables should be defined close to where they will be used.
 * Control variables should be defined in the control structure (i.e. 'i' used in a loop).
 * Class variables should be defined at the top of the class.
* When a function calls another function, the function that does the calling should be calling a function that has been defined vertically below its definition.
* Line lengths of 120 characters or less are recommended.
* He uses spacing according to the precedence of the operator (i.e. 2*3 + 4).

#### Testing:
* Insure that your tests are clean and readable.
* Make sure your tests are testing a single thing.
* F.I.R.S.T.
  - Fast
    * Tests should run quickly.
  - Independent
    * Each test should be independent and able to be executed on its own.
  - Repeatable
    * You should be able to run the test in any environment (Dev, QA, Locally, etc).
  - Self-Validating
    * All tests should return a boolean (true or false).
  - Timely
    * Write the test for your production code immediately before writing the production code, not afterward.

#### Classes:
* Classes should start with all of your variables (public then private variables).
* Classes should be small.
* Classes should have a single responsibility.
* A class name should describe its single responsibility.
* A class should follow the <a href='https://en.wikipedia.org/wiki/Single_responsibility_principle'>Single Responsibility Principle</a>.