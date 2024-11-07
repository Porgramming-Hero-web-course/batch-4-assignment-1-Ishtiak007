# How to Handle Asynchronous Operations Using `async`/`await` in TypeScript (Over Callback/Promise)

In modern JavaScript and TypeScript development, managing asynchronous operations has always been a key challenge. From traditional callback-based approaches to promises, developers have often struggled with managing complex flows in an efficient, readable manner.

Enter `async`/`await`—a game-changer in handling asynchronous operations. With `async`/`await`, managing async code becomes more natural, leading to cleaner, easier-to-read code.

In this guide, we’ll explore how to handle asynchronous operations using `async`/`await` in TypeScript, and why it’s often preferred over older approaches like callbacks and promises.

## 1. Why `async`/`await`?

Before diving into examples, let's quickly cover **why `async`/`await` is the preferred method** for handling asynchronous operations:

- **Cleaner Syntax**: `async`/`await` enables you to write asynchronous code that looks synchronous, reducing callback nesting and making the code easier to follow.
- **Error Handling**: With `async`/`await`, you can use `try`/`catch` blocks for handling errors, making your code more structured and predictable.
- **Avoiding Callback Hell**: Callback-based solutions can quickly lead to deeply nested code, often referred to as "callback hell." `async`/`await` flattens this hierarchy.
- **Compatibility with Promises**: `async`/`await` is built on top of promises, meaning that it integrates seamlessly into existing promise-based code.

## 2. The Traditional Callback Approach

Callbacks have long been the go-to solution for handling asynchronous operations in JavaScript and TypeScript. However, they can quickly become difficult to manage, especially when multiple asynchronous operations depend on each other.

### Example: Callback-based Async Operation

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    const data = "Fetched Data";
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Callback received:", data);
});
```

## Issues with Callbacks

### Callback Hell

With multiple async operations, callbacks can become deeply nested, making the code harder to read and maintain. This often leads to a situation called **callback hell**, where the code becomes complex and difficult to follow.

### Error Handling

Error handling in callbacks is often inconsistent. You need to manually check for errors and propagate them in each callback, leading to messy and brittle code. This makes it difficult to manage errors across multiple async calls.

## 3. Promises for Cleaner Asynchronous Code

Promises were introduced as an improvement over callbacks to make asynchronous code more manageable. Promises allow chaining `.then()` and `.catch()` to handle results and errors, providing a cleaner and more structured approach than callbacks.

### Example of Promise Usage

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Fetched Data";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Promise received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
