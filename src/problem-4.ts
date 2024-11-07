{
  // problem-4
  //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  // Type Circle
  type Circle = {
    shape: "circle";
    radius: number;
  };

  // Type Rectangle
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  // Type guard for shape is ---> circle
  function isCircle(shape: Circle | Rectangle): shape is Circle {
    return shape.shape === "circle";
  }

  // Type guard for shape is ---> rectangle
  function isRectangle(shape: Circle | Rectangle): shape is Rectangle {
    return shape.shape === "rectangle";
  }

  // Function -----> calculateShapeArea()
  function calculateShapeArea(shape: Circle | Rectangle): number {
    if (isCircle(shape)) {
      // Area of a circle
      return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    } else if (isRectangle(shape)) {
      // Area of a rectangle
      return shape.width * shape.height;
    }
    return 0;
  }

  // Sample Input
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);
  // Output will be: 78.54

  // Sample Input
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
  //Output will be: 24
}
