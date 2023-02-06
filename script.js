
const bottom = document.querySelector('.bottom')
const equal = document.querySelector('#equal')
const screen = document.querySelector('#screen')


let operation = ''

bottom.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
        const result = eval(operation)
        screen.value = result
        operation = ''
        operation = operation + result
    }
    else if(e.target.innerHTML === 'Ac'){
        operation = ''
        screen.value = 0

    }
    else if(e.target.innerHTML === 'Cr'){
        operation = operation.substring(0,operation.length - 1)
        screen.value = operation
    }
    else {

        operation = operation + e.target.innerHTML
        screen.value = operation
    }
})



