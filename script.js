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