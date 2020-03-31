console.log('processes and environments');

// process -- a piece of software that is running

// processes run in ENVIRONMENTS

// "environment" -- OS, computer, where we are in the file system
// what command typed, time?, processor type, version of node......

// in node apps you can access all the info about the process that is running
// in a variable called process
// console.log(process);

// note: all the arguments are available in the process.argv array
// console.log(process.argv);

// environment -- the environment in which a process runs
// the behavior of things happening in that environment
// can be configured by various programs/commands/utilities/OS
// that set "ENVIRONMENT VARIABLES"
// console.log(process.env); // these are environment variables
// you can access them in unix by typing "env" at the prompt


// some diff "environments" your app can run in
// • development -- building/maintaining/expanding the code
// • testing -- vary widely by organization, might be its own whole department,
  // might be integrated into development/deployment workflows/pipelines
  // testing might be automated, or manual, or both
// • staging -- looks like production, some testing may have been done
  // like a dry-run, more detailed testing might still happen
// • production -- where users actually use the app

// https://en.wikipedia.org/wiki/Systems_development_life_cycle#Environments
// https://stackify.com/what-is-sdlc/




// we can set environment variables in many ways
// allowing us to get info into our code from the exeternal environment


// --> just for the life of one command execution
// by prefacing the node command with an env var declaration 
// like so
// $ MY_VAR_1="Hello" node processesAndEnvironments.js 
console.log("\nhere is MY_VAR_1, set when node command was run");
console.log(process.env.MY_VAR_1);

// --> just for the life of the terminal window 
// do this using the bash export command like so
// $ export MY_VAR_2="This is var 2 exported shell"
// then
// $ node processesAndEnvironments.js
// and you will see it in the terminal
// (note that you won't see MY_VAR_1 tho, unless you explicitly add it)
console.log("\n here is process.env.MY_VAR_2 exported in bash shell");
console.log(process.env.MY_VAR_2);

// https://www.npmjs.com/package/dotenv

require('dotenv').config() // you must include this per the documentation


console.log("\n here is process.env.MY_VAR_3 which was set using dotenv node module");
console.log(process.env.MY_VAR_3);

