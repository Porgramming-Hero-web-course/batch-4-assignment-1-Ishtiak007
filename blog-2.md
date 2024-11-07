# Handling asynchronous operations using `async/await` over `callback/promise` TypeScript.

In modern JavaScript and TypeScript development, handling asynchronous operations efficiently is crucial for creating high-performing and maintainable applications. Traditionally, callbacks and promises have been used to manage async tasks, but the introduction of `async/await` has simplified asynchronous programming and made the code more readable and easier to manage.

In this post, we'll explore how to handle asynchronous operations using `async/await` in TypeScript and why it's often a better choice than using callbacks or promises directly.

## What is Asynchronous Programming?

Asynchronous programming allows tasks to be performed in the background while the main program continues to run. This is particularly useful when dealing with I/O operations such as:

- Reading or writing to files
- Making network requests (e.g., API calls)
- Interacting with databases
- Waiting for user input

In JavaScript and TypeScript, asynchronous code is typically handled using:

1. **Callbacks**: Functions passed as arguments to other functions, executed after a task is completed.
2. **Promises**: Objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
3. **Async/Await**: A modern and more readable approach to handling asynchronous operations using promises.

## Traditional Approach: Callbacks

Let's first look at how asynchronous operations were traditionally handled with callbacks:

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Fetched data");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

Here, the `fetchData` function performs an asynchronous task (simulated with `setTimeout`) and then invokes the provided callback when the data is available. While this approach works, it can quickly lead to "callback hell" when multiple asynchronous operations need to be chained together.

```typescript
fetchData((data) => {
  processData(data, (processedData) => {
    saveData(processedData, (savedData) => {
      console.log("Data saved:", savedData);
    });
  });
});
```

This nesting can become hard to read and maintain, especially with larger applications.

## Promises: A Better Alternative

Promises were introduced to avoid the issues with callbacks by providing a more structured approach to handling asynchronous operations.

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data");
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data);
});
```

Promises improve upon callbacks by allowing asynchronous operations to be chained with `.then()` and handled with `.catch()` for errors. While this makes the code more manageable, it can still be verbose and harder to read when dealing with complex chains of operations.

```typescript
fetchData()
  .then((data) => processData(data))
  .then((processedData) => saveData(processedData))
  .then((savedData) => console.log("Data saved:", savedData))
  .catch((error) => console.error(error));
```

## Enter Async/Await: The Modern Solution

`async/await` is a syntactic sugar over promises that makes asynchronous code look and behave like synchronous code. This greatly improves readability, especially when dealing with multiple asynchronous tasks.

### What is `async/await`?

- **`async:`** A function that is marked as `async` always returns a promise, and it allows the use of the `await` keyword inside it.

- **`await:`** This pauses the execution of the `async` function until the promise is resolved or rejected.

## Basic Example with Async/Await

Let's see how we can rewrite the previous promise-based example using `async/await`:

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data");
    }, 1000);
  });
}

async function main() {
  const data = await fetchData();
  console.log(data);
}

main();
```

In the above code:

- The `fetchData` function is asynchronous, returning a promise.
- The `main` function is also asynchronous and uses `await` to pause execution until `fetchData()` resolves. Once resolved, it logs the data.

## Chaining Async Operations with Async/Await

When you need to perform multiple asynchronous operations in sequence, you can use `async/await` to keep your code clean and easy to follow:

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data");
    }, 1000);
  });
}

async function processData(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + " processed");
    }, 1000);
  });
}

async function saveData(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + " saved");
    }, 1000);
  });
}

async function main() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    const savedData = await saveData(processedData);
    console.log(savedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

In this example:

- Each operation (`fetchData`, `processData`, `saveData`) is awaited in sequence.
- The `try`/`catch` block ensures that errors are properly handled, making the code much more readable than with `.then()` chaining.

## Advantages of `Async/Await` Over `Callbacks and Promises`

**1. Readability**: `async/await` makes asynchronous code look and behave like synchronous code, making it easier to understand and debug.

**2. Error Handling**: Using `try/catch` for error handling is simpler than chaining `.catch()` with promises or managing errors in nested callbacks.

**3. Avoids Callback Hell**: With `async/await`, there is no need for deeply nested callbacks or promise chains. This results in cleaner, more maintainable code.
Control Flow: await pauses execution in a straightforward, sequential manner, making asynchronous control flow easier to reason about.

**4. Control Flow**: `await` pauses execution in a straightforward, sequential manner, making asynchronous control flow easier to reason about.

## Conclusion

The introduction of `async/awai`t has revolutionized how we handle asynchronous operations in TypeScript and JavaScript. While callbacks and promises were the foundation of handling async operations, `async/await` simplifies the process and makes the code much cleaner, more readable, and easier to maintain.

If you haven’t yet adopted `async/await` in your TypeScript projects, it’s time to make the switch. You'll be able to write code that is more intuitive and maintainable, while still taking full advantage of asynchronous operations.
