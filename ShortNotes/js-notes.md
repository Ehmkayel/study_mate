### JavaScript Function Notes

1. **Function Declaration**  
Can be used before it's defined (hoisted).
```js
console.log(Year(1990));

function Year(birthYear) {
  return 2000 - birthYear;
}
```

2. **Function Expression**  
Stored in a variable. Cannot be used before it's defined.
```js
const Year = function(birthYear) {
  return 2000 - birthYear;
};

console.log(Year(1990)); 
```

3. **Arrow Function**  
Shorter syntax. Also not hoisted.
```js
const Year = (birthYear) => 2000 - birthYear;

console.log(Year(1990));
```
