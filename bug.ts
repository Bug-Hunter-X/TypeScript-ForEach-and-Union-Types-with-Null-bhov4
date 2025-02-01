function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // Works fine
printName('John'); // Works fine

const names: (string | null)[] = ['John', null, 'Jane'];

names.forEach(name => {
  printName(name);
}); // Error on null