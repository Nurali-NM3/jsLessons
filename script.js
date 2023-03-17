// let a = null
// console.log(a)
// let a = 55
// console.log (a.toString())
// let a = 'str'
// let b = 10
// console.log(a === b)
// let a = null
// console.log(a)
// let a = 15
// let v = 18
// console.log(a + v)
// let a = 24
// let n = "2"
// console.log(24 / Number(2))

// let a = 4 
// let b = 55
// console.log(a + b)
// console.log(a * b)
// console.log(b / a)
// console.log(a % b)
// let a = 'hello '
// let b = 'everyone'
// let n = 'Nurali'
// let c = 3
// console.log(a + b)
// console.log(a + n)
// console.log(a * c)
// let a = 5
// let b = '5'
// let c = Number(b)
// console.log(a + c)
// let c = 2
// let b = undefined
// console.log(typeof c)
// console.log(typeof b)
// 03/07
// let a = 'hello world'
// let b = 'great day'
// let c = a.slice(a.indexOf(' '))
// let d = b.slice(0,b.indexOf(' '))
// let result = d + c
// console.log(result)

// let a = 'lorem ipsum dolor'
// let b = a.slice(a.indexOf('d'),a.lastIndexOf('r') + 1)
// let g = b.replace('lor','lar')
// let f = a.replace('dolor',g)
// console.log(f)

// let a = 'hello'
// let b = 'Ivan'
// let c = a.toUpperCase()
// let d = c.replace('ELLO','ello' )
// let t = b.toLowerCase()
// let result = d +' ' + t
// console.log(result)

// let a = 'hello'
// let b = 'Ivan'
// let g = a.slice(0,1).toUpperCase()
// let f = a.replace('h',g)
// let e = b.slice(0,1).toLowerCase()
// let r = b.replace('I',e)
// let result = f + ' ' + r
// console.log(result)

// let a = 'lorem ipsum dolor'
// let b = a.length
// console.log(b)

// let a = 'lorem ipsum dolor sit amet'
// let s = a.replace('sit ' ,'')
// let b = a.slice(a.lastIndexOf('s'),a.indexOf('t') + 1) + ' ' + 'lorem'
// let c = s.replace('lorem',b)
//
// console.log(c)

// let a = 'helloooo'
// let f = a.slice(0,-1).toUpperCase() + a.slice(-1).toLowerCase()
// console.log(f)

// let a = 'boss'
// let b = a.replace('oss','sso')
// console.log(b)

// let f = 'boss'
// let g = f.replace('ss','oo')
// let h = g.replace('oo','ss')
// console.log(h)

// let a = 'sunday'
// let i = a.slice(a.indexOf('d'),a.indexOf('a'))
// console.log(i)

// let a = 'hello'
// let b = a.replaceAll('l','s')
// let g = b.replace('s','k')
// console.log(g)

// let a = 'user'
// let b = 'new'
// let v = a.slice(0,2)
// let result = b + ' ' + v
// console.log(result);

// let a = 'monday'
// let b = 'day'
// let g = a.replace('mon',b)
// let f = a.slice(0,3)
// let h = b.replace('day',f)
// console.log(g + h);

// let a = 'HELLO'
// let g = a.toLowerCase()
// let h = a.slice(1,3)
// let b = g.replace('el',h)
// console.log(b);

// let a = 5
// let b = '400'
// let h = a.toString()
// let g = b.replace('0',h)
// console.log(g);

// let a = 'monkey'
// let b = 'banana'
// let g = a.slice(0,1)
// let h = a.slice(3,4)
// let p = b.slice(2,3)
// let f = b.replace('b',g)
// let d = f.replaceAll('n',h)
// let c = d.replace('k',p)
// let j = c.replace('ka',h)
// console.log(j);

// 03/09

// function userOfBarthday (user,day,person){
//     if ( day > 32 ){
//         return `${day} error is wrong day are ${person}  foolish dude`
//
//     }else if(day % 2 ===0, person === 'female'){
//         return ` welcome, ${user} !how are you ? ${day} great day the attrective ${person}`
//     }else if(day % 2 ===0, person === 'male'){
//         return ` welcome, ${user} !how are you ? ${day} great day the attrective ${person}`
//     } else {
//         return `welcome, ${user} !how are you ? ${day} simple day the attrective ${person} `
//     }
// }
//
// console.log(userOfBarthday('Ivan',10, 'male') )

// function nameOfUser (user){
//     if (user === 'nur'){
//         return `user admin true welcome ${user}`
//     }else {
//         return 'folse not correct user'
//     }
// }
// console.log(nameOfUser('nur'))

// function dayOfFebruary(day,month){
//     if(day <= 28  ){
//         if (month === 'february'){
//             return `today is ${day} february`
//         }else {
//             `on february only 28 day , your day is ${day} of another month `
//         }
//         return `today is ${day} february`
//     }else {
//         return `on february only 28 day , your day is ${day} of another month `
//     }
// }
// console.log(dayOfFebruary(28,'february'))

// function num (num){
//     if (num === 50){
//         return `${num} is correct`
//     }else {
//         return `${num} is not correct`
//     }
// }
// console.log(num(50))

// function userAndAge (user,age){
//     if(age >= 18){
//         return ` ${user} ${age} welcome`
//     }else {
//         return `${user} ${age} rejected`
//     }
// }
//
// console.log(userAndAge('nur',15))

// function lengthOfName(user){
//     if (user.length > 3){
//         return `${user} is accepted`
//     }else {
//         return `${user} is too short`
//     }
// }
//
// console.log(lengthOfName('Maksat'))

// function lengthOfName(user){
//     if (user.length < 5){
//         return `${user} is accepted`
//     }else {
//         return `${user} is too long`
//     }
// }
//
// console.log(lengthOfName('Maks'))

// function ageIsString (age){
//     if (typeof age === 'number') {
//         return ` ${age} is good job`
//     }
//     else {
//         return `${age} is not good`
//     }
// }
//
// console.log(ageIsString(4))

// function ageIsString (age) {
//     if (age !== age.toString() ){
//         return `${age} is must be string`
//     }else {
//         if (age >= 23){
//             return `${age} is right`
//         }
//         return `must be older then ${age}`
//     }
// }
//
// console.log(ageIsString('23'))


// console.log(ageIsString('77'))
// function weeksNumber(weeks){
//     if (weeks ===1) {
//         return 'today is monday'
//     }else if (weeks === 2){
//         return 'today is tuesday'
//     }else if (weeks === 3){
//         return 'today is wednesday'
//     }else if (weeks === 4){
//         return 'today is thursday'
//     }else if (weeks === 5){
//         return 'today is friday'
//     }else if (weeks === 6){
//         return 'today is weekend'
//     }else if (weeks === 7){
//         return 'today is weekend'
//     }
//     else {
//         return 'max day of weeks 7'
//     }
// }
//
// console.log(weeksNumber(6 ))

// 03/10

// function checkUser(user){
//     if (user.length >= 3 && user.length <= 5){
//         return `${user} is accepted`
//     }else {
//        return `${user} is too short or long`
//     }
// }
//
// console.log(checkUser('nurnnnn'))

// function logIn(age,name,email){
//     if(age  && name && email){
//         return `Login is complete `
//     }else {
//         if(age >= 18 && age !== age.toString() ){
//             return `${age} is accepted`
//         }else {
//             `${age} is rejected`
//         }
//         if(name.length <= 5){
//             return `${name} is rejected`
//         }else {
//             return `${age} is rejected`
//         }
//          if(email ){
//              return
//          }
//         return 'something is error'
//     }
// }
//
// console.log(logIn(19,'nurali'))

// function logIn(age,name,email){
//     const checkEmail = email[email.indexOf('@') + 1 ]
//     if((age >18 && age !== age.toString())
//         && (name.length >= 5)
//         && (email === email.toString() && email.includes('@')
//          && (checkEmail && checkEmail !== '.' )    )){
//         return `${age} ${name} ${email} Login is complete `
//     }else {
//         return `${age} ${name} ${email} something is error`
//     }
// }
//
// console.log(logIn(33,'nurali' ,'nurali@k.com'))

// function logIn(email){
//     const checkEmail = email[email.indexOf('@') + 1 ]
//     const checkEmail2 = email[email.substring(0,checkEmail)]
//     console.log(checkEmail2)
//     if ( email.includes('@') && (email.includes('.ru')
//     || email.includes('.com',)) && checkEmail !== '.'
//     && checkEmail2 !== email.includes('ru') && checkEmail2 !== 'com' && checkEmail2 !== '.'){
//         return `${email} Login is complete `
//     }else {
//         return `${email} Login is rejected `
//     }
// }
//
// console.log(logIn('ejfsrudj.iskjdf@kk.ru'))
//
// console.log(logIn('nurali@k.com'))

// function checkWord(word){
//     const checkLength = word.length;
//
//     if(
//         word.length % 2 === 0
//         && word.length >= 4
//         && word.length <= 8){
//     return  `${checkLength} ${word} correct word`
//     }
//     else {
//         return  `${checkLength} ${word} uncorrect word`
//     }
// }
//
// console.log(checkWord('helhj'))
//
// const numbersOfString = ['apple','orange','banana',]
//
// console.log(numbersOfString.split(' ').map(el,index))
// id =3
// fetch(`https://swapi.dev/api/people/${id}`)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data.name)
//         // alert(`name:${data.name}`)
//     })

// id =1
// fetch(`https://swapi.dev/api/people/${id}`)
//     .then(res => res.json())
//     .then((data) => {
//         // console.log(data.name)
//         alert(`name:${data.mass}`)
//     })
// birth_year = 6
// id =1
// fetch(`https://swapi.dev/api/people/`){
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
//         // alert(`vehicles:${data}`)
//     }

// fetch(`https://swapi.dev/api/vehicles`)
// .then(res => res.json())
//         .then(json => console.log(json))

// fetch(C)
// .then(res => res.json())
//         .then(data => console.log(data.name))

// 03/14/23
// async function res(id){
//     const res = await  fetch(`https://swapi.dev/api/people/${id}`)
//     const result = await res.json()
//     console.log(result.name)
//     const vehicles = result?.vehicles?.map(async (veh)=>{
//        const vehName = await fetch(veh)
//         const nameX =await vehName.json()
//         return console.log(nameX.name)
//     })
//
// }
//
// res(18)

// const array =[5,4,7,6,3,5,67]
// const reArray = array.reverse()
// console.log(reArray)

// function arr(array){
//     const a = array.reverse()
//     return a
// }
// console.log(arr([1,2,3]))

// const array = [0,1,null,undefined,'hello',2,3,false]
// const flArray = array.filter(el => el >0)
// console.log(flArray)

// function sortirovka(array){
//     const result = array.filter(el => el > 0)
//     const reResult = result.reverse()
//        return reResult
// }
//
// console.log(sortirovka([0,1,null,undefined,'hello',2,3,false]))

// const array = [1,4,4,3,2,2,6,6,6,7,7,7,8,8,8,2,2,2,5,5,5]
// const result = [...new Set(array)]
// const newResult = result.sort()
// console.log(newResult)

// function filter(array){
//     const result = [...new Set(array)]
//     const newResult = result.sort()
//     return newResult
// }
//
// console.log(filter([1,4,4,3,2,2,6,6,6,7,7,7,8,8,8,2,2,2,5,5,5]))


// const array = [1,2,3]
// const array2 = ['a','b','c']
// console.log(...array, ...array2)
// console.log(array.join(array2))

// function can(con,con2){
//     const g = con.concat(con2)
//     return g
// }
//
// console.log(can([1,2,3],[4,5,6]))


// const array = [1,2,3]
// const array2 = array.push(4,5,6)
// console.log(array)

// const array = [1,2,3]
// const array2 = array.unshift(4,5,6)
// console.log(array)

// const array = [1,2,3,4,5]
// const array2 = array.splice(1,2)
// console.log(array)

// const obj = {
//     js:'test',
//     jq: 'hello',
//     css: 'world'
// }
// const values = Object.values(obj);
// const keys = Object.keys(obj);
//
// console.log(keys)

// const array = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// console.log(array.join(','))

// const fnArray = (array) => array.join(',')
// console.log(fnArray(['Капуста', 'Репа', 'Редиска', 'Морковка']))



//     arr1 = [1, 2, 3, 4, 5];
// arr2 = [4, 5, 6]
// const rearrr = arr1.reduce((accumularot,value)=> accumularot + value,0)
// const rearrr2 = arr2.reduce((accumularot,value)=> accumularot + value,0)
// const result = rearrr + rearrr2
// console.log(rearrr)
// console.log(rearrr2)
// console.log(result)

// const arr = ['misha','ivan','petr','niko','masha']
// const a = arr.filter(el => el.startsWith('n') )
// console.log(a)

// function past(h, m, s){
//     const g = h * 3600000;
//     const f = m * 60000;
//     const d = s * 1000;
//
//     return (g + f + d)
// }
//
// console.log(past(1,1,1))
// t = 0
// console.log(t * 60000)

// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
// }
//
// console.log(past(0,1,1))

// 03/16/23

// const arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.map(el => el ** 2))

//  const arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.filter(el => el > 0))
// console.log(arr.map(el => el > 0))

//  const arr = [1, 2, -3, 0, 4, -5, 6, -6]
// console.log(arr.filter(el => el < 0))
// console.log(arr.map(el => el < 0))

//  const arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.filter(el => el % 2 ===0))
// console.log(arr.map(el => el % 2 ===0))

//  const arr = ['hello','sit','ipsum','javascript','python','sun','even']
// console.log(arr.filter(el => el.length >= 5))
// console.log(arr.map(el => el.length >= 5))

// const arr = [1, 2, -3, 0, -4, 5, -6]
// const line = arr.filter(el => el < 0)
// console.log(line.length)
// console.log(line)

//  const arr = [1, 2, 3, 33, 4, 5, 6]
// const sum = arr.reduce((accumulator,num) => {
//   return accumulator + num
// },0)
// console.log(sum)

// function firstNonConsecutive (arr) {
// const arr = [1, 2, 3, 4, 6, 7]
//     const g = arr.filter((el,inx) => arr.indexOf(el) !== inx ? )
//
//      console.log(arr)


// console.log(firstNonConsecutive([1,2,3,4]))

// function squareSum(numbers){
//
//     const num = numbers.reduce((acc,n) =>{
//
//         return acc + n **2
//     },0)
//     return num
// }
//
// console.log(squareSum([1,2]))

// function checkForFactor (base, factor) {
//     // code here
//
//     if(base  % factor === 0){
//         return true
//     }else {
//         return false
//     }
//
// }
//
//
// console.log(checkForFactor(2451,5))

// const fn = arg =>{
//
//     // for(let i = arg; i >= 1 ; i--)
//     // let g = [i]
// return [arg].filter(el => el < 5)
// }
// console.log(fn(5))

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result

// const a =[1, 2, 3, 4, 5,5]
// let tol = 0
// for(let i = 0; i < a.length;i++ ){
//     tol += a[i]
//
// }
// console.log(tol)

// Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
    // равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

// function countPositivesSumNegatives(input) {
//   if(input &&  input.length !== 0){
//     const a = [input.filter(el => el > 0).length]
//
//     const b = input.filter(el => el < 0)
//     const e = b.reduce((acc, el) => {
//       return  acc += el
//     },0)
//     a.push(e)
//     return a
//
//   }else if(input === null || input.length === 0){
//     return input
//   }

// }
//
// console.log(countPositivesSumNegatives([]))

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
    let a = sonYearsOld - dadYearsOld
    return  a * 2
}


console.log(twiceAsOld(36,7))
console.log(55%30)