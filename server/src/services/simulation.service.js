export const simulateRoute = (route, delayAtIndex = null, delayMinutes = 0) => {
  let currentTime = route.startTime;
  const timeline = [];

  route.stops.forEach((stop, index) => {
    if (delayAtIndex === index) {
      currentTime += delayMinutes;
    }

    timeline.push({
      stopType: stop.type,
      location: stop.location,
      eta: currentTime
    });

    currentTime += 10; // fixed travel time between stops
  });

  return timeline;
};
