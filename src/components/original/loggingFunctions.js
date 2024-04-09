import numbers from "numbers";

// ------------------------------------------------------------- Test Data ----------------------------------------------------------------//
let riderPool = 0;
let rideCount = 0;
let floorTimer;
let lobbyTimer;

let elevators = [
  {
    unit: 0,
    currentFloor: 99,
    pickUpFloor: null,
    dropOffFloor: null,
    riders: 0,
    moving: false,
    tripLog: [],
  },
  {
    unit: 1,
    currentFloor: 50,
    pickUpFloor: null,
    dropOffFloor: null,
    riders: 0,
    moving: false,
    tripLog: [],
  },
  {
    unit: 2,
    currentFloor: 0,
    pickUpFloor: null,
    dropOffFloor: null,
    riders: 0,
    moving: false,
    tripLog: [],
  },
];

// ------------------- HELPER FUNCTIONS BELOW -------------------- //

// Functions to generate random floor call coordinates and passenger numbers ---------------------------------------------------------------------------

// function to generate lobby ride calls
const generateFloorCall = function () {
  //The number of passengers lognormal distributed random #
  let passRange = [0, 1, 2, 3, 4, 5];
  let passengerMean = numbers.statistic.mean(passRange);
  let passengerSD = numbers.statistic.standardDev(passRange);
  // generates lognormal distributed random # of passengers
  let passengers = Math.round(
    numbers.random.distribution.logNormal(1, passengerMean, passengerSD)[0],
  );
  // Math.random produces uniform distribution of random #
  let notLobMin = Math.ceil(1);
  let notLobMax = Math.floor(99);
  // generates uniform distributed random # - for non-looby pick up && drop offs
  let pickUpFloor = Math.floor(
    Math.random() * (notLobMax - notLobMin + 1) + notLobMin,
  );
  let dropOffFloor = Math.floor(
    Math.random() * (notLobMax - notLobMin + 1) + notLobMin,
  );
  // return variables for floor call
  // limit for number of passengers & trip floors
  if (passengers >= 30) {
    passengers = 30;
  }
  if (pickUpFloor > 100) {
    pickUpFloor = 99;
  }
  if (dropOffFloor < 1) {
    dropOffFloor = 1;
  }

  let cordsObj = {
    pickUpFloor: pickUpFloor,
    dropOffFloor: dropOffFloor,
    passengers: passengers,
  };
  // return [pickUpFloor, dropOffFloor, passengers];
  return cordsObj;
};

// function to generate lobby ride calls
const generateLobbyCall = function () {
  // calls always originate from lobby
  let lobby = 0;
  //lobby floor calls on normal distribution of random number
  let lobbyRange = [];
  for (let i = 0; i < 100; i++) {
    lobbyRange.push(i);
  }
  let lobbyMean = numbers.statistic.mean(lobbyRange);
  let lobbySD = numbers.statistic.standardDev(lobbyRange);
  // generates normal distributed random # - for looby pick ups
  let dropOffFloor = Math.round(
    numbers.random.distribution.normal(1, lobbyMean, lobbySD)[0],
  );
  //The number of passengers log-normal distributed random #
  let passRange = [0, 1, 2, 3, 4, 5];
  let passengerMean = numbers.statistic.mean(passRange);
  let passengerSD = numbers.statistic.standardDev(passRange);
  // generates log-normal distributed random # of passengers
  let passengers = Math.round(
    numbers.random.distribution.logNormal(1, passengerMean, passengerSD)[0],
  );
  // return variables for lobby call
  // limit for number of passengers & trip floors
  if (passengers >= 30) {
    passengers = 30;
  }
  if (dropOffFloor > 100) {
    dropOffFloor = 99;
  }
  let cordsObj = {
    pickUpFloor: lobby,
    dropOffFloor: dropOffFloor,
    passengers: passengers,
  };

  return cordsObj;
};

// Function to determine the closest elevator to the floor call just made -------------------------------------------------------------------------
const closetElevator = function (cordsObj) {
  // tripStart, tripEnd, numPassengers
  let { pickUpFloor, dropOffFloor, passengers } = cordsObj;
  let tripStart = pickUpFloor,
    tripEnd = dropOffFloor,
    numPassengers = passengers;
  let distances = [];
  let above = 0;
  let below = 0;

  for (let i = 0; i < elevators.length; i++) {
    let unit = elevators[i];
    let floorsAway = 0;
    //call came from above
    if (unit.moving === false && tripEnd > unit.currentFloor) {
      floorsAway = tripEnd - unit.currentFloor;
      above = 2;
    }
    //call came from below
    if (unit.moving === false && tripEnd < unit.currentFloor) {
      floorsAway = unit.currentFloor - tripEnd;
      below = 1;
    }
    //call came from above
    if (unit.moving === true && tripEnd > unit.pickUpFloor) {
      floorsAway = tripEnd - unit.currentFloor;
      above = 2;
    }
    //call came from below
    if (unit.moving === true && tripEnd < unit.pickUpFloor) {
      floorsAway = tripEnd - unit.currentFloor;
      below = 1;
    }
    distances.push(floorsAway);
  }

  let zero = distances[0],
    one = distances[1],
    two = distances[2];

  let floors = Math.min(zero, one, two);

  let elevatorToMove = distances.indexOf(floors);

  let isMoving = elevators[elevatorToMove].moving;

  let coordinates = {
    elevatorToMove: elevatorToMove,
    tripStart: tripStart,
    tripEnd: tripEnd,
    numPassengers: numPassengers,
    floors: floors,
    isMoving: isMoving,
    aboveOrBelow: 0,
    waitTime: 0,
    movingTime: 0,
  };

  above
    ? (coordinates.aboveOrBelow = above)
    : (coordinates.aboveOrBelow = below);

  return coordinates;
};

// function to calculate travel times --------------------------------------------------------------------------------------------------------------
const tripTime = function (coordinates) {
  let { elevatorToMove, tripStart, tripEnd, floors, isMoving, aboveOrBelow } =
    coordinates;
  //should calculate total trip time for moving variable
  let pickUpFloor = elevators[elevatorToMove].pickUpFloor;
  let currentFloor = elevators[elevatorToMove].currentFloor;
  let waitTime = 0;
  let lobbyDoors = 35;
  let floorDoors = 10;
  let movingTime = -2;
  //wait time to floor -------------
  //call from above
  if (isMoving && aboveOrBelow === 2) {
    //evaluate from pickUpFloor
    waitTime = tripStart - pickUpFloor;
  }
  //call from below
  else if (isMoving && aboveOrBelow === 1) {
    //evaluate from pickUpFloor
    waitTime = pickUpFloor - tripStart;
  }
  //call floor from above
  else if (!isMoving && aboveOrBelow === 2) {
    //evaluate from currentFloor
    waitTime = tripStart - currentFloor;
  }
  //call floor from below
  else if (!isMoving && aboveOrBelow === 1) {
    //evaluate from currentFloor
    waitTime = currentFloor - tripStart;
  }

  //add time for doors to open and close into waitTime && movingTime variables
  // eslint-disable-next-line no-undef
  if (isMoving && (!tripStart || !tripEnd || !dropOffFloor)) {
    waitTime += lobbyDoors;
    //trip time to dropOff floor
    movingTime += floors + lobbyDoors;
  } else if (!isMoving && (!tripStart || !tripEnd)) {
    waitTime += lobbyDoors;
    //trip time to dropOff floor
    movingTime += floors + lobbyDoors;
  } else {
    waitTime += floorDoors;
    //trip time to dropOff floor
    movingTime += floors + floorDoors;
  }

  coordinates.waitTime = waitTime;
  coordinates.movingTime = movingTime;

  return coordinates;
};

// function to add riders to elevator or waiting pool if greater than 10 -----------------------------------------------------------------------
const addRiders = function (coordinates) {
  let { elevatorToMove, numPassengers } = coordinates;
  let riders = elevators[elevatorToMove].riders;
  // assess the number of passengers for transaction
  if (numPassengers <= 10) {
    riders = numPassengers;
  } else {
    let ridersLeft = numPassengers - 10;
    riders += 10;
    riderPool += ridersLeft;
  }
};

//  function makes subsequent call to closest elevator function if riders left in rider pool
const stillWaiting = function (coordinates) {
  let { tripStart, tripEnd, numPassengers } = coordinates;
  let waiters = numPassengers;
  riderPool -= numPassengers;
  let waitingObj = {
    pickUpFloor: tripStart,
    dropOffFloor: tripEnd,
    passengers: waiters,
  };
  return closetElevator(waitingObj);
};

// function creates and adds trip information to elevator tripLog array for program run summary
const logTrip = function (coordinates) {
  let {
    elevatorToMove,
    tripStart,
    tripEnd,
    numPassengers,
    waitTime,
    movingTime,
  } = coordinates;
  let elevator = elevators[elevatorToMove];
  let tripLog = {
    unit: elevator,
    callFloor: tripStart,
    dropFloor: tripEnd,
    passengers: numPassengers,
    timeWaited: waitTime,
    timeTraveled: movingTime,
    totalTime: waitTime + movingTime,
  };
  elevator.tripLog.push(tripLog);
};

// set & reset elevator properties ------------------------------------------------------------------------------------------------------------
// set
const setMoving = function (coordinates) {
  let { elevatorToMove, tripStart, tripEnd } = coordinates;
  elevators[elevatorToMove].moving = true;
  elevators[elevatorToMove].currentFloor = null;
  elevators[elevatorToMove].pickUpFloor = tripStart;
  elevators[elevatorToMove].dropOffFloor = tripEnd;
};

// reset
const setStopped = function (coordinates) {
  let { elevatorToMove, tripEnd } = coordinates;
  elevators[elevatorToMove].moving = false;
  elevators[elevatorToMove].currentFloor = tripEnd;
  elevators[elevatorToMove].pickUpFloor = null;
  elevators[elevatorToMove].dropOffFloor = null;
  elevators[elevatorToMove].riders = 0;
};

// function to produce sequence of messages to represent 1 full elevator transaction ---------------------------------------------------------------
const messageSequence = function (coordinates) {
  let { tripStart, tripEnd, waitTime, movingTime } = coordinates;
  //should calculate the sequence of service messages
  if (!tripStart) {
    // sequence 1 - lobby, moving, floor
    return lobby2Floor(waitTime, movingTime);
  } else if (tripStart && tripEnd) {
    // sequence 2 - floor, moving, floor
    return floor2Floor(waitTime, movingTime);
  } else {
    // sequence 3 - floor, moving, lobby
    return floor2Lobby(waitTime, movingTime);
  }
};

// functions to produce service messages in sequence of simulated elevator transaction ------------------------------------------------------------
// Sequence 1
const floor2Floor = function (waitTime, movingTime) {
  //wait message
  let floorOn = 5;
  let i = waitTime;
  let j = 5;
  let k = movingTime;
  let l = 5;

  let waiting = function () {
    let wait = "Your ride will be here in:";
    if (i === 0) {
      clearTimeout(this);
    } else {
      console.log((wait += i--));
    }
    setTimeout(waiting, 1000);
  };
  waiting();

  setTimeout(function opening() {
    let onLoad = "Floor doors closing in:";
    if (j === 0) {
      clearTimeout(this);
    } else {
      console.log((onLoad += j--));
    }
    setTimeout(opening, 1000);
  }, waitTime * 1000);

  setTimeout(function traveling() {
    let riding = "Arriving at floor in:";
    if (k === 0) {
      clearTimeout(this);
    } else {
      console.log((riding += k--));
    }
    setTimeout(traveling, 1000);
  }, (waitTime + floorOn) * 1000);

  setTimeout(function dropping() {
    let offLoad = "Done - new trip in:";
    if (l === 0) {
      clearTimeout(this);
    } else {
      console.log((offLoad += l--));
    }
    setTimeout(dropping, 1000);
  }, (waitTime + floorOn + movingTime) * 1000);
};

// Sequence 2
const lobby2Floor = function (waitTime, movingTime) {
  //wait message
  let lobbyOn = 30;
  let i = waitTime;
  let j = lobbyOn;
  let k = movingTime;
  let l = 5;

  let waiting = function () {
    let wait = "Your ride will be here in:";
    if (i === 0) {
      clearTimeout(this);
    } else {
      console.log((wait += i--));
    }
    setTimeout(waiting, 1000);
  };
  waiting();

  setTimeout(function opening() {
    let onLoad = "Floor doors closing in:";
    if (j === 0) {
      clearTimeout(this);
    } else {
      console.log((onLoad += j--));
    }
    setTimeout(opening, 1000);
  }, waitTime * 1000);

  setTimeout(function traveling() {
    let riding = "Arriving at floor in:";
    if (k === 0) clearTimeout(this);
    else console.log((riding += k--));
    setTimeout(traveling, 1000);
  }, (waitTime += lobbyOn) * 1000);

  setTimeout(function dropping() {
    let offLoad = "Done - new trip in:";
    if (l === 0) {
      clearTimeout(this);
    } else {
      console.log((offLoad += l--));
    }
    setTimeout(dropping, 1000);
  }, (waitTime + lobbyOn + movingTime) * 1000);
};

// Sequence 3
const floor2Lobby = function (waitTime, movingTime) {
  //wait message
  let floorOn = 5;
  let lobbyOff = 30;
  let i = waitTime;
  let j = 5;
  let k = movingTime;
  let l = lobbyOff;

  let waiting = function () {
    let wait = "Your ride will be here in:";
    if (i === 0) {
      clearTimeout(this);
    } else {
      console.log((wait += i--));
    }
    setTimeout(waiting, 1000);
  };
  waiting();

  setTimeout(function opening() {
    let onLoad = "Floor doors closing in:";
    if (j === 0) {
      clearTimeout(this);
    } else {
      console.log((onLoad += j--));
    }
    setTimeout(opening, 1000);
  }, waitTime * 1000);

  setTimeout(function traveling() {
    let riding = "Arriving at floor in:";
    if (k === 0) {
      clearTimeout(this);
    } else {
      console.log((riding += k--));
    }
    setTimeout(traveling, 1000);
  }, (waitTime + floorOn) * 1000);

  setTimeout(function dropping() {
    let offLoad = "Done - new trip in:";
    if (l === 0) {
      clearTimeout(this);
    } else {
      console.log((offLoad += l--));
    }
    setTimeout(dropping, 1000);
  }, (waitTime + floorOn + movingTime) * 1000);
};

// This function will average and report average wait, trip, and total transaction time for last system run----------------------------------------------------------------
const systemOverview = function (elevators) {
  let finalSummary = elevators
    .map((element) => {
      return element.tripLog;
    })
    .flat(Infinity)
    .reduce((a, b) => {
      return {
        timeWaited: (a.timeWaited + b.timeWaited) / 2,
        timeTraveled: (a.timeTraveled + b.timeTraveled) / 2,
        totalTime: (a.totalTime + b.totalTime) / 2,
      };
    });

  finalSummary.timeWaited = Math.round(finalSummary.timeWaited);
  finalSummary.timeTraveled = Math.round(finalSummary.timeTraveled);
  finalSummary.totalTime = Math.round(finalSummary.totalTime);

  return finalSummary;
};

// this function will stop the random call generators -----------------------------------------------------------------------------------------------
const stopSystem = function () {
  clearTimeout(floorTimer);
  clearTimeout(lobbyTimer);
};

// function to accepts coordinates and initiate system in response
const moveElevator = function (coordinates) {
  tripTime(coordinates);
  logTrip(coordinates);
  setMoving(coordinates);
  addRiders(coordinates);
  if (riderPool > 1) {
    stillWaiting(coordinates);
  }
  messageSequence(coordinates);
  setStopped(coordinates);
  rideCount++;
  if (rideCount < 4) {
    console.log(`${rideCount} rides completed`);
  } else {
    console.log(`${rideCount} rides completed`);
    console.log(systemOverview(elevators));
  }
};

// ==================================================================================================== THE BRAINS =========================================================================================================//

/* --------------------------------------------------------------------------------------------------------------------------------------------------
Function to invoke/maintain randomized frequency of calls for entire building
utilizes and runs both call generating functions for elevator system and
*/

const makingCalls = function () {
  //lobby floor calls on normal distribution of random number
  let range = [];
  for (let i = 0; i < 100; i++) {
    range.push(i);
  }
  let lobbyMean = numbers.statistic.mean(range);
  let lobbySD = numbers.statistic.standardDev(range);
  // generates normal distributed random # - for timing looby pick up intervals
  let lobbyWaitTime = Math.round(
    numbers.random.distribution.normal(1, lobbyMean, lobbySD)[0],
  );
  //repetitively makes calls from lobby based on normal distributed random #
  (function callsFromLobby() {
    lobbyTimer = setTimeout(function () {
      let a = generateLobbyCall();
      console.log(a);
      let b = closetElevator(a);
      moveElevator(b);
      callsFromLobby();
    }, lobbyWaitTime * 1000);
  })();
  // Math.random produces uniform distribution of random #s
  let floorMin = Math.ceil(1);
  let floorMax = Math.floor(99);
  // generates uniform distributed random # - for non-looby pick ups
  let floorWaitTime = Math.floor(
    Math.random() * (floorMax - floorMin + 1) + floorMin,
  );
  //repetitively makes calls from floors based on uniform distribution of random #s
  (function callsFromFloors() {
    floorTimer = setTimeout(function () {
      let c = generateFloorCall();
      console.log(c);
      let d = closetElevator(c);
      moveElevator(d);
      callsFromFloors();
    }, floorWaitTime * 1000);
  })();
};

makingCalls();
// stopSystem();

// console.log(elevators)
