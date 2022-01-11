/*
V-Script-JS
Version - 1.2
*/

/* Release Checking */

class ReleaseConfig
{
    ReleaseStuff()
    {
	// Some variables for version checking
    	var repoName = "V-Script-JS";
        var versionTag = "1.2";
	var strReleased;

	 // this code :^
	function logRelease() { console.log(repoName + " - " + versionTag + "\nReleased?: " + strReleased); }

    	if (versionTag != "1.2") {
		// Just checking if your v-script is outdated :smug:
		console.log("Your version of V-Script is very outdated!");
	}
	logRelease();
    }
}

let ReleaseConf = new ReleaseConfig();

/* Utility */

class Utility
{
    Out(str, outputLength)
    {
    	if (outputLength) {
	    	console.log(str.length);
	} else {
		console.log(str);
	}
    }

    VMath(num1, num2, curOper)
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
}

let LocalUtil = new Utility();

/* Miscellaneous */

class Miscellaneous
{
    ObjectCreator(name, type, str = "", intval = 0, floatval = 0)
    {
        var curString = str;
        var curInt = intval;
        var curFloat = floatval;

        console.log("Name: " + name);

        function StrSet(curStr) { console.log("String: " + curStr); }
        function IntSet(curInt) { console.log("Integer: " + curInt); }
        function FloatSet(curFlo) { console.log("Float: " + curFlo); }

        switch (type)
        {
            case "string":
                StrSet(curString);
                break;

            case "int":
                IntSet(curInt);
                break;

            case "float":
                FloatSet(curFloat)
                break;
        }
    }
}

let Misc = new Miscellaneous();

function main()
{
    // Write Custom code
}

main();
