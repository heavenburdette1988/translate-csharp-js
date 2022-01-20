// Put your code here

const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

    console.log("All Place Names")
    
for (let name of names) {
  console.log(name);
}

console.log("")


// const small = numbers.filter((n) => n < 10);

const theNames = names.filter(n => n.startsWith("The"))

console.log(theNames)

for (let name of theNames) {
    console.log(name);
  }
