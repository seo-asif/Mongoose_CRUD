const str= "I love Bangladesh"

const reverseString= (data)=>{

    const stringToArray = data.split(" ")

    const result = stringToArray.map( d=>d.split("").reverse().join(""))

const finalResult = result.join( " ")
    return finalResult
}

console.log(reverseString(str))


