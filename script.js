function Size(){
    const inputValue = document.getElementById('size-input').value
    const inputSpan = document.getElementById('size-span')
    if(inputValue == 0){
        inputSpan.innerHTML = '2x2м'
    }
    if(inputValue == 25){
        inputSpan.innerHTML = '2x3м'
    }
    if(inputValue == 50){
        inputSpan.innerHTML = '3x4м'
    }
    if(inputValue == 75){
        inputSpan.innerHTML = '4x5м'
    }
    if(inputValue == 100){
        inputSpan.innerHTML = '7x3м'
    }
    console.log(inputValue, inputSpan)
}

function ChooseCategory(){
    let activeEl = document.getElementsByClassName('goods-nav_el-active')
    for (let i = 0; i <  activeEl.length; i++) {
        activeEl[i].className = 'goods-nav_el'
    }
    event.target.classList.add('goods-nav_el-active')
}

function ourWorkSlider(orientation){

    const line = document.getElementsByClassName('our-works_carousel_el')
    let lineLength = 0
    let widhtOfThreeEl = 0
    for (let i = 0; i < 3; i++) {
        widhtOfThreeEl+= line[i].offsetWidth
    }
    for (let i = 0; i < line.length; i++) {
        lineLength+=line[i].offsetWidth
    }

    lineLength+=line.length * 20
    widhtOfThreeEl+= 60
    
   
    let from = document.getElementById('our-work').style.transform.indexOf('(')+1
    let to = document.getElementById('our-work').style.transform.indexOf(')')-2
    let currentTranslate = document.getElementById('our-work').style.transform.slice(from, to) - 0
    
    if(orientation == 'prev'){
        const a = widhtOfThreeEl + currentTranslate
        if(a > 0){
            return
        }
        document.getElementById('our-work').style.transform = 'translateX('+ a +'px)'
    }
    if(orientation == 'next'){
        const a = currentTranslate - widhtOfThreeEl
        if(Math.abs(a) > lineLength - 100){
            return
        }
        document.getElementById('our-work').style.transform = 'translateX('+ a +'px)'
    }

    from = document.getElementById('our-work').style.transform.indexOf('(')+1
    to = document.getElementById('our-work').style.transform.indexOf(')')-2
    currentTranslate = document.getElementById('our-work').style.transform.slice(from, to) - 0
}