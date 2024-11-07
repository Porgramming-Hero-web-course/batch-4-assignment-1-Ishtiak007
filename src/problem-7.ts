{
  //problem-7
  //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // getCarAge method
    getCarAge(): number {
      const currentYear = new Date().getFullYear();

      // car er age
      return currentYear - this.year;
    }
  }

  // input:
  const car = new Car("Honda", "Civic", 2018);
  const car2 = new Car("Toyota", "CVR", 2022);

  console.log(car.getCarAge());
  // Output: 6

  console.log(car2.getCarAge());
  // output: 2
}
