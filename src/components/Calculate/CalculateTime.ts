
function CalculateTime(timeInSeconds: number): (number | string)[] {

    let hours:number = Math.floor( timeInSeconds / 3600 );
    let minutes:number = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds: number = timeInSeconds -(hours * 3600) - (minutes * 60)

    let hoursformat: string | number = hours < 10 ? `0${hours}` : hours;
    let minutesformat: string | number = minutes < 10 ? `0${minutes}` : minutes ;
    let secondsformat: string | number = seconds < 10 ? `0${seconds}` : seconds ;
    return [
        hoursformat,
        minutesformat,
        secondsformat
    ];
}

export default CalculateTime;