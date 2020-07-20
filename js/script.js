const selectColor = document.querySelectorAll(".selectColor")


selectColor.forEach(item => {
    item.addEventListener('click', function(e){
        let nameColor = item.dataset.namecolor
        let color = item.dataset.color
        document.querySelector("#img").src =  `img/${nameColor}.png`
        document.querySelectorAll(".circle span").forEach(item => {
            item.style.background = `${color}`
        })
        document.querySelector('#button').style.background = `${color}`
    })
})