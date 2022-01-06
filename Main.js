/*
V-Script-JS
Version - 1.1
Released - X
*/

/* Release Checking */

function ReleaseStuff()
{
	// Some variables for version checking
	var repoName = "V-Script-JS";
	var versionTag = "1.1";
	var isReleased = false;
	var strReleased;

	// this code :^
	function logRelease() { console.log(repoName + " - " + versionTag + "\nReleased?: " + strReleased); }

	if (!isReleased) {
		// Just checking if released
		strReleased = "X";
		console.log("This version of V-Script is not released yet!");
	}
	if (versionTag != "1.1") {
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

function VMath(num1, num2, curOper)
{
	switch (curOper)
	{
		case "add":
			console.log(num1+num2);
			break;

		case "subtract":
			console.log(num1-num2);
			break;

		case "multiply":
			console.log(num1*num2);
			break;

		case "divide":
			console.log(num1*num2);
			break;
	}
}

/* End */

function main()
{
	// ReleaseStuff(); Uncomment for output

	/* Write Custom Code here! */

	VMath(30, 30, "multiply");

	/* End */
}

main();
