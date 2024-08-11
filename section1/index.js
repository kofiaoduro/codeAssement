const getArray = (num1, num2, num3)=>{
    let numArray = []
    if(num1 && num2 && num3){
        console.log('checking')
        numArray.push(num1, num2, num3)
    }
   const newArray =  numArray.map((Element)=>{
        if(Element % 2 === 0){
            return Element ** 2
        }else{
            return Element
        }
    })
    console.log(newArray)
    return newArray
}

getArray(1, 2, 3)