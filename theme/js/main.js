var dropMenu = document.getElementById('head-menu')
var menuItem = document.getElementById('head-menu-item')
var menuBar = document.getElementById('menu-bar')
var barItem = document.getElementById('items-bar')
// mở menu head ofice
document.addEventListener('click',(e)=>{
    if(dropMenu.contains(e.target)){
        menuItem.classList.toggle('hidden')
    }
    else{
        if(!(menuItem.contains(e.target))){
            menuItem.classList.add('hidden')
        }
    }
})
// mở menu mobi
document.addEventListener('click', (e)=>{
    if(menuBar.contains(e.target)){
        barItem.classList.toggle('hidden')
    }
    else{
        if(!(barItem.contains(e.target))){
            barItem.classList.add('hidden')
        }
    }
})