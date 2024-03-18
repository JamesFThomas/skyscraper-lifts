export const aboutData = {
  objective:
    "Design an elevator system for a 100 story building minimizing  the time between calling an elevator and arrival at desired floor.",
  auto: {
    id: 1,
    Title: "Single Mode",
    Desc: `
    In this mode the passenger can call a single lift,
    take a simulated ride to their chosen floor
    and end with a visual log of their ride.`,
  },
  single: {
    id: 2,
    Title: "Auto Mode",
    Desc: `
    In this mode the application will simulate
    calls, pickups, and drop offs of passengers.
    Each lift will display a visual log of all trips
    throughout the session, along with a summary at the end.
    `,
  },
  con1: {
    id: 3,
    Title: "System Specs",
    Desc: `
    Implement one or more functions that take as input
    a time series of elevator calls and destinations
    and outputs a time series of elevator actions.`,
    List: [
      "There are 3 elevator shafts.",
      "The destination floor is known at the time of the elevator call.",
      "There is a lobby on the 1st floor.",
      "It takes 1 second for the elevator to move 1 floor.",
      "It takes 30 secs in lobby/5 seconds on any other floor to pick-up/drop-off passenger.",
      "A maximum of 10 people can fit into the elevator car at any one time.",
    ],
  },
  con2: {
    id: 4,
    Title: "System Brains",
    Desc: `
    Implement a simulator that generates the time
    series of elevator calls to feed the function
    in part A.`,
    List: [
      "Except for the lobby, all other floors have a uniform distribution of number and frequency of calls.",
      "The number of passengers per call is random according to a log-normal distribution, rounded to the nearest integer in the range (0, 5).",
      "The random functions should be seeded so that the results of any run can be reproduced if the same seed is used.",
    ],
  },
  con3: {
    id: 5,
    Title: "Summary Specs",
    Desc: `
    After the simulator runs,
    it should produce summary statistics.`,
    List: [
      "Create statistical summary of the system session that includes:",
      "The average time spent waiting for an elevator.",
      "The average time spent inside an elevator.",
      "The average total time spent per trip.",
    ],
  },
};
