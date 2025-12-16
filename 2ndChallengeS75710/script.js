//The ADDED ONE

        // -- AI ASSISTED CODE START --
        //AI helps in defining the function and its logic
        function checkEligibility(event) {
            event.preventDefault();

            const creditHours = Number(document.getElementById("creditHours").value);
            const gpa = Number(document.getElementById("gpa").value);

            //i did this part
            if (gpa >= 3.5 && creditHours >= 9) {
                alert("Eligible for Dean's List!");
            } else if (gpa < 3.5 && creditHours >= 21){ 
                alert("Not eligible for Dean's List.");
            } else {
                alert("Not eligible for Dean's List.");
            }
        }
        // -- AI ASSISTED CODE END --

        // 1. Define Multi-Dimensional Array studentData)
        // Format: [Name (String), Credit Hour (Number), Current GPA (Number)]

        var studentData = [
            ["Ali Bin Ahmad", 15, 3.75],
            ["Bala A/L Muthu", 12, 3.40],
            ["Siti Nurhaliza", 18, 4.00],
            ["Wong Mei Ling", 10, 3.50],
            ["David Lee", 15, 2.95]
        ];

        // 2. Create function to measure dean list eligibility using conditional statement
        function checkDeanList(gpa) {
            if (gpa >= 3.50) {
                return "Dean's List Eligible";
            } else {
                return "Not Dean's List Eligible";
            }
        }

        document.write("<div class='output-box'>");
        document.write("<h2>Section 03 Result</h2>");

        // -- AI ASSISTED CODE START --
        // Looping and extract name and gpa from studentData array
        for (var i = 0; i < studentData.length; i++) {

            var name = studentData[i][0];
            var gpa = studentData[i][2];
            var status = checkDeanList(gpa);
            // -- AI ASSISTED CODE END --

            // 4. Print all the output (inside loop)
            document.write("<div>");
            document.write("<b>Name:</b> " + name + "<br>");
            document.write("<b>Current GPA:</b> " + gpa + "<br>");

            if (status === "Dean's List Eligible") {
                document.write("<b>Status:</b> <span class='eligible'>" + status + "</span><br>");
            } else {
                document.write("<b>Status:</b> <span class='not-eligible'>" + status + "</span><br>");
            }

            document.write("<hr style='border-top: 1px dotted #ccc;'>");

            document.write("</div>");
        }
        document.write("</div>");
