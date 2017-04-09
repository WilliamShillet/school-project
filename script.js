        function toad() {
            var stuffing = document.getElementById("messageBox").value;
            var numChar = document.getElementById("messageBox").value.length;

            var wordCount = 1;
            var myPuncuation = 0;

            for (var i = 0; i < numChar; i++) {
                if (stuffing.charAt(i) === " "){
                    wordCount = wordCount + 1;
            }
                if (stuffing.charAt(i) === "."){
                    myPuncuation = myPuncuation + 1
                }
                 if (stuffing.charAt(i) === "!"){
                    myPuncuation = myPuncuation + 1
                }
                 if (stuffing.charAt(i) === "?"){
                    myPuncuation = myPuncuation + 1
                }
            }

            var mySpaces = wordCount - 1;
            var myAverage = (wordCount/myPuncuation);

            document.getElementById("results").innerHTML = "Word Count: " + wordCount;
            document.getElementById("results").innerHTML = " Sentence Count: " + myPuncuation;
            document.getElementById("results").innerHTML = " Spaces: " + mySpaces;
            document.getElementById("results").innerHTML = " Average Number of Words per Sentence: " + myAverage;
