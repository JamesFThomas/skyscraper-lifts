// this file contains the prompt correlated to this challenge, the constraints, and my initial thoughts, notes, and approach to building the elevator system

/*

  Objective:
    => Design an elevator system for a skyscraper with 100 floors.
       The goal is to minimize the amount of time spent between
       calling an elevator and arriving at the destination floor.

  Part A:
      Implement one or more functions that takes as input a time series of elevator
      calls and destinations and outputs a time series of elevator actions.
        constraints:
          ·There are 3 elevator shafts.
          ·The destination floor is known at the time of the elevator call.
          ·There is a lobby on the 1st floor.
          ·It takes 1 second for the elevator to move 1 floor.
          ·It takes 30 secs in lobby/5 seconds on any other floor to pick-up/drop-off passenger.
          ·A maximum of 10 people can fit into the elevator car at any one time.

   Part B:
       Implement a simulator that generates the time series of elevator calls to feed the
       function in part A.
        It should use the following assumptions when generating the inputs:
          ·Except for the lobby, all other floors have a uniform
          distribution of number and frequency of calls.
          ·The number of passengers per call is random according to a lognormal distribution,
          rounded to the nearest integer in the range (0, 5).
          ·The random functions should be seeded in such a way that the results of any run
          can be reproduced if the same seed is used.

        -- separate function
         ·After the simulator runs, it should produce summary statistics that describe:
          ·The average time spent waiting for an elevator
          ·The average time spent inside an elevator
          ·The average total time spent

*/

/*
  Step 1 - Rewrite problem in own words
          Write a group of functions that accepts timed calls for an elevator,
          and returns timed instructs for a set of 3 elevators in a 100 floor building.

*/

/*

  Step 2 - Simple Examples
         function generateFloorCall() {
          let pickUpFloor = Math.floor(Math.random() * 100);
          let dropOffFloor = Math.floor(Math.random() * 100);
          let numberOfPassengers = Math.floor(Math.random() * 6);
          return [pickUpFloor, dropOffFloor, numberOfPassengers ]
         };

*/

/*
          Step 3 - Break it down

          Objective: minimize time between floor call and floor drop off.
            Inputs:
              - call floor, call time, number of passengers

          Functions:
            1 - generateFloorCall(){}
              O => generates two #s between 0-99 && one random # b/w 0-5
                -- return pickUpFloor# && dropOffFloor# && numberOfPassengers

            1.5 - makingCalls(){}
                O => initiates and maintains call frequencies for elevator calls
                  -- lobby calls normal distribution of random intervals
                  -- floor calls uniform distribution of random intervals

            2 - closetElevator(){}
              I => accepts generateFloorCall() functions return value, 2#'s
              O => determines closet elevator by the unit with lowest tripTime
                  - if moving =>
                    --time calculated from nextFloor to pickUpFloor = tripTime
                  - if not moving =>
                    -- time calculated from currentFloor to pickUpFloor = tripTime
                      **--- push lowest trip time value to "Wait-Log" array **

            3 - moveElevator(){}
              I => accepts closetElevator() function return value
                -- pickUpFloor, dropOffFloor, elevatorToMove
              O => sends indicated elevator to pickUpFloor
                ** If moving true => Elevator Object set nextFloor property to pickUpFloor value**
                ** If moving false => Elevator Object set nextFloor property to pickUpFloor value**

            4 - trackTrips(){}
              I => accepts closetElevator() && floorCall() functions return values
              O => push Elevator number and trip time to the "Trip-Log" array

            5 -  totalTripTime(){}
              I => analyzes the "Trip-Log" and calculates the total trip time for each elevator unit

            6 - timeWaiting(){}
                I => accept the floorCall() return value
                O => analyzes the "Wait-Log" and calculates the average wait time for simulation

            7 - calculateTripTime(){}
                I => accepts
*/

/*

  Initial Questions:
    -How are the elevators responding to calls from specific floors?
      => is floor call responded to by closets elevator or by shaft/unit connected to that call button?
    -Does the current direction of the elevator need to be factored into the calling function?
    -What is the best way to keep track of the elevators current floor?
      => Thought - Way to determine direction of call:
          - call will come from a floor
            - if callFloor > currentFloor, elevator below call floor
            - if callFloor < currentFloor, elevator is above the call floor
    -Does function need to determine intended direction for trip?
          - call of floor, direction rider wants to go
    -Will elevator have to account for trips that begin/complete between it's current trip?
      => Thought - functions must take into account many inputs to determine the closets elevator:
                    -- elevator current floor
                    -- elevator current direction
                    -- current number of trips in queue
    -Will elevator have to determine and restrict number of riders?
    -If max capacity must be enforced which standard should be used, weight limit?
    -Will weight limit account for rider gender or country of operation?
    -Do elevators return to lobby when not in use or remain on floor of last completed trip?

    */

/*                                                Dummy Data to test functions
    let elevators = [
  {
    "unit": 0,
    "currentFloor": 88,
    "pickUpFloor": null,
    "dropOffFloor": null,
    "riders": 0,
    "moving": false,
    "tripLog": [
      {
        unit: 0,
        callFloor: 1,
        dropFloor: 1,
        passengers: 5,
        timeWaited: 10,
        timeTraveled: 20,
        totalTime: 30
      }
    ]
  },
  {
    "unit": 1,
    "currentFloor": 0,
    "pickUpFloor": 23,
    "dropOffFloor": 94,
    "riders": 0,
    "moving": true,
    "tripLog": [
      {
        unit: 1,
        callFloor: 1,
        dropFloor: 1,
        passengers: 5,
        timeWaited: 10,
        timeTraveled: 20,
        totalTime: 30
      }
    ]
  },
  {
    "unit": 2,
    "currentFloor": null,
    "pickUpFloor": 65,
    "dropOffFloor": 94,
    "riders": 0,
    "moving": true,
    "tripLog": [
      {
        unit: 2,
        callFloor: 1,
        dropFloor: 1,
        passengers: 5,
        timeWaited: 10,
        timeTraveled: 20,
        totalTime: 30
      }
    ]
  }
]

let riderPool = 0;

*/
