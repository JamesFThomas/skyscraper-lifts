export const aboutData = {
  auto: {
    id: 1,
    Title: 'Single Mode',
    Desc: `information for single mode`,
  },
  single: {
    id: 2,
    Title: 'Auto Mode',
    Desc: `information for auto mode`,
  },
  con1: {
    id: 3,
    Title: 'Constraint 1',
    Desc: `There are 3 elevator shafts.
    The destination floor is known at the time of the elevator call.
    There is a lobby on the 1st floor.
    It takes 1 second for the elevator to move 1 floor.
    It takes 30 secs in lobby/5 seconds on any other floor to pick-up/drop-off passenger.
    A maximum of 10 people can fit into the elevator car at any one time.
    `,
  },
  con2: {
    id: 4,
    Title: 'Constraints 2',
    Desc: `Except for the lobby, all other floors have a uniform distribution of number and frequency of calls.
    The number of passengers per call is random according to a lognormal distribution, rounded to the nearest integer in the range (0, 5).
    The random functions should be seeded so that the results of any run can be reproduced if the same seed is used.`,
  },
  con3: {
    id: 5,
    Title: 'Constraints 3',
    Desc: `Statistics:
    The average time spent waiting for an elevator.
    The average time spent inside an elevator.
    The average total time spent per trip.`,
  },
};
