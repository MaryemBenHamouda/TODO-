var input=document.querySelector(".form-control")
var add=document.querySelector(".add")
var container=document.querySelector(".list")
var elementBody = document.querySelector("body");

add.addEventListener("click", () =>{
    let row=document.createElement("div")
    row.className="row mt-4"
    let col=document.createElement("div")
    col.className="col d-flex"
    let btn1=document.createElement("button")
    btn1.className="btn btn-success"
    btn1.innerHTML="complit"
    let btn2=document.createElement("button")
    btn2.className="btn btn-danger"
    btn2.innerHTML="delete"
    let text=document.createElement("h4")
    text.innerHTML=input.value
    col.appendChild(btn1);
    col.appendChild(btn2);
    col.appendChild(text);
    row.append(col)
    container.insertBefore(row,container.firstChild)
    //  container.append(row)
    input.value = ""

    btn1.addEventListener("click", () =>{
        text.style.textDecoration="line-through"
    })
    btn2.addEventListener("click",() =>{
        row.remove()
    })

})