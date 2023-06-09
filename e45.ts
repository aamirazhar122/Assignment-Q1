function make_car(manufacturer: string, model: string, ...options: [string, any][]): {manufacturer: string, model: string, [key: string]: any} {
    const car = {manufacturer, model};
    for (const [key, value] of options) {
      car:String = value;
    }
    return car;
  }
  
  const car1 = make_car("Toyota", "Fortuner", ["color", "Black"], ["transmission", "automatic"]);
  console.log(car1);
  
  const car2 = make_car("Honda", "City", ["color", "white"], ["transmission", "automatic"]);
  console.log(car2);
  