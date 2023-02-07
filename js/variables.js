// canvas size
const SIZE = 0.6; // size of the canvas in relation to the screen (0 to 1)

// remote position on the screen
let x;
let y;
let remotePos;
let distRemote = 70;


// arrays and indexes
let imgs;

let tv;
let idxTv = 0;

let awake;
let idxAwake = 0;
let blinking = false;

let sleeping;
let idxSleeping = 0;

let sleeping_zzz;
let idxZzz = 0;

let text;


// state machine
const STATES = {
	AWAKE: 0,
	SLEEPING: 1,
	ANGRY: 2
}
let state = STATES.AWAKE;


// time variables and constants
const time_to_fall_asleep = 4000; // 4 sec
let tLastMovement = 0;

const time_while_angry = 3000; // 3 sec
let tAngry = 0;


//IMAGES
let backgroundImg;
let tv_1;
let tv_2;
let remote;
let remote_disabled;
let z_1;
let z_2;
let z_3;
let bodyImg;
let normal_1;
let normal_2;
let normal_3;
let sleeping_1;
let sleeping_2;
let angry;
let shush;
let move;
let forget;