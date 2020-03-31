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

