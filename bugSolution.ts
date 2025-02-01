function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

const names: (string | null)[] = ['John', null, 'Jane'];

names.forEach(name => {
  if (name !== null) {
    printName(name);
  } else {
    console.log('Name is null');
  }
});
// Or use filter to remove null values:
names.filter(name => name !== null).forEach(name => printName(name));