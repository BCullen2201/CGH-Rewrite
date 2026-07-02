function toggleMenu() {
    // Drop down list (The actual menu that pops up when you click the menu button)
    var list = document.getElementById("dropDownList");

    // Drop down link vars
    var whatsNewLink = document.getElementById("WhatsNew");
    var familyTreesLink = document.getElementById("FamilyTrees");
    var jameFamLink = document.getElementById("JameFam");
    var novaScotLink = document.getElementById("NovaScot");
    var rudeForefathersLink = document.getElementById("RudeForefathers");
    var MHCullenLink = document.getElementById("MHCullen");
    var cardCullLink = document.getElementById("CardCull");
    var relFamLink = document.getElementById("RelFam");
    var recordsArchiveLink = document.getElementById("RecordsArchive");

    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";

        // Display link text, including count of pages
        // When you add a page to a directory, increment the number here, instead of in the HTML

        // Text to display ( ! CHANGE TEXT HERE ! )
        whatsNewLink.innerHTML = "DD/MM/YYYY";
        familyTreesLink.innerHTML = "??";
        jameFamLink.innerHTML = "??";
        novaScotLink.innerHTML = "??";
        rudeForefathersLink.innerHTML = "??";
        MHCullenLink.innerHTML = "??";
        cardCullLink.innerHTML = "??";
        relFamLink.innerHTML = "??";
        recordsArchiveLink.innerHTML = "??";
    }
}
