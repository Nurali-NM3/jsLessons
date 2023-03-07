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

// let a = 'children'
// let b = a.toUpperCase()
// let c = b.slice(b.indexOf('n')).toLowerCase()
// let g = b.replace('N',c)
// console.log(g)

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

let a = 'monkey'
let b = 'banana'
let g = a.slice(0,1)
let h = a.slice(3,4)
let p = b.slice(2,3)
let f = b.replace('b',g)
let d = f.replaceAll('n',h)
let c = d.replace('k',p)
let j = c.replace('ka',h)
console.log(j);