let buttons = document.querySelectorAll('li')
let entry = document.querySelector('input')
let result_screen = document.querySelector('.result')

//localStorage

let data = []

if (Get_from_local()!=null){
    data = Get_from_local()
}



function Save_local(data){
    let a = JSON.stringify(data)
    localStorage.setItem("items",a)
}
function Get_from_local(){
    let out = JSON.parse(localStorage.getItem("items"))
    return out
}

// functions 
function Check(){

    for(let i=0 ; i < data.length ; i++){
        if (data[i] == entry.value )
        {
            return true
        }    
    }
    return false
    
}

function Add(item){
    data.push(item)
    Save_local(data)
    console.log(data)
}
function Delete(){
    console.log(data)
    console.log(Get_from_local())
    console.log(`entry from Data Array : ${data[data.indexOf(entry.value)]}`)
    console.log(`from local storage : ${Get_from_local()}`)
    // deleting entry value form array
    delete data[data.indexOf(entry.value)]
    Save_local(data)
    console.log("data : ",data)
    console.log(`from local storage : ${Get_from_local()}`)
}
function Show(){
    result_screen.innerHTML = `Items Available : <code> ${data.join(" ")}</code>`
}
function Clear(){
    return true
}

buttons.forEach(function(element){
    element.onclick = function(){
        if (element.getAttribute("data-click") == "Check item")
        {
        // code
        if (entry.value == ''){
            result_screen.innerHTML ="The Input is Empty !"
        }
        else {
            if (Check()==true){
              console.log('IN')
              result_screen.innerHTML = `<p> The Value : <span> ${entry.value}</span> in list</p>`
            }
            if (Check()==false){
              console.log('NOT IN')
              result_screen.innerHTML = `<p> The Value : <span> ${entry.value}</span> <code>Not</code> in list</p>`
            }
        }
        }
        
        if (element.getAttribute("data-click") == "Add item")
        {
        // code
        if (entry.value == ''){
            result_screen.innerHTML ="The Input is Empty !"
        }
        else {
              console.log('IN')
              Add(entry.value)
              result_screen.innerHTML ="The Input Was ADDED !"
        }
        }
        if (element.getAttribute("data-click") == 'Clear'){
            localStorage.clear()
            data=[]
            console.log("The Local Storage Is Empty")
        }
        if (element.getAttribute("data-click") == "Delete item") {
        if (Check()==true){
            Delete()
            console.log('was deleted')      
          }
        if (Check()==false){
            console.log('NOT IN')
            result_screen.innerHTML = `<p> The Value : <span> ${entry.value}</span> <code>Not</code> in list</p>`
          }
        }
        if (element.getAttribute("data-click") == "Show Items"){
            Show()
            console.log("Showed")
        }
        }
    }      
)
