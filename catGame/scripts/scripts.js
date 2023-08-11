let game = document.querySelector('.game')
let modalTitle = document.querySelector('.modal_title')
let modalText = document.querySelector('.modal_subtitle')

let end = document.querySelector('.end')
let endFirst = document.querySelector('.end_first')
let endSecond = document.querySelector('.end_second')

let docWidth
let docHeight
let gameTime = document.querySelector('.game_center-text')
let gameInner = document.querySelector('.game_inner')
let gameCat = document.querySelector('.cat_front')

let one = [
    './images/game/level-1/zalip.png',
    './images/game/level-1/surprised.png',
    './images/game/level-1/learn.png',
    './images/game/level-1/inspire.png',
    './images/game/level-1/informed.png', 
]
let oneBack = [
    './images/game/level-1-back/zalip.png',
    './images/game/level-1-back/surprised.png',
    './images/game/level-1-back/learn.png',
    './images/game/level-1-back/inspire.png',
    './images/game/level-1-back/informed.png',
]
let two = [
    './images/game/level-2-back/active.png',
    './images/game/level-2-back/fun.png',
    './images/game/level-2-back/neutral.png',
    './images/game/level-2-back/sad.png',
]
let three = [
    './images/game/level-3-back/popular.png',
    './images/game/level-3-back/new.png',
]
let directions = [
    'rightToBottom',
    'leftToBottom',
    'rightToTop',
    'leftToTop',
]

let loadGame = document.querySelector('.intro_button')
let intro = document.querySelector('.intro')
let modal = document.querySelector('.modal')
let modalButton = document.querySelector('.modal_button')
let gameIconContainer = document.querySelector('.game_icon_container')

words1 = [
    'Залипнуть',
    'Удивиться',
    'Научиться',
    'Вдохновиться',
    'Быть в курсе',
]
words2 = [
    'Активное',
    'Веселое',
    'Нейтральное',
    'Грустное',
]
words3 = [
    'Популярные',
    'Новые',
]

function smoothStart(element) {
    element.classList.add('smooth-start')
}
function smoothEnd(element) {
    element.classList.add('smooth-end')
}

function addImg() {
    let blockCount = 0
    let backImage = 0
    let text = 0;
    let html= ''

    if (level === 1) {
        blockCount = 5
        backImage = oneBack
        text = words1
    }
    if (level === 2) {
        blockCount = 4
        backImage = two
        text = words2
    }
    if (level === 3) {
        gameIconContainer.classList.remove('content')
        gameIconContainer.classList.add('center')
        blockCount = 2
        backImage = three
        text = words3
    }
    for (let i = 0; i < blockCount; i++) {
        html += 
        `<div class="game_icon">
            <img src='${backImage[i]}' alt="img" class="icon_img">
            <div class="icon_title">${text[i]}</div>
        </div>`
    }
    gameIconContainer.innerHTML = html
}

loadGame.addEventListener('click', () => {
    console.log('load game')
    addImg()

    smoothEnd(intro)
    setTimeout(() => {
        intro.classList.remove('flex')
        intro.classList.add('none')
    }, 500)

    setTimeout(() => {
        modal.classList.remove('none')
        smoothStart(modal)
        modal.classList.add('smooth-start')
        game.classList.remove('none')
        gameInner.classList.remove('none')
        smoothStart(game)
    }, 500)
})

modalButton.addEventListener('click', () => {
    smoothEnd(modal)
    setTimeout(() => {
        modal.classList.add('none')
        modal.classList.remove('smooth-start')
        modal.classList.remove('smooth-end')
    }, 500)
    addImg()
    gameInner.classList.remove('none')
    startGame()
})

let level = 3

let gameLeft
let gameRight
let gameTop
let gameBottom

let countdown = 3
let timeOut = 500 

function startGame() {
    targetBlock = document.querySelector('.game_center')
    gameLeft = targetBlock.getBoundingClientRect().left
    gameRight = targetBlock.getBoundingClientRect().right
    gameTop = targetBlock.getBoundingClientRect().top
    gameBottom = targetBlock.getBoundingClientRect().bottom
    docWidth = game.clientWidth;
    docHeight = game.clientHeight;

    if (level === 1) {
        let timer = setInterval(() => {
            if (countdown != 0) {
                gameTime.innerHTML = countdown
                countdown--
            } else {
                smoothEnd(gameInner)
                setTimeout(() => {gameInner.classList.add('none')}, 500)
                clearTimeout(timer)
                createBalls(one)
                gameTime.innerHTML = ''

            }    
        }, timeOut)
    } else if (level === 2) {
        let timer = setInterval(() => {
            if (countdown != 0) {
                gameTime.innerHTML = countdown
                countdown--
            } else {
                smoothEnd(gameInner)
                setTimeout(() => {gameInner.classList.add('none')}, 500)
                clearTimeout(timer)
                createBalls(two)
                gameTime.innerHTML = ''

            }    
        }, timeOut)
    } else if (level === 3) {
        let timer = setInterval(() => {
            if (countdown != 0) {
                gameTime.innerHTML = countdown
                countdown--
            } else {
                smoothEnd(gameInner)
                setTimeout(() => {gameInner.classList.add('none')}, 500)
                clearTimeout(timer)
                createBalls(three)
                gameTime.innerHTML = ''
            }    
        }, timeOut)
    }
    gameCat.setAttribute('src',' ./images/game/cat-back.png')
    gameInner.classList.remove('smooth-end')
}

const randomId = function(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
    charactersLength)));
   }
   return result.join('');
}


stepY = [
    0.07, 0.21, 0.07, 0.21, 0.21
]
step = [
    -0.21, 0.07, 0.21, 0.07, 0.07
]
leftCor = [
    13.89, 45, 42, 80, 14
]
topCor = [
    55,
    13.89,
    13.89,
    40, 14
]
let traectory = [
    'horizontal',
    'vertical',
    'horizontal',
    'vertical',
    'vertical',
]

let time = [
    50,
]
function createBalls() {
    if (level === 1) {
        speed = 10
    } else if (level === 2) {
        speed = 5
    } else if (level === 3) {
        speed = 2
    }
    let back
    if (level === 1) {back = one}
    if (level === 2) {back = two}
    else if (level === 3) {back = three}
    for (let i = 0; i < 5; i++) {
        let ramdomTime = Math.floor(Math.random() * (2 - 0 + 1) + 0)

        setTimeout(() => {
            makeId = randomId(4)
            let ball = document.createElement('div')
            ball.classList.add('icon')
            ball.classList.add('oldSize')
            ball.style.background = `url(${back[i]})`
            ball.style.backgroundSize = 'cover'
    
            let direction = traectory[i]
            let stepXX = step[i]
            let stepYY = stepY[i]
            ball.setAttribute('data-id', makeId)
            ball.setAttribute('data-direction', direction)


            ball.style.left = leftCor[i] + 'vw'
            ball.style.top = topCor[i] + 'vw'
            document.body.prepend(ball)
            moveHorizontal(makeId, stepXX, stepYY)
        }, time[ramdomTime])

    }
    game.addEventListener('click', isMatch)
    game.addEventListener('click', () => {
        gameCat.setAttribute('src', './images/game/cat-tap.png')
        setTimeout(() => {
            gameCat.setAttribute('src', './images/game/cat-back.png')
        }, 100)
    })
}

function moveHorizontal(data, step, stepY) {
    let ball = document.querySelector(`[data-id="${data}"]`)
    let x = ball.getBoundingClientRect().left / (docWidth/100)
    let y = ball.getBoundingClientRect().top / (docWidth/100)
    let start = x;
    let startY = y;
    let direction = ball.getAttribute('data-direction')

    let timer = setInterval(() => {
        rangeX = start - x
        rangeY = startY - y

        if (direction === 'horizontal') {
            x = x + step
            y = y + stepY
            if (rangeY <= -0.69) { stepY > -0.07 ? stepY-=0.001 : stepY = -0.07 }
            else if (rangeY > 0.69) { stepY < 0.07 ? stepY +=0.001 : stepY = 0.07 }   
       
            if (rangeX >= 0) { step < 0.21 ? step+=0.001 : step = 0.21 }
            else if (rangeX < -17.36) { step > -0.21 ? step-=0.001 : step = -0.21 }        
        }

        if (direction === 'vertical') {
            x = x + step
            y = y + stepY
            if (rangeY <= -15.47) { stepY > -0.14 ? stepY-=0.001 : stepY = -0.14 }
            else if (rangeY > 10.36) { stepY < 0.14 ? stepY +=0.001 : stepY = 0.14 }   
       
            if (rangeX >= 0.69) { step < 0.07 ? step+=0.001 : step = 0.07 }
            else if (rangeX < -0.69) { step > -0.07 ? step-=0.001 : step = -0.07 }        
        }        
        ball.style.left = x  + 'vw'
        ball.style.top = y  + 'vw'
    }, speed)
}


function isMatch() {
    let targetBlock = document.querySelector('.game_center')

    let gameLeft = targetBlock.getBoundingClientRect().left
    let gameRight = targetBlock.getBoundingClientRect().right
    let gameTop = targetBlock.getBoundingClientRect().top
    let gameBottom = targetBlock.getBoundingClientRect().bottom

    document.querySelectorAll('.icon').forEach((ball) => {       

    let bottom = ball.getBoundingClientRect().bottom
    let left = ball.getBoundingClientRect().left
    let top = ball.getBoundingClientRect().top
    let right = ball.getBoundingClientRect().right

        if ((left <= gameRight) && (left >= gameLeft) && (bottom >= gameTop) && (bottom <= gameBottom)) {
            ball.classList.add('newSize')
            ball.classList.remove('oldSize')
            return checkBalls()

        } else if ((right <= gameRight) && (right >= gameLeft) && (bottom >= gameTop) && (bottom <= gameBottom+50)) {
            ball.classList.add('newSize')
            ball.classList.remove('oldSize')
            return checkBalls()

        } else if ((top <= gameBottom) && (top >= gameTop) && (left <= gameRight) && (left >= gameLeft)) {
            ball.classList.add('newSize')
            ball.classList.remove('oldSize')
            return checkBalls()

        } else if ((bottom <= gameBottom) &&( bottom >= gameTop) && (left >= gameRight) && ( left <= gameLeft)) {
            ball.classList.add('newSize')
            ball.classList.remove('oldSize')
            return checkBalls()
        }      
    })  
    
}

function modalInnerText() {
    if (level === 2) {
        modalTitle.innerHTML = `уровень <br> «настроение»`
        modalText.innerHTML = 'теперь иконки полетят быстрее — готовьте лапки!'
    } else if (level === 3) {
        modalTitle.innerHTML = 'уровень «авторы»'
        modalText.innerHTML = 'приготовьтесь ловить иконки на максимальной скорости'
    }
}


function checkBalls() {
    let center = document.querySelector('.center_back')
    if (document.querySelector('.newSize')) {
        game.removeEventListener('click', isMatch)
        countdown = 3
        if (level === 1) {
            level++
            center.classList.add('level25')
            setTimeout(() => {
                modalInnerText()
                smoothStart(modal)
                modal.classList.remove('none')
                document.querySelectorAll('.icon', '.newSize').forEach((item) => {item.remove()})
            }, 2000)    
        } else if (level === 2) {
            level++
            center.classList.remove('level25')
            center.style.top = -39 + '%'

            center.classList.add('level50')
            setTimeout(() => {
                modalInnerText()
                smoothStart(modal)
                modal.classList.remove('none')
                document.querySelectorAll('.icon', '.newSize').forEach((item) => {item.remove()})
            }, 2000)    
        } else if (level === 3) {
            center.style.top = -35 + '%'
            center.style.left = -50 + '%'
            center.classList.remove('level50')
            center.classList.add('level100')
            let cat = document.createElement('img')
            cat.setAttribute('src', './images/end/end-cat.png')
            cat.style.width = 30.83 + 'vw'
            cat.classList.add('end_img')
            cat.style.opacity = 0
            smoothEnd(gameCat)
            setTimeout(() => {gameCat.remove()}, 1000)
            smoothStart(cat)
            game.append(cat)
            setTimeout(() => {
                document.querySelectorAll('.icon', '.newSize').forEach((item) => {item.remove()})
                loadEnd()
            }, 3000)
        }    
    }
}   

function loadEnd() {
    smoothEnd(game)
    setTimeout(() =>  {
        game.remove()
        end.classList.remove('none')
        smoothStart(end)
        setTimeout(() => {
            // smoothEnd(endFirst)
            // setTimeout(() => {
            //     endFirst.remove()
            //     endSecond.classList.remove('none')
            //     endSecond.classList.add('flex')
            //     smoothStart(endSecond)    
            // }, 500)
        }, 2000)
    }, 500)
}
