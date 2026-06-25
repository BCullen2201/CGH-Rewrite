function toggleMenu() {
    var list = document.getElementById("dropDownList");
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";

        // Display link text, including count of pages
        // When you add a page to a directory, increment the number here, instead of in the HTML

        // Drop down link vars
        var familyTreesLink = document.getElementById("FamilyTrees");

        // Text to display
        familyTreesLink.innerHTML = "Main Page: Cullen Genealogy (TEST pages)";
    }
}
