let navToggle = document.getElementById('nav-toggle')

navToggle.addEventListener('click', function (){
    let toggle = document.getElementById('toggle')
    toggle.classList.toggle('active')
})



let link = document.getElementsByClassName('link')

for(i of link){
    i.addEventListener('click', function() {
        let toggle = document.getElementById('toggle')
        toggle.classList.remove('active')
    })
}