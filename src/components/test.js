let str = 'ghader ibrahem';
str = str.trim().replaceAll(' ','');
console.log(str);
let obj = {};

for(let i = 0; i < str.length; i++){
    obj[str[i]] = (obj[str[i]] || 0) + 1;
}

console.log(obj);
