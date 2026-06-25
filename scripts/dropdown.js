function toggleMenu() {
    var list = document.getElementById("dropDownList");
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";

        // Display link text, including count of pages
        // When you add a page to a directory, increment the number here, instead of in the HTML

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

        // Text to display ( ! CHANGE TEXT HERE ! )
        whatsNewLink.innerHTML = "What's New? (Last Update: DD/MM/YYYY)";
        familyTreesLink.innerHTML = "Main Page: Cullen Genealogy (TEST pages)";
        jameFamLink.innerHTML = "&nbsp;&nbsp;&nbsp;James Family in Ohio (?? pages)";
        novaScotLink.innerHTML = "&nbsp;&nbsp;&nbsp;Perrin Family of Nova Scotia (?? pages)";
        rudeForefathersLink.innerHTML = "&nbsp;&nbsp;&nbsp;Cullens of Upton, Nottinghamshire (?? pages)";
        MHCullenLink.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Manorhamilton, Co Leitrim (?? pages)";
        cardCullLink.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Cardinal Paul Cullen (?? pages)";
        relFamLink.innerHTML = "&nbsp;&nbsp;&nbsp;Related English Cullens (?? items)";
        recordsArchiveLink.innerHTML = "The Records Archive (?? items)";
    }
}
