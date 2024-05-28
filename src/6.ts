function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("h662"));

console.log(greet("h662", "Bye"));
