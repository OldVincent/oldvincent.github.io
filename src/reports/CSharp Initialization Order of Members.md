---
title: CSharp Initialization Sequence of Members
date: 2024-08-23
isOriginal: true
tag:
 - CSharp
 - Fundamentals
---

## Initialization Order for a Single Instance

Consider a part of CSharp code as follows, and try to guess what is the value of `instance.Number`:

```csharp
var instance = new SampleClass()
{
    Number = 3;
};

Console.WriteLine(instance.Number); // What's the value of property 'Number'?

class SampleClass
{
    public int Number {get; set;} = 1;

    public SampleClass()
    {
        Number = 2; 
    }
}
```

The answer is 3. In this code snippet, three different styles of initialization are performed:

1. Initializer expression: `public int Number {get; set;} = 1;`;
2. Initialization in the constructor: `public SampleClass(){ Number = 2; }`;
3. Object initializer: `var instance = new SampleClass(){Number = 3;};`;

The final value of `Number` is 3, because these initializaitions are performed in the order of initializer expression, constructor, and then object initializer. `Number` is firstly set to 1 in the initialization expression, then the constructor is invoked, where `Number` is set to 2, finally the object initializer set `Number` to 3.

If there are multiple initializations within the same category, then the actual execution order is the  order in which initializers appear. For example:

```csharp
var instance = new SampleClass()
{
    Number = 3,
    Text = "Hello"
};
```

Firstly `Number` will be set to 3, then `Text` will be set to "Hello". And in following code:

```csharp
var instance = new SampleClass()
{
    Text = "Hello",
    Number = 3
};
```

Firstly, `Text` will be set to "Hello", then `Number` will be set to 3.

Likewise, the execution order of initializer expressions is the order in which these members are defined.


## Full Initialization Order, for Static Members and Parent Class

When take static members and parent class into account, the sequence is a lot more complicated:

1. Initializer expressions of static members of child class;
2. Static constructor of child class;
3. Initializer expressions of instance members of child class;
4. Initializer expressions of static members of parent class;
5. Static constructor of parent class;
6. Initializer expressions of instance members of parent class;
7. Instance constructor of child class;
8. Instance constructor of parent class;
9. Object initializer.

This sequence can be simplified as:

1. Static - Child
    - 1.1 Static - Child - Initializer - Expression;
    - 1.2 Static - Child - Constructor;
    - 1.3 Instance - Child - Initializer Expression;
2. Static - Parent
    - 2.1 Static - Parent - Initializer Expression;
    - 2.2 Static - Parent - Constructor;
    - 2.3 Instance - Parent - Initializer Expression;
3. Instance - Constructor
    - 3.1 Instance - Parent - Constructor;
    - 3.2 Instance - Child - Constructor;
4. Object Initializer;

It is actually not so hard to understand. The general concepts are:
- Static ones are executed before non-static ones;
- Initializer expressions are executed before constructors;

The only exception is the initializer expression of instance members. This is because somehow the compiler treat initializer expressions as "static contexts", and no access to instance members are allowed in initializer expressions, so they are executed in the static stage.

The parent constructor is invoked before the child constructor, because from the perspective of semantics, the child object is construcuted upon the parent object, so at the time when the child object is invoked, its members which belongs to the parent class should be ready to use.

But the static constructor of the parent class is invoked after the static constructor of the child class, because the initialization of static members take place when any member of a type is going to be accessed. The runtime firstly access the child class, so its static members are initialized, and then the runtime find its parent class, so static members of its parent class are initialized.

Object initializer will be compiled as normal member assignments and function calls to property setters, so it will be executed last.