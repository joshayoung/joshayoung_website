---
title: What Should I Test
description: When testing code, which portions should be tested and why.
date: 2021-10-15
path: /what-should-i-test
tags: ["testing"]
---

There are two general types of actions that can be performed in function - a command or a query. In general, a query would return a value and a command would mutate state in some way.

At a high level, we want to test a method's return value (if it has one) and any side-effects (if it has any).

_The tricky part is that a method can contain both command and query messages within the same method. This is where it can be difficult to determine which portions to test and which portions to not test._

These distinctions can be further broken down by _incoming_, _outgoing_, and _sent-to-self_ designations. 

## Query Message: 
* Return/change something.
* Have no side-effects.
* Are Idempotent.

## Command Message: 
* Do not return anything.
* Mutate state.
* Have side-effects.
* Not Idempotent.

## Sent-to-Self
* Private methods.
* **Do not test**.

Let's start with Incoming Query tests. Below I have outlined a few examples and what to test for each case.

---

### Incoming Query:
```csharp
public class Knight
{
  public Knight(int bladeLength, int LengthToBeASword) { ... }

  public bool HasSword()
  {
      return BladeLength >= LengthToBeASword;
  }
}
```
* Here would would assert on the **return** value only.

```csharp
  public class Knight
  {
    public Knight(Sustenance sustenance) { ... }

    public int StrengthLevel()
    {
      return sustenance.GetEndurance() + Level();
    }

    private int Level() { ... }
  }
```
* Once again, we only test the **return** value of `StrengthLevel()`. 
* We do not care that `sustenance.GetEndurance()` is called.
  * The call to: `sustenance.GetEndurance()` is not changing anything.
* We do not care what is going on inside the method, just about the return value.

### Incoming Command:
```csharp
  public class Knight
  {
    public int BladeLength;

    public Knight() { ... }

    public void SetBladeLength(int length)
    {
      BladeLength = length;
    }
  }
```
* Because `BladeLength` has changed, here I would test the **side-effect**.
* The side-effect tested should be public.
* The side-effect should be direct (the last class involved).

### Sent-to-Self
```csharp
  public class Knight
  {
    public int BladeLength;

    public Knight() { ... }

    private int AppropriateBattleLength()
    {
      return this.BladeLength - 10;
    }
  }
```
* **Do not test** private methods at all.
* Private methods should be free to change their implementation.

### Outgoing Query:
```csharp
  public class Knight
  {
    public Knight(Sustenance sustenance) { ... }

    public int StrengthLevel()
    {
      return sustenance.EnergyLevel() + 10;
    }
  }
```
* **Do not test**.
* _In this case, this method is an outgoing query message, but also an incoming query message._
  * We would not test the `sustenance.EnergyLevel()` for its return value.
  * We would not test that the `sustenance.EnergyLevel()` was sent.
    * _`sustenance.EnergyLevel()` is an incoming query for another object, that should already be tested elsewhere._
  * We would test the return value of `StrengthLevel()` though.

### Outgoing Command:
```csharp
  public class Knight
  {
    public Knight(Sustenance sustenance) { ... }

    public void IncreaseEnergy() 
    {
      sustenance.SetEnergyLevel();
    }
  }
```
* Test that this method was **called**.
* The method has to be called because other parts of the program are relying on the side effects that result from this method call.
* If `sustenance.SetEnergyLevel();` changes something else in the code base, we do not need to test for that because that would be an integration test. 
  * We just need to verify that the call to `SetEnergyLevel()` was made.
* You will have to use a mock to test this.

### Method with a command and a query:
```csharp
  public bool Save(Student student)
  {
    string? serializeStudent = JsonConvert.SerializeObject(student);

    if (serializeStudents == null)
    {
      return false;
    }

    await this.data.Save("student", student);

    return true;
  }
```
In this case we have a method that has both _commands_ and _queries_.

For the first line: `var st = this.Students.Find(s => s.Id == student.Id);` we are dealing with an outgoing query. It would be tested elsewhere (in this case it is part of the C# language). We would not write any tests for this line. 

For the second line: `if (serializeStudents == null)`, we would want to pass in data that forces the JSON serialization to return null and then assert that the incoming query `return false;` returned false.

Our next line: `await this.data.Save("student", student);` is an outgoing command. We would want to test that this method was called with the correct parameters. 

On our last (incoming query) line (`return true;`), we would want to assert that true was returned.

### Method with Multiple Commands:
```csharp
  public async Task Save(Student student)
  {
    var st = this.Students.Find(s => s.Id == student.Id);
    st.Name = student.Name;
    string? serializeStudents = JsonConvert.SerializeObject(this.Students);
    await this.data.Save("all_students", serializeStudents);
  }
```
In this case, we have a _command_ method with _incoming_ and _outgoing_ commands. 

For the first line: `var st = this.Students.Find(s => s.Id == student.Id);` we are dealing with an outgoing query. It would be tested elsewhere (in this case it is part of the C# language). We would not write any tests for this line. 

Our second line: `st.Name = student.Name;` is an incoming command, so we would want an assert on this value being set.

On our next line: `string? serializeStudents = JsonConvert.SerializeObject(this.Students);`, we are once again dealing with a outgoing query that we cannot and should not test. 

Our next line: `await this.data.Save("all_students", serializeStudents);` is an outgoing command. We would want to test that this method was called with the correct parameters. 

### Summary

In general, these rules can be broken down like this table:

|  | Query      | Command |
|------ | ----------- | ----------- |
| Incoming  | Assert Return Value      | Assert Direct Public Side Effect       |
| Sent-to-Self* | Don't Test   | Don't Test        |
| Outgoing | Don't Test   | Assert Message Sent        |

I have created a repo that outlines these concepts [here](https://github.com/joshayoung/csharp-testing-types), please take a look. I have also listed resources that I have found helpful below.

### Resources:
* [Command Query Separation](https://martinfowler.com/bliki/CommandQuerySeparation.html)
* [Katrina Owen - 467 tests, 0 failures, 0 confidence](https://vimeo.com/68730418)
* [The Magic Tricks of Testing by Sandi Metz](https://www.youtube.com/watch?v=URSWYvyc42M)
* [Writing Specs like Sandi Metz](https://medium.com/@christiancarey1/writing-specs-like-sandi-metz-9f2acf5026cb)
* [Testing Objects with a Functional Mindset](https://thoughtbot.com/blog/functional-viewpoints-on-testing-objectoriented-code)
* [Simplifying Tests by Extracting Side-Effects](https://thoughtbot.com/blog/simplify-tests-by-extracting-side-effects)
* [About Command & Query Separation and Object-Oriented-Design](https://medium.com/swlh/about-command-query-separation-and-object-oriented-design-c5dd4a5e03fb)