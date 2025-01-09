function breakTheText () {
    var h1 = document.querySelector('h1')

    var h1Text = document.querySelector('h1').textContent

    var splittedText = h1Text.split('')

    console.log(h1Text)

    var clutter = ''

    var halfValue = Math.floor(splittedText.length / 2)

    splittedText.forEach(function(e,idx){
        // clutter = `<span>${e}</sapn>`
        if(idx < halfValue){
            clutter += `<span class="a">${e}</span>`
        }else{
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakTheText()

gsap.from('h1 .a',{
    y:40,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})

gsap.from('h1 .b',{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})