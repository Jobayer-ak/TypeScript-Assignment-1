# TypeScript-Assignment-1

### 1.What is TypeScript, and how is it different from JavaScript?
Typescript is a typed language that's a superset of JavsScript. It understands all of JavaScript's syntax. It has ability to report errors when the types don't match.
TypeScript uses compile time type checking. Which means it checks types before running code, not while running code where JavaScript cannot. In TypeScript syntax always mention the type where we can infer that what type of data is being passed. 

### 2.Can you explain the difference between "interface" and "type" in TypeScript?
interface and type have similar puposes. Using both we can define the shape or structure of objects. There are some differences between interface and type.
* we declare interface using interface keyword. Declaring type we use type keyword.
* example: ``` interface Person {name: string; age: number}``` --- ```type Person = {name: string; age: number}```
* interface can be extended like class using "extends" keyword. But type cannot be extended.
* we can redeclare existing interface with the same name and their members will be merged into a single interface. But, if we redeclare existing type with the same name, it will overwrite the previous definition.
* interface can be implemented by classes where type cannot be. Type used to define compled types, unions, intersections and mapped types

### 3.Can you give an example of how to use generics in TypeScript?
```
function greetings<T>(greet: T): T {
    return greet;
  }
console.log(greetings("Good Evening!!!"));
```  
### 4.What is the difference between an "unknown" and "any" type in TypeScript?
* "unknown" type are not assignable to other types without explicit type checking or performing operations. But, "any" type can be assignable to any others type without any type checking. It doesn't need any type checking or perfoming any operations explicitly.
* unknown type has more safety than any type. any type can lead to errors. 

  ### 5.Can you give an example of how to use enums in TypeScript?
example: 
```
enum Name {
  rahim, // rahim = 0
  karim, // karim = 1
  jamal, // jamal = 2
  kamal, // kamal = 3
}

enum Direction {
  Up = 1, // Up = 1
  Down,  // Down = 2
  Left,  // Left = 3
  Right, // Right = 4
}
```
### 6.What is the "as" keyword used for in TypeScript?
### 7.Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?   
