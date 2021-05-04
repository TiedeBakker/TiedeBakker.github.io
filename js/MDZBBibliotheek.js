var MDZBmodules = new Map();
MDZBmodules.set('Handboek MDZB', { naam: 'Handboek MDZB', type: 'Basismodule', bladzijden:[
{paginatype:'basistype',paginainhoud:'<h1>Mijn Digitaal ZakBoek : PWA versie</h1><h2>Vooraf</h2><p>De PWA versie van <strong>M</strong>ijn <strong>D</strong>igitaal <strong>Z</strong>ak<strong>B</strong>oek is bedoeld om op smartphone of tablet gewenste informatie direct toegankelijk te hebben.</p><p>De PWA kun je onderverdelen in:</p><ul> <li>een <a href="#MDZB_functioneel"><strong>functioneel deel</strong></a>:<br /> en</li> <li>een <a href="#MDZB_inhoud"><strong>inhoudelijk deel</strong></a>: het inhoudelijk deel bestaat uit &eacute;&eacute;n of meer modules die over een bepaald onderwerp gaan. Het inhoudelijk deel wordt opgenomen in een bibliotheek-bestand. Hierin kun je naar wens verschillende combinaties van modules opnemen, zodat er een flexibel samen te stellen digitaal zakboek ontstaat.</li></ul><p>De informatie voor de verschillende modules beheer ik in een C# applicatie (MDZB-Data) en vanuit deze applicatie kan ik het inhoudelijke bibliotheek-bestand voor de PWA-versie genereren.</p><h2><a name="MDZB_functioneel">MDZB - PWA versie: functionee</a>l</h2><ul> <li><a href="#MDZB_hoofdlijn">Hoofdlijn</a></li> <li><a href="#MDZB_module_menu">Module-menu</a></li> <li><a href="#MDZB_modules">Verschillende typen modules</a></li></ul><h3><a id="MDZB_hoofdlijn" name="MDZB_hoofdlijn">Hoofdlijn</a></h3><p>De PWA versie van <strong>M</strong>ijn <strong>D</strong>igitaal <strong>Z</strong>ak<strong>B</strong>oek bestaat uit een logobalk en een venster waarin de inhoud wordt weergegeven. De <strong>logobalk</strong> bevat informatie over applicatie en actieve module, toegang tot het module-menu en een paar knoppen om algemene instellingen (bijvoorbeeld lettergrootte) aan te passen. Het <strong>venster voor de inhoud</strong> (#main) wordt met het module-menu of met de gekozen module gevuld. Hoe een module precies functioneert wordt geregeld vanuit de betreffende module.</p><p>Bij het starten van de PWA versie wordt in het html-bestand de basisopbouw geladen en de verdere vulling vindt plaats vanuit een aantal JavaScript functies. Voordat de gebruikersinteractie begint worden alle functionele en inhoudelijke bibliotheken geladen en daarna start de applicatie met de functie <em>initMDZB()</em>. Deze functie bouwt het <strong>module-menu</strong> op basis van de in de bibliotheek opgenomen modules. Het module-menu wordt in #main geplaatst en is beschikbaar voor de gebruiker.</p><h3><a id="MDZB_module_menu" name="MDZB_module_menu">Module-menu</a></h3><p>Het module-menu is in de eerste versie een eenvoudige lijst met een opsomming van alle beschikbare modules. De namen van de modules worden binnen initMDZB() uit de module-bibliotheek (MDZBmodules) uitgelezen. Aan elke module wordt de verwijzing naar de functie startModule() gekoppeld met als parameter de module-naam. Het module-menu kan vanuit de logobalk ten allen tijde worden opgeroepen. Zodra een module is gekozen verdwijnt het module-menu naar de achtergrond.</p><h3><a id="MDZB_modules" name="MDZB_modules">Verschillende typen modules</a></h3><ul> <li><a href="#MDZB_basismodule">Basismodule</a></li> <li>DeterminatieTabelModule</li></ul><h4>Algemeen</h4><p>De basiswerking en opbouw van alle modules is in eerste instantie vergelijkbaar. Na het kiezen van een module (in het module-menu) wordt in de functie startModule() eerst een element aangemaakt waarbinnen tussen meerdere pagina&#39;s gewisseld kan worden (op smartphone en tablet door een swipe-actie). Afhankelijk van het type module wordt in een module-type-specifieke functie de bladzijwisselaar aangemaakt en worden de verschillende pagina&#39;s voor deze module ingericht. Het nieuw gemaakte module-element wordt in het hoofdvenster getoond en gelijktijdig wordt het hoofdmenu verborgen en kan de gebruiker met de PWA aan de slag.</p><h4><a id="MDZB_basismodule" name="MDZB_basismodule">Basismodule</a></h4><p>De Basismodule bestaat in principe uit &eacute;&eacute;n of meer pagina&#39;s met steeds gewoon lopende tekst.</p><p>&nbsp;</p><h2><a id="MDZB_inhoud" name="MDZB_inhoud">MDZB - PWA versie: inhoudelijk</a></h2><ul> <li><a href="#MDZB_MDZBmodules">MDZBmodules</a></li></ul><p>De inhoud van de PWA bestaat uit &eacute;&eacute;n of meer modules die op verschillende manieren in de applicatie kunnen worden weergegeven. Bij elke module is daarom het type module gespecificeerd, waardoor de gewenste weergave wordt gekozen. In principe vormt de complete inhoud van de PWA &eacute;&eacute;n JavaScript Map-object, <em>MDZBmodules</em>, met daarin voor elke module een JSON-object met een min of meer vaste structuur. MDZBmodules wordt opgenomen in het bestand <em>MDZBBibliotheek.js</em>. Dit bestand wordt volledig gegenereerd door MDZB-Data.</p><h3><a id="MDZB_MDZBmodules" name="MDZB_MDZBmodules">MDZBmodules</a></h3><p>MDZBmodules is d&eacute; bibliotheek met het grootste deel van de inhoudelijke informatie voor MDZB. MDZBmodules is een Map-object waarin voor elke module als sleutel de naam van de module is opgenomen en als waarde een JSON-object met de volgende hoofdstructuur</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>'},
{paginatype:'basistype',paginainhoud:'<h1>Hoe doe ik ... in MDZB</h1><p>Naast de meer technisch en systematische beschrijving van (functionaliteit van) <strong>M</strong>ijn <strong>D</strong>igitaal <strong>Z</strong>ak<strong>B</strong>oekje heb ik door de grote diversiteit en door steeds verder gaande ontwikkelingen behoefte aan een snel antwoord op de vraag: &quot;<em>Hoe deed ik dat ook weer</em>&quot;? Hieronder probeer ik dat aan te geven. Ik begin met een overzicht van onderwerpen die aan de orde komen en kan vandaar simpel via een klik naar het betreffende onderdeel springen.</p><ul> <li>Gegevens invoeren in MDZB-Data <ul>  <li><a href="#MDZB_HOWTO_NieuweModule">Nieuwe module</a> aanmaken</li>  <li><a href="#MDZB_HOWTO_Nwepaginainmodule">Nieuwe pagina</a> toevoegen in module</li>  <li><a href="#MDZB_HOWTO_HtmlAanpassenStandaard">HTML op &quot;standaard pagina&quot; aanpassen</a></li> </ul> </li></ul><h1>De afzonderlijke onderwerpen</h1><h2><a id="MDZB_HOWTO_NieuweModule" name="MDZB_HOWTO_NieuweModule">Nieuwe module maken</a></h2><p>Om een nieuwe module aan te maken gat je in MDZB naar het tabblad Modules</p><h2><a id="MDZB_HOWTO_Nwepaginainmodule" name="MDZB_HOWTO_Nwepaginainmodule">Nieuwe pagina in module</a></h2><p>&nbsp;</p><h2><a id="MDZB_HOWTO_HtmlAanpassenStandaard" name="MDZB_HOWTO_HtmlAanpassenStandaard">HTML op &quot;standaard pagina&quot; aanpassen</a></h2><p>Als je in MDZB-data de module opent op het tabblad MDZB-modules krijg je alle voor die module beschikbare pagina&#39;s te zien in twee vormen: als HTML-broncode en opgemaakt in een WebBrowser-control. Om tekst en/of opmaak aan te passen kopieer je de HTML-broncode en plak je die in de CKEditor (gebruik hiervoor bijvoorbeeld: de <a href="https://ckeditor.com/docs/ckeditor4/latest/examples/fullpreset.html">Full Preset in Examples bij de Documentation van CKEditor 4</a>). In deze editor kun je alle aanpassingen en aanvullingen aanbrengen. Kopieer tot slot de broncode en plak die weer in MDZB-data in het tekst-veld van de HTML-broncode. Zodra je het editveld verlaat wordt de aangepaste code in de database opgeslagen en wordt de bijbehorende WebBrowser-control gesynchroniseerd.</p><p>Als je dubbelklikt op het label voor de WebBrowser-control wordt deze laatste 3x zo hoog. Met Ctrl-+, Ctrl-- of Ctrl-mousewheel kun je de inhoud van de WebBrowser-control in- of uitzoomen.</p>'},
]});
MDZBmodules.set('Losse opmerkingen en notities', { naam: 'Losse opmerkingen en notities', type: 'Basismodule', bladzijden:[
{paginatype:'basistype',paginainhoud:'<p>In deze module neem ik allerlei losse informatie op die ik nog in andere modules wil opnemen of die ik nog verder wil uitzoeken. Voorlopig is het gewoon een domme lijst.</p><h1>Nieuwe zaken die ik nog in MDZB-Data op wil nemen.</h1><ul> <li>Basisbewerkingen van modules verder uitbreiden: <ul>  <li><s>Nieuwe modules toevoegen</s></li>  <li><s>Editmogelijkheid voor naam en type module</s></li>  <li>Toelichting verder implementeren</li> </ul> </li> <li>Nieuwe typen modules toevoegen <ul>  <li>Oude organismen-module omzetten naar nieuwe structuur en zodra die werkt oude structuur afbreken</li>  <li>Kennisgebieden</li>  <li>Determineerlijsten</li> </ul> </li> <li>Binnen een module wil ik gaan werken met verschillende soorten pagina&#39;s. Hierdoor wordt de flexibiliteit veel groter denk ik.</li></ul><h1>Nieuwe zaken die ik in PWA versie MDZB op wil nemen</h1><h1>Inhoud</h1><ul> <li>Vogel die eigen naam roept: <strong><em>onomatopee</em></strong></li></ul><h1>Determineerlijsten</h1><p>Bij determineerlijsten wil ik in eerste instantie de gewone manier van determineren kunnen volgen. De basis is dat ik begin bij de hoofdsleutel, maar ik moet bij bijvoorbeeld planten ook gelijk naar een familie o.i.d. kunnen springen. Bij een keuze wordt de volgende pagina/slide in de swiper aangemaakt, zodat je terug kunt bladeren in het keuzepad.</p><h1>Paginatypen</h1>'},
]});
MDZBmodules.set('Kennisgebieden', { naam: 'Kennisgebieden', type: 'Basismodule', bladzijden:[
{paginatype:'basistype',paginainhoud:'<h1>Kennisgebieden</h1><p>Ik gebruik de module kennisgebieden om voor allerlei kennisgebieden (&eacute;&eacute;n per pagina) kort de structuur van het betreffende gebied te verkennen. De kennisgebieden die ik hier onderscheid zijn:</p><ul> <li>Biologie</li> <li>Scheikunde</li> <li>Natuurkunde</li> <li>Veldbiologie</li> <li>Fotografie</li></ul>'},
{paginatype:'basistype',paginainhoud:'<h1>Biologie</h1><p>Binnen het kennisgebied &quot;Biologie&quot; onderscheid ik in eerste instantie een aantal kennisterreinen, zoals ik die ook in de indeling in mijn studie zelf ben tegen gekomen:</p><ul> <li>Celbiologie; hier bestaat een directe link met Biochemie, dat ik heb ondergebracht bij Scheikunde</li> <li>Botanie <ul>  <li>Indeling plantenrijk</li>  <li>Anatomie</li>  <li>Plantenfysiologie</li> </ul> </li> <li>Zo&ouml;logie <ul>  <li>Indeling dierenrijk</li>  <li>Histologie</li>  <li>Dierfysiologie</li> </ul> </li> <li>Microbiologie</li> <li>Genetica</li> <li>Ecologie</li></ul>'},
{paginatype:'basistype',paginainhoud:'<h1>Scheikunde</h1>'},
{paginatype:'basistype',paginainhoud:'<h1>Natuurkunde</h1>'},
{paginatype:'basistype',paginainhoud:'<h1>Wiskunde</h1>'},
{paginatype:'basistype',paginainhoud:'<h1>Veldbiologie</h1><p>Veldbiologie omvat voor mij alles wat ik op niveau van organismen en groepen organismen kan waarnemen in het veld (of onder binoculair/microscoop in meegebrachte samples). Ik wil daarbij enerzijd aandacht besteden aan beschrijven van soorten en systemen, determinatietabellen, waarnemings-, vang en conserveermethoden</p>'},
{paginatype:'basistype',paginainhoud:'<h1>Fotografie</h1>'},
]});
MDZBmodules.set('Muziek', { naam: 'Muziek', type: '', bladzijden:[
]});
MDZBmodules.set('Hout- en metaalbewerking', { naam: 'Hout- en metaalbewerking', type: 'Basismodule', bladzijden:[
{paginatype:'basistype',paginainhoud:'<h1>Hout- en metaalbewerking</h1><p>In de module hout- en metaalbewerking wil ik allerlei tips en trucks op het gebied van hout- en metaalbewerken (en mogelijk meer, denk aan schilderen, metselen, enz) opnemen.</p><p>Voor elke categorieverwacht ik in eerste instantie een eigen pagina in te richten.</p>'},
{paginatype:'basistype',paginainhoud:'Hout bewerking'},
{paginatype:'basistype',paginainhoud:'Metaalbewerking'},
]});
