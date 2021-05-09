// Let statements (formulas)
const diameter = parseInt(prompt('Enter diameter of a circle'))
const radius = diameter/2
const PI = 3.141592653589793
const areaOfCircle = (radius * radius) * PI
const circumferenceOfCircle = PI * diameter
// Text appearing before the answer
document.write('Area of circle is: ' + areaOfCircle)
document.write('<br> Circumference of a circle is: ' + circumferenceOfCircle)
