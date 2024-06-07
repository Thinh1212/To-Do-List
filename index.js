const input_box = document.querySelector('.input-box')
const list_container = document.querySelector('.list-container')
        
function askTask(){
    if(input_box.value === ''){
        alert('You must write something')
    }else{
        let li = document.createElement('li')
        li.innerHTML = input_box.value
        list_container.appendChild(li)
        
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    saveData()
    input_box.value = ''
    input_box.focus()
}

list_container.onclick = function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}
        
function saveData(){
    localStorage.setItem('data', list_container.innerHTML)
}

function showData(){
    list_container.innerHTML = localStorage.getItem('data')
}

showData()