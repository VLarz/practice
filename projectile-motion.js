const furiousChicken = (initialVelocity, angleInDegrees, time) => {
    const g = 9.81;

    x = Math.round(initialVelocity * (Math.cos(angleInDegrees * Math.PI / 180.0)) * time);
    y = Math.round(initialVelocity * (Math.sin(angleInDegrees * Math.PI / 180.0)) * time - 0.5 * g * time**2);
    return [x, y];
}

console.log(furiousChicken(40, 60, 4.5));
console.log(furiousChicken(20, 45, 2));



