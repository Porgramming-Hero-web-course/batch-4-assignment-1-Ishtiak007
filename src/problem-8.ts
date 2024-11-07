{
  // problem-8
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  // Function ------>validateKeys()
  const validateKeys = <T extends object, K extends keyof T>(
    person: T,
    arr: K[]
  ): boolean => {
    if (arr.every((key) => key in person)) {
      return true;
    }
    return false;
  };

  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  console.log(validateKeys(person, ["name", "age"]));
  // outpur : true

  console.log(validateKeys(person, ["name", "age", "email"]));
  // output : true

  // console.log(validateKeys(person, ["name", "age", "address"]));
  // output : false
}
