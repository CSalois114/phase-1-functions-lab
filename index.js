function distanceFromHqInBlocks (block) {
  const scuberHqBlock = 42;
  return Math.abs(scuberHqBlock - block);
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if(distance <= 400) return 0;
  if(distance < 2000) return (distance - 400) * .02;
  if(distance < 2500) return 25;
  return 'cannot travel that far';
}