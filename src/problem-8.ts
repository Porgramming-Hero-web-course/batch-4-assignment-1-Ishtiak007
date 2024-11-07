{
  // problem-8
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  // Function ------>validateKeys()
  function validateKeys<T extends object>(
    obj: T,
    keys: (keyof T | string)[]
  ): boolean {
    return keys.every((key: string | keyof T): boolean => key in obj);
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
  // out put : true

  console.log(validateKeys(person, ["name", "age", "location"]));
  // output: false
}
