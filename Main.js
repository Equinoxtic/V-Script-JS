/*
V-Script-JS
Version - 1.0
Released - X
*/

/* Release Checking */

function ReleaseStuff()
{

	// Some variables for version checking

	var repoName = "V-Script-JS";
	var versionTag = "1.0";
	var isReleased = false;
	var strReleased;

	// this code :^
	function logRelease() { console.log(repoName + " - " + versionTag + "\nReleased?: " + strReleased); }

	if (!isReleased) {
		// Just checking if released
		strReleased = "X";
		console.log("This version of V-Script is not released yet!");

	}
	if (versionTag != "1.0") {
		// Just checking if your v-script is outdated :smug:
		console.log("Your version of V-Script is very outdated!");
	}

	logRelease();

}

/* End */

/* Utility */

function Out(str, outputLength)
{
	if (outputLength) {
		console.log(str.length);
	} else {
		console.log(str);
	}
}

/* End */

function main()
{

	ReleaseStuff(); // yes

	Out("Hey!", true); // testing :flushed:

}

main();
