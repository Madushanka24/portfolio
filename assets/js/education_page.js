// Get all the checkboxes and their respective containers in assignments
var checkboxesAssignments = document.querySelectorAll('.card-02');
var containersAssignments = document.querySelectorAll('.assignment-card');

checkboxesAssignments.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
        // If checkbox is checked
        if (this.checked) {
            containersAssignments[index].style.borderColor = '#0ef';
            containersAssignments[index].style.backgroundSize = '150px 150px';
        } else {
            containersAssignments[index].style.borderColor = '#192A56';
            containersAssignments[index].style.backgroundSize = '225px 210px';
        }
    });
});

function detectDivSizeChanges() {
    var assignmentDiv = document.querySelector('#assignments-cards>div');
    var assignmentDivComputedStyle = window.getComputedStyle(assignmentDiv);
    var divWidth = parseInt(assignmentDivComputedStyle.getPropertyValue('width')); /*this get's the width of the div by getPropertyValue and convert it to int then store it in a variable*/
    var divHeight = parseInt(assignmentDivComputedStyle.getPropertyValue('height')); /*this get's the height of the div by getPropertyValue and convert it to int then store it in a variable*/

    if (divWidth === 155 && divHeight === 180) {
        // Applying changes to the background size in the checkbox event listener
        var checkboxesAssignments = document.querySelectorAll('.card-02');
        var containersAssignments = document.querySelectorAll('.assignment-card');

        checkboxesAssignments.forEach(function(checkbox, index) {
            checkbox.addEventListener('change', function() {
                // If checkbox is checked
                if (this.checked) {
                    containersAssignments[index].style.borderColor = '#0ef';
                    containersAssignments[index].style.backgroundSize = '110px 110px';
                } else {
                    containersAssignments[index].style.borderColor = '#192A56';
                    containersAssignments[index].style.backgroundSize = '175px 160px';
                }
            });
        });
    }

    if (divWidth === 125 && divHeight === 150) {
        // Applying changes to the background size in the checkbox event listener
        var checkboxesAssignments1 = document.querySelectorAll('.card-02');
        var containersAssignments1 = document.querySelectorAll('.assignment-card');

        checkboxesAssignments1.forEach(function(checkbox, index) {
            checkbox.addEventListener('change', function() {
                // If checkbox is checked
                if (this.checked) {
                    containersAssignments1[index].style.borderColor = '#0ef';
                    containersAssignments1[index].style.backgroundSize = '110px 110px';
                } else {
                    containersAssignments1[index].style.borderColor = '#192A56';
                    containersAssignments1[index].style.backgroundSize = '130px 130px';
                }
            });
        });
    }
}

// Call the function initially
detectDivSizeChanges();

// Add event listener for resize event
window.addEventListener("resize", detectDivSizeChanges);