# Tips

These are some tips for development that I have found helpful. These also serve as helpful future reminders.

* Do not add your IDE files to your repos .gitignore file. Instead add them to a global .gitignore file.
* Before writing any code, build a architectural design with a diagramming tool using (UML, Entity Diagram, etc.) to insure you are programming the right thing.
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
* When writing a ticket for a kanban board (i.e. Jira, Trello, etc) in a team environment, include enough details in the ticket so that any one on the team can pull the ticket without having to consult anyone else.
* When using an external service (library, API, etc), try not to include the language of that project inside your application so that you can easily switch library's or APIs in the future without having to change your model/service names.
* Do not use exceptions for flow control.
* Before you start debugging an issue, always ask the simple questions first: "is the plugin initialized correctly", "am I calling the right function", is my element hidden, etc.
* If your code base is suddenly failing and you cannot determine why, find the last commit where it worked and see what has changed in each commit since. You should be able to `git checkout [hash of commit]` to see if it worked at that point.

### Maui / Xamarin
* If you add a page as a singleton and have a form it it, it will keep the data you type in the form everytime you re-open the apge.
* Having an initialize method keeps most of the code for the vm out of the constructor. This is recommended practice by Microsoft, and allows for async methods.
* The wrong order of DI classes in Xamrin will cause the app to crash for no reason (sometimes it will not tell you, the app will just close).
* if x:Class it not correct, the xaml page will be blank!
* On IOS, if you have the ‘Entry’'s `MaxLength` set a a number that is smaller than the length of the value that is binding to, it will cause a crash on IOS (at least if it is in a CarouselView). This same error does not occur in Android. Error: “Value cannot be null. (Parameter 'fromPosition’)”.
* If the signature of your command is incorrect, it will not be triggered (i.e. if you call it with a string and the command is defined as Command<int>, it will never be called).
* If you want to set a bindable property to a fallback value, set the defaultValue to a value you can test against, like an empty string. Then check for that value in your property change method. This will tell you whether the component set that field.
* If the value is a class (ValidatableObject, MyClass, etc), then I do not need to set the BindingMode to be TwoWay for it to update the value in the view model. If I am using a type such as: 'int', 'string', then I have to set the BindingMode to be TwoWay for it to update the value in the view model.
* A Bindalbe property must have Field and Field + 'Property' to work (i.e. MyText paired with MyTextProperty)!
  * The Bindable Property value also has to be static (most of the time), or it will not work.
* Disabling a label does not disable the tap gester recognizer.
* The 'CanExecute' method is only run during instantiation or when a parameter is passed to the command.
* ScrollView will not scroll if it is contained in a top level VerticalStackLayout. The top level seems to need to be a grid.
* A string value defined in your view model (i.e. Errors) will take up space on the page, even if it is empty, if it has `Padding` applied to it. In other words, the padding will take up space, and if it has a background color, you will see the background even when the `Errors` string is empty.
* Using CSS in Maui, at this point, works but does not seem to apply itself correctly consistently, at least in the simulator. This could improved later. And some of the maui element values do not seem to be able to be applied via CSS.
* In XAML styles, if you have a margin style for "top" for instance, and you add another style class for "bottom" margin, it will override the previous one (i.e. StyleClass="TopMargin10, BottomMargin10"). The resulting element would have a bottom margin of 10, but not a top margin, or vicer-versa. The only way to circumvent this is to define a style that has both (i.e. <Style Class="BothTopBottom10" (i.e. <Setter Property="Margin"> <Thickness Top="10" Bottom="10" /></Setter></Style> and apply it like this: StyleClass="BothTopBottom10")