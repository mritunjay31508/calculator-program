import { useRef, useState } from "react"

function HooksExample ()
{
    const txt1ref = useRef()  //hook   
    const txt2ref = useRef()  //hook
    
    const[res,setRes]= useState(undefined) //state
    function calc(ope,e)
    {
       
        let num1 = txt1ref.current.value
        let num2 = txt2ref.current.value
        var num3;
        switch(ope)
        {
            case '+':
                num3 = parseInt(num1)+parseInt(num2)
                break
            case '-':
                num3 = parseInt(num1)-parseInt(num2)
                break
            case '*':
                num3 = parseInt(num1)*parseInt(num2)
                break
            case '/':
                num3 = parseInt(num1)/parseInt(num2)
                break
            default:
               break;        
            }
       
        setRes(`result is ${num3}`)
        e.preventDefault()
    }
   
   return(<div>
    <form>
        <input type="text" ref={txt1ref} placeholder="Enter First Number" /> <br/>
        <input type="text" ref={txt2ref} placeholder="Enter Second Number" /> <br/>
        <input type="submit" onClick={(e)=>calc("+",e)} value="Addition" />
        <input type="submit"  onClick={(e)=>calc("-",e)} value="Substraction" />
        <input type="submit"  onClick={(e)=>calc("*",e)} value="Multiplication" />
        <input type="submit"  onClick={(e)=>calc("/",e)} value="Division" />


    </form>
      {res}
   </div>)
} 
export default HooksExample;

// //////////////////////////////////////
