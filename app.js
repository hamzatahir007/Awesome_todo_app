var messages = document.getElementById("messages")

function sentmessage(){
    var val = document.getElementById("val")

    // todo list
    var p = document.createElement('p')
    var text = document.createTextNode(val.value)
    p.setAttribute("class" , "p")
    p.appendChild(text)

    
    //NEW DATE
    var span = document.createElement("span")
    var spantext = document.createTextNode(new Date)    
    span.setAttribute("class" , "span")
    span.appendChild(spantext)


    p.appendChild(span)


    //del btn
    var delbtn = document.createElement('button')
    var deltext = document.createTextNode("Delete")
    delbtn.setAttribute("class", "add1")
    delbtn.setAttribute("Onclick" , "delItems(this)")
    delbtn.appendChild(deltext)


    
    p.appendChild(delbtn)


    //edite btn
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edite")
    editbtn.setAttribute("class", "add2")
    editbtn.setAttribute("Onclick","EditItem(this)")
    editbtn.appendChild(edittext)



    p.appendChild(editbtn)

    // console.log(p)


    messages.appendChild(p)
    val.value = ""
}

function delItems(kuchbhi){
    kuchbhi.parentNode.remove()
}

function EditItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editval = prompt("Enter edite value" , val)

    e.parentNode.firstChild.nodeValue = editval
    // console.log(e.parentNode.firstChild.nodeValue)
}



function delAll(){
    messages.innerHTML = ""
}