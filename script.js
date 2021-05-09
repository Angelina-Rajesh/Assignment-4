
let diameter = parseInt(prompt('Enter diameter of a circle'))
let radius = diameter/2
const PI = 3.141592653589793
let areaOfCircle = (radius * radius) * PI
let circumferenceOfCircle = PI * diameter

document.write('Area of circle is: ' + areaOfCircle)
document.write('<br> Circumference of a circle is: ' + circumferenceOfCircle)
