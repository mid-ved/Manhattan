// function bgDet () {
//     let det = document.querySelector('.det')
//     let sum = document.querySelector('summary')

//     sum.addEventListener('click', function () {
//         det.style.background = '#ff5c05'
//     })

//     sum.removeEventListener('click', function () {
//         det.style.background = '#3e2323'
//     })
// }


function imgClick () {
    let img1 = document.getElementById('img1')
    let img2 = document.getElementById('img2')
    let img3 = document.getElementById('img3')
    let img4 = document.getElementById('img4')
    let img5 = document.getElementById('img5')
    let img6 = document.getElementById('img6')
    let img7 = document.getElementById('img7')
    let img8 = document.getElementById('img8')
    let img9 = document.getElementById('img9')
    let img10 = document.getElementById('img10')
    let img11 = document.getElementById('img11')
    let img12 = document.getElementById('img12')

    img1.addEventListener('click', () => {
        img1.style.zIndex = '4'
        img1.style.transform = 'translate(170%, 115%) scale(3)'

    })
    img1.addEventListener('dblclick', () => {
        img1.style.zIndex = '1'
        img1.style.transform = 'translate(0, 0) scale(1)'
    })

    img2.addEventListener('click', () => {
        img2.style.zIndex = '4'
        img2.style.transform = 'translate(55%, 115%) scale(3)'

    })
    img2.addEventListener('dblclick', () => {
        img2.style.zIndex = '1'
        img2.style.transform = 'translate(0, 0) scale(1)'
    })

    img3.addEventListener('click', () => {
        img3.style.zIndex = '4'
        img3.style.transform = 'translate(-55%, 115%) scale(3)'

    })
    img3.addEventListener('dblclick', () => {
        img3.style.zIndex = '1'
        img3.style.transform = 'translate(0, 0) scale(1)'
    })

    img4.addEventListener('click', () => {
        img4.style.zIndex = '4'
        img4.style.transform = 'translate(-170%, 115%) scale(3)'

    })
    img4.addEventListener('dblclick', () => {
        img4.style.zIndex = '1'
        img4.style.transform = 'translate(0, 0) scale(1)'
    })

    img5.addEventListener('click', () => {
        img5.style.zIndex = '4'
        img5.style.transform = 'translate(170%, 0) scale(3)'

    })
    img5.addEventListener('dblclick', () => {
        img5.style.zIndex = '1'
        img5.style.transform = 'translate(0, 0) scale(1)'
    })

    img6.addEventListener('click', () => {
        img6.style.zIndex = '4'
        img6.style.transform = 'translate(55%, 0) scale(3)'

    })
    img6.addEventListener('dblclick', () => {
        img6.style.zIndex = '1'
        img6.style.transform = 'translate(0, 0) scale(1)'
    })

    img7.addEventListener('click', () => {
        img7.style.zIndex = '4'
        img7.style.transform = 'translate(-55%, 0) scale(3)'

    })
    img7.addEventListener('dblclick', () => {
        img7.style.zIndex = '1'
        img7.style.transform = 'translate(0, 0) scale(1)'
    })

    img8.addEventListener('click', () => {
        img8.style.zIndex = '4'
        img8.style.transform = 'translate(-170%, 0) scale(3)'

    })
    img8.addEventListener('dblclick', () => {
        img8.style.zIndex = '1'
        img8.style.transform = 'translate(0, 0) scale(1)'
    })

    img9.addEventListener('click', () => {
        img9.style.zIndex = '4'
        img9.style.transform = 'translate(170%, -115%) scale(3)'

    })
    img9.addEventListener('dblclick', () => {
        img9.style.zIndex = '1'
        img9.style.transform = 'translate(0, 0) scale(1)'
    })

    img10.addEventListener('click', () => {
        img10.style.zIndex = '4'
        img10.style.transform = 'translate(55%, -115%) scale(3)'

    })
    img10.addEventListener('dblclick', () => {
        img10.style.zIndex = '1'
        img10.style.transform = 'translate(0, 0) scale(1)'
    })

    img11.addEventListener('click', () => {
        img11.style.zIndex = '4'
        img11.style.transform = 'translate(-55%, -115%) scale(3)'

    })
    img11.addEventListener('dblclick', () => {
        img11.style.zIndex = '1'
        img11.style.transform = 'translate(0, 0) scale(1)'
    })

    img12.addEventListener('click', () => {
        img12.style.zIndex = '4'
        img12.style.transform = 'translate(-170%, -115%) scale(3)'

    })
    img12.addEventListener('dblclick', () => {
        img12.style.zIndex = '1'
        img12.style.transform = 'translate(0, 0) scale(1)'
    })
}