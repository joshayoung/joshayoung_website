# Tips

These are some tips for development that I have found helpful. These also serve as helpful future reminders.

* Do not add your IDE files to your repos .gitignore file. Instead add them to a global .gitignore file.
* Before writing any code, build a design with a diagramming tool using (UML, Entity Diagram, etc.) to insure you are programming the right thing.
* Sync with your team on a continual basis through the progress of your work by opening small pull requests to get their feedback.
* Never push production code to master unless it has good tests (unit, integration) backing that code.
* Before building out a new feature test it with a "spike" / "discovery".
  * This discovery work is typically code that you build out quickly that has no tests. It provides a quick way to develop a workable/feasible plan.
* Programming Cases:
  * kebab-case
  * camelCase
  * PascalCase
  * snake_case
* When naming a method, use a name that signifies either 'What It Does' or 'What It Is'.
  * Do not use a method name that signifies how it does it.
* Make sure your editor displays trailing white space. This will make your diffs easier and prevent unnecessary changes.
* When building a mobile app, do not let the API's design determine how your build your mobile app's model(s).
