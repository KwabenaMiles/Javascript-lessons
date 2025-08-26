export const PI = 3.14159;

export function getCircleArea(radius) {
  return PI * radius * radius;
} 


export function getCircleCircumference(radius) {
  return 2 * PI * radius;
}


export function getSphereVolume(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
}