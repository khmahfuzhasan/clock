
window.addEventListener('load',clock);

function clock(){
    

    const points = document.querySelector('.points');
    const clock = document.querySelector('.clock');
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    const currentTime = document.querySelector('.current-time');
    const numbers = document.querySelector('.numbers');

    const options = {
        clockSize: 500,
        points: true,
        pointSize: 5,
        numberPointBG: 'green'
    }

    clock.style.setProperty('--clockSize',options.clockSize);
    clock.style.setProperty('--pointSize',options.pointSize);

    for(let i = 1;i<= 12;i++){
        numbers.innerHTML += `<div style="transform: rotate(${i *30}deg)" class="number"><span style="transform: rotate(${- i *30}deg)">${i}</span></div>`;

    }
        
    if(options.points){
        for(let i= 1; i<= 60;i++){
            if(i % 5 === 0){
                points.innerHTML += `<div style="transform:rotate(${i * 6}deg)" class="point point-${i}"><span style="background:${options.numberPointBG};width:${options.pointSize}px;height:${options.pointSize}px;"></span></div>`;
            }else{
                points.innerHTML += `<div style="transform:rotate(${i * 6}deg)" class="point point-${i}"><span style="width:${options.pointSize}px;height:${options.pointSize}px;"></span></div>`;
            }
        }
    }

    setInterval(setClock,1000);

    function setClock() {
        const currentDate = new Date();
        const secondRatio = currentDate.getSeconds() / 60;
        const minuteRatio = ( secondRatio + currentDate.getMinutes() ) / 60;
        const hourRatio = ( minuteRatio + currentDate.getHours() ) / 12;
        setRotate(hourHand, hourRatio);
        setRotate(minuteHand, minuteRatio);
        setRotate(secondHand, secondRatio);
        currentTime.innerHTML = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
             
             
           
    }
    
    setClock();

    function setRotate(element, rotationRatio){
        element.style.setProperty('--rotation',rotationRatio * 360);
    }
} // End CLock

