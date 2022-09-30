const container=document.getElementById("container")

function adicionaItem (event){
    const novoArticle=document.createElement("article")
    novoArticle.classList.add("item")
    novoArticle.setAttribute("onclick","removeItem(event)")
    container.appendChild(novoArticle)

   
    
}

function removeItem (event) {
    event.target.remove()
    
}

