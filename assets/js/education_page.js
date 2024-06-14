// Get all the checkboxes and their respective containers in assignments
var checkboxesAssignments = document.querySelectorAll('.card-02');
var containersAssignments = document.querySelectorAll('.assignment-card');

checkboxesAssignments.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
        // If checkbox is checked
        if (this.checked) {
            containersAssignments[index].style.borderColor = '#eab520';
            containersAssignments[index].style.backgroundSize = '150px 150px';
        } else {
            containersAssignments[index].style.borderColor = '#192A56';
            containersAssignments[index].style.backgroundSize = '225px 210px';
        }
    });
});
