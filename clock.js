  const secondHandController = () => {
    var secondHandPosition = 90;
    var minuteHandPosition = 90;
    var hourHandPosition = 90;

    const changeSecondHandPosition = () => {
      document.querySelector(".second-hand").style.transform = `rotate(${secondHandPosition+=0.25}deg)`
    }

    const changeMinuteHandPosition = () => {
      document.querySelector(".minute-hand").style.transform = `rotate(${minuteHandPosition+=0.25}deg)`
    }

    const changeHourHandPosition = () => {
      document.querySelector(".hour-hand").style.transform = `rotate(${hourHandPosition+=0.25}deg)`
    }

    const checkSecondHandPosition = () => {
      if(secondHandPosition%15===0) {
        changeMinuteHandPosition();
      }
      if(secondHandPosition%900===0) {
        changeHourHandPosition();
      }
    }
    
    setInterval(() => {
      changeSecondHandPosition();
      checkSecondHandPosition();
    },(1000/24)
  );
    
}
  secondHandController();

