
const textInput = document.getElementById("textInput")
const btn =document.getElementById("btn")

function isPalindrome(str){
    const strNormalized = str.replace(/[]+/g,"").toLowerCase()
    const strRevert = strNormalized.split('').reverse().join('')
    return strNormalized === strRevert
}

function checkPalindrome(){
    // primeiro pega o valor do texto do input
    //o valor do input é passado como parametro dentro da função, pq é com esse valor que você quer trabalhar 
    const resultIsPalindrome = isPalindrome(textInput.value)
    // mostrando no html o resultado, usando o verificador ternario, 
    document.getElementById("result").innerText = resultIsPalindrome ? "é um palíndromo!" : "não é um palíndromo"
    
}

btn.addEventListener("click", checkPalindrome)
textInput.addEventListener("keyup",(e)=>{
    if(e.target.value.length==0){
        btn.classList.remove("hass")
    }else{
        btn.classList.add("hass")
    }
})




