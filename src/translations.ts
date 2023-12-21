/**
 * (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 *
 * SPDX-License-Identifier: MIT
 */

export default {
	"da": { // APPROXIMATE SORTING ORDER: First alphabetically, then order of appearance from top to bottom of page
		// ALERTS:
		//In gesture.svelte 
		"alert.data.classNameLengthAlert": "Navne må kun bestå af {{maxLen}} tegn",
		"alert.recording.disconnectedDuringRecording":"Calliope mini frakoblede under optagelse",

		//In common.js
		"alert.isRecording": "Du er i gang med at optage!",
		"alert.isTesting": "Du er i gang med at optage!",
		"alert.isTraining": "Du er i gang med at træne en model!",
		"alert.isNotConnected": "Din Calliope mini skal være tilsluttet!",
		"alert.deleteGestureConfirm": "Er du sikker på at du vil slette klassen ",
		//In ml.ts
		"alert.twoGestures": "Du skal have mindst to klasser",
		"alert.oneDataRepresentation": "Du skal have mindst en data-repræsentation",
		"alert.recordingsPerGesture": "Du skal have mindst tre eksempler for hver klasse",
		// HOME PAGE:
		"content.index.heading": "Gør-det-selv machine learning",
		"content.index.howBody": "Velkommen til 'ultra:bit datatræneren'. Eksperimentér og leg med machine learning og byg dine første machine learning-modeller – kom i gang her!",
		"content.index.ledDescription": "25 LED lys",
		"content.index.recordButtonDescription": "\"Optag\"-knap",
		"content.index.videoHeading": "Introvideo",
		"content.index.setupBody2": "Hjemmesiden benytter bluetooth, accelerometer, LED'er, knapper og lyd fra Calliope mini'en. For at hjemmesiden kan tilgå disse, skal der overføres et program til Calliope mini'en. Det downloades første gang, du tilslutter Calliope mini'en med USB. Efterfølgende kan du blot tilslutte med bluetooth uden at bruge USB-kablet.",
		"content.index.oldVersion": "Du kan finde den gamle version her:",
		"content.index.contactButton": "Kontakt os",
		"content.index.contactBody": "Hvis du finder fejl og mangler på denne platform, skal du være velkommen til at skrive til os. Hvis du har andre efterspørgsler, ideer eller generel interesse, skal du være velkommen til at kontakte os. Skaberne af denne platform kan kontaktes på:",
		"content.index.contactBodyGithub": "Du kan også besøge vores Github side:",
		"content.index.contactMail": "keb@cs.au.dk",
		"content.index.acknowledgement": "Udviklet af Center for Computational Thinking og Design, Aarhus Universitet",
		// DATA PAGE:
		"content.data.classPlaceholderNewClass": "Klik for at ændre navnet",
		"content.data.record": "Optag",
		"content.data.addData": "Tilføj data",
		"content.data.classHelpHeader": "Klasse",
		"content.data.classHelpBody": "En klasse beskriver en type af bevægelse. Vi kan optage eksempler af en bestemt type bevægelse og putte eksemplerne i samme klasse. Træneren kan finde mønstre i eksemplerne/dataet og bruge disse mønstre til at træne en model, der kan genkende denne type bevægelse. Flere eksmpler vil typisk reulstere i en bedre model, men overvej på hvor mange forskellige måder en bevægelse kan laves.",
		"content.data.classification": "Klasser",
		"content.data.data": "Data",
		"content.data.choice": "Valg",
		"content.data.choice.header": "Valg af klasse",
		"content.data.choice.body": "Her vælger du, hvilken klasse du vil tilføje data til. Efter at du har valgt en klasse at tilføje data til, kan du trykke på \"Optag\" knappen nedenfor, eller på en af knapperne på din Calliope mini for at optage et data-segment. Se billedet nedenfor.",
		"content.data.dataDescription": "Her kan du se din indsamlede data. Generelt vil det være en fordel at have mere data, da dette giver lærings-algoritmen mere infomration at lære ud fra.",
		"content.data.addDataNoConnection": "Du kan ikke tilføje data, uden at være tilsluttet en Calliope mini",
		"content.data.noData": "Du har ingen bevægelser at træne med. Tilføj nogle bevægelser, som du vil træne din Calliope mini til at genkende.",

		"content.data.controlbar.button.clearData": "Ryd eksempler",
		"content.data.controlbar.button.clearData.confirm": "Er du sikker på at du vil slette alle eksempler?\nDette kan ikke fortrydes.",
		"content.data.controlbar.button.downloadData": "Download dataset",
		"content.data.controlbar.button.uploadData": "Upload dataset",


		// TRAINER PAGE:
		"content.trainer.failure.header": "Træning mislykkedes",
		"content.trainer.failure.body": "Træningen resulterede ikke i en brugbar model. Grunden til dette ligger sandsynligvis i dataet. Hvis dataet i forskellige klasser minder for meget om hinanden, kan dette resultere i nogle forskellige problemer i træningsprocessen, der ikke gør det muligt at træne modellen ordentligt.",
		"content.trainer.failure.todo": "Gå tilbage til datasiden og ændr i din data.",
		"content.trainer.controlbar.filters": "Filtre",

		"content.filters.max.title" : "Maksværdier",
		"content.filters.max.description" : "Det højeste punkt blandt alle datapunkter i en bevægelse.",
		"content.filters.min.title" : "Minimumsværdier",
		"content.filters.min.description" : "Det laveste punkt blandt alle datapunkter i en bevægelse.",
		"content.filters.std.title" : "Standardafvigelse",
		"content.filters.std.description" : "Den gennemsnitlige afvigelse fra 0 blandt alle datapunkter i en bevægelse.",
		"content.filters.peaks.title" : "Antal ekstremer",
		"content.filters.peaks.description" : "Antallet af ekstremer blandt alle datapunkter i en bevægelse.",
		"content.filters.acc.title" : "Samlet acceleration",
		"content.filters.acc.description" : "Summen af acceleration for hele bevægelsen, udregnet med absolutte værdier, således at minus tæller som plus. God til at forstå mængden af bevægelse.",
		"content.filters.mean.title" : "Gennemsnit",
		"content.filters.mean.description": "Gennemsnit af acceleration for de forskellige axer.",
		"content.filters.zcr.title" : "Zero crossing rate",
		"content.filters.zcr.description": "Hvor ofte inputer (accelerationen) går fra positiv til negativ eller omvend.t",
		"content.filters.rms.title" : "Effektiv værdi ",
		"content.filters.rms.description": "Root mean square.",

		// MODEL PAGE:
		"content.model.trainModelFirstHeading": "Træn modellen først!",
		"content.model.trainModelFirstBody": "Gå til 'Træner'-siden",
		"content.model.classification.helpHeading": "Sandsynligheds-meteret",
		"content.model.classification.helpBody": "For hver forudsigelse, vil modellen producere et procent-tal, der beskriver hvor sikker modellen er i sin fordusigelse. Dette meter går fra 0% til 100%. Med slideren ved siden af, kan du bestemme grænsen for, hvor sikker modellen skal være i sin forudsigelse for at lave et output (fx afspille en lyd)",
		"content.model.output.soundOptionCongratulations": "Tillykke",
		"content.model.output.soundOptionHighPitchBeep": "Højtone Bip",
		"content.model.output.soundOptionLowPitchBeep": "Lavtone Bip",
		"content.model.output.soundOptionLoser": "Taber",
		"content.model.output.soundOptionMistake": "Fejl",
		"content.model.output.soundOptionHugeMistake": "Kæmpe fejl",
		
		"content.model.output.pin.option.allTime": "Altid tændt",
		"content.model.output.pin.option.xTime": "Tænd på tid",
		"content.model.output.pin.seconds": "Sekunder",

		"content.model.output.prediction.iconTitle": "Forudsigelse",
		"content.model.output.prediction.descriptionTitle": "Forudsigelse",
		"content.model.output.prediction.descriptionBody": "Her kan du se, hvilken klasse din model forudsiger den nuværende bevægelse til at være. Du kan se i meteret hvor sikker modellen er i sin forudsigelse.",

		"content.model.output.ledOutput.descriptionTitle": "LED output",
		"content.model.output.ledOutput.descriptionBody": "Her kan du vælge, hvordan LED-lysene på din output-Calliope mini skal opføre sig, når din model forudsiger en klasse. Prøv at tegne nogle mønstre nedenfor og se, hvordan disse mønstre vises på din output-Calliope mini, når du bevæger input-Calliope mini'en.",

		"content.model.output.sound.iconTitle": "Lyd",
		"content.model.output.sound.descriptionTitle": "Afspilling af lyd",
		"content.model.output.sound.descriptionBody": "Her kan du vælge hvilken lyd din output-Calliope mini skal afspille, når din model laver en forudsigelse. Bemærk at lyden afspilles af din computer, hvis du har en Calliope mini version 1.",

		"content.model.output.pin.iconTitle": "Pin",
		"content.model.output.pin.descriptionTitle": "Pin output",
		"content.model.output.pin.descriptionBody": "Her kan du vælge hvilken pin skal tænde når modellen laver en forudsigelse på en bevægelse. Alle pins har numre i overenstemmelse med Calliope minis officielle pin diagram.",

		"content.model.output.popup.header": "Tilslut output-Calliope mini",
		"content.model.output.popup.body": "Hvis du ikke har tilsluttet en output-Calliope mini, kan du ikke se resultatet af de ændringer du laver på denne side. Tilslut nedenfor.",
		// FOOTER:
		"footer.connectButtonNotConnected": "Tilslut din Calliope mini",
		"footer.disconnectButton": "Frakobl",
		"footer.helpHeader": "Live graf",
		"footer.helpContent": "Når du har forbundet en Calliope mini kan du live se Accelerometer-data for alle tre akser på denne graf. Prøv at bevæge din forbundende Calliope mini og se, hvordan den data der produceres af bevægelserne ser ud for computeren!",
		"footer.reconnecting":"Genopretter forbindelsen. Vent venligst",
		//DATA MENU:
		"menu.data.helpHeading": "Data",
		"menu.data.helpBody": "For at træne en model til at genkende forskellige bevægelser, skal vi have gode eksempler på 'god opførsel', som vi kan vise træneren. Her kan i oprette klasser (en type bevægelse) og optage eksempler til hver klasse. Der skal være mindst 2 klasser med hver 3 eksempler før træneren kan træne en model.",
		"menu.data.examples": "eksempler",
		// TRAINER MENU:
		"menu.trainer.helpHeading": "Træner",
		"menu.trainer.helpBody": "Træneren kigger på eksemplerne i klasserne og forsøger at 'lære', hvordan de forskellige klasser kan genkendes ved at finde mønstre i dataet. Her kan i træne en model, der kan genkende forskellige bevægelser.", //Derudover kan i indstille træneren, vælge hvordan træneren skal forstå dataet og oprette test-sæt.",
		"menu.trainer.notConnected1": "Du har ikke tilkoblet en Calliope mini.",
		"menu.trainer.notConnected2": "Gør dette vha. knappen nedenfor",
		"menu.trainer.notEnoughDataHeader1": "Ikke nok data!\nGå til Data-siden",
		"menu.trainer.notEnoughDataInfoBody": "Der er brug for minimum 2 klasser med 3 eksempler i hver for at kunne træne en model.",
		"menu.trainer.notEnoughDataInfo": "Du har ikke indsamlet nok data til at træne en model. Der er brug for minimum 2 klasser med 3 eksempler i hver. Gå til Data-siden for at indsamle mere data",
		"menu.trainer.trainModelButton": "Træn model",
		"menu.trainer.trainNewModelButton": "Træn en ny model",
		"menu.trainer.TrainingFinished": "Træning færdig",
		"menu.trainer.TrainingFinished.body": "Gå til Model-siden for at undersøge hvor godt din model virker",
		"menu.trainer.isTrainingModelButton": "Træner model...",
		// MODEL MENU:
		"menu.model.helpHeading": "Model",
		"menu.model.helpBody": "Modellen kan bruges i et interaktivt system. Her bruger vi den trænede model til at forudsige bevægelser. Du kan tilslutte endnu en Calliope mini og få den til at reagere på de bevægelser du laver.",
		"menu.model.noModel": "Ingen model",
		"menu.model.connectOutputButton": "Tilslut output-Calliope mini",
		"menu.model.disconnect": "Frakobl output-Calliope mini",
		//CONNECT MICROBIT POP UP:

		"popup.connectMB.main.bluetooth.subtitle": "Tilslut med Bluetooth",

		"popup.connectMB.bluetooth.heading": "Tilslut med Bluetooth",
		"popup.connectMB.bluetooth.cancelledConnection": "Du anullerede forbindelses-processen. Prøv igen hvis du ønsker at fortsætte.",
		"popup.connectMB.bluetooth.step0": "Tilslut et batteri til din Calliope mini",
		"popup.connectMB.bluetooth.step1": "Tegn mønstret du ser på Calliope mini'en",
		"popup.connectMB.bluetooth.step2": "Tryk på knappen nedenfor.",
		"popup.connectMB.bluetooth.step3": "Vælg din Calliope mini og tryk 'tilslut'.",
		"popup.connectMB.bluetooth.connect": "Tilslut",
		"popup.connectMB.bluetooth.connecting": "Tilslutter...",
		"popup.connectMB.bluetooth.invalidPattern": "Mønstret du har tegnet er ikke gyldig",

		"popup.disconnectedWarning.input": "Din input-Calliope mini mistede forbindelsen, vil du prøve igen?",
		"popup.disconnectedWarning.output": "Din output-Calliope mini mistede forbindelsen, vil du prøve igen?",
		"popup.disconnectedWarning.reconnectButton.input": "Tilslut input igen",
		"popup.disconnectedWarning.reconnectButton.output": "Tilslut output igen",

		// NEW CONNECTION PROMPTS - TODO: Rename, merge with above and clean up

		"connectMB.main.usbHeader": "DOWNLOAD PROGRAM TIL Calliope mini",
		"connectMB.main.btHeader": "TILSLUT DIN Calliope mini VIA BLUETOOTH",
		"connectMB.main.usbBody": "Hvis du ikke tidligere har downloadet programmet",
		"connectMB.main.btBody": "Hvis du allerede har downloadet programmet",
		"connectMB.main.connectButton": "Tilslut",
		"connectMB.main.installButton": "Download",

		"connectMB.output.header": "En Calliope mini er allerede forbundet",

		"connectMB.usb.header": "DOWNLOAD PROGRAM TIL Calliope mini",
		"connectMB.usb.body1": "Tilslut din Calliope mini med USB-kabel og tryk på 'næste'",
		"connectMB.usb.body2": "Tryk 'Find USB-enhed' og vælg 'Calliope mini CMSIS-DAP' eller 'DAPLink CMSIS-DAP' fra popup-beskeden som kommer",
		"connectMB.usb.button1": "Næste",
		"connectMB.usb.button2": "Find USB-enhed",
		"connectMB.usb.pleaseWait": "Vent venligst. Downloader program til Calliope mini'en",
		"connectMB.usb.done.body1": "Færdig - programmet er downloadet.",
		"connectMB.usb.done.body2": "Du kan nu tilkoble dig via bluetooth.",
		"connectMB.usb.done.body3": "Hvis du har et batteri til din Calliope mini kan du nu tage usb-kablet ud og tilslutte batteriet i stedet.",
		"connectMB.usb.done.body4": "Hvis du ikke har et batteri kan du fortsætte med at give din Calliope mini strøm igennem usb-kablet.",

		"connectMB.usb.manual.header": "Overfør fil til din Calliope mini",
		"connectMB.usb.manual.manualDownload": "Hvis filen ikke downloadede automatisk tryk",
		"connectMB.usb.manual.manualDownloadLink": "her",
		"connectMB.usb.manual.done": "Færdig: Tilslut med bluetooth",

		"connectMB.usb.firmwareBroken.warning":"Vi opdagede en fejl med din Calliope mini",
		"connectMB.usb.firmwareBroken.content1":"Din version af Calliope mini og firmware har velkendte fejl, som forhindre os i at uploade programmet til din Calliope mini.",
		"connectMB.usb.firmwareBroken.content2":"For at fortsætte nu skal du overføre programmet manuel eller opdatere din Calliope mini",
		"connectMB.usb.firmwareBroken.content3":"Vi anbefaler at du opdatere din Calliope mini's firmware version til den nyeste for rette op på denne fejl.",
		"connectMB.usb.firmwareBroken.content4":"Du kan finde en guide til hvordan du gør på ",
		"connectMB.usb.firmwareBroken.content4.website":"Calliope mini fondens hjemmeside",
		"connectMB.usb.firmwareBroken.button.skip":"Spring over og overfør manuelt",

		"connectMB.outputMB.same": "Brug samme Calliope mini",
		"connectMB.outputMB.different": "Tilslut anden Calliope mini",
		"connectMB.outputMB.sameButton": "Samme",
		"connectMB.outputMB.otherButton": "Anden",


		// COOKIE BANNER

		"cookies.banner.title": "Cookie politik",
		"cookies.banner.subtitle": "Forbrug og analyse",
		"cookies.banner.text.pleaseHelp": "Hjælp os med at forbedre siden! Tillad cookies for at hjælpe os.",
		"cookies.banner.text.description": "Her hos ML-Machine bruger vi cookies for at indsamle information omkring forbrug af siden. Uden disse cookies er vi ikke i stand til at se hvordan vores side bliver brugt.",
		"cookies.banner.text.readMore": "Du kan læse mere omkring vores cookie politik ",
		"cookies.banner.text.readMore.here": "her",
		"cookies.banner.buttons.reject": "Afvis",
		"cookies.banner.buttons.accept": "Accepter",

		"cookies.overlay.title": "Cookie politik",

		"cookies.overlay.question.whatAreCookies": "Hvad er cookies?",
		"cookies.overlay.question.ourReasoning": "Hvad bruger vi cookies til?",
		"cookies.overlay.question.storageDuration": "Hvor lang tid gemmer vi cookies?",
		"cookies.overlay.question.deleting": "Hvordan sletter man cookies?",
		"cookies.overlay.question.consentChange": "Hvordan ændrer jeg mit samtykke?",

		"cookies.overlay.answer.whatAreCookies": "Cookies er små filer med informationer, som der bliver gemt på den enhed du bruger til at browse med. Det er ikke programmer, som kan indeholder malware eller vira.",
		"cookies.overlay.answer.ourReasoning": "Vi bruger cookies for at indsamle information omkring forbrug af siden. Uden disse cookies er vi ikke i stand til at se hvordan vores side bliver brugt. Du gør derfor os en stor tjeneste ved at give samtykke til cookies.",
		"cookies.overlay.answer.storageDuration": "Det varier fra side til side og udnyttelsen af cookie'en. Nogle cookies bliver gemt indtil du forlader siden, andre bliver gemt i længere perioder. Alle vores cookies bliver gemt i et år.",
		"cookies.overlay.answer.deleting": "Det er forskelligt fra browser til browser. Her er dog en liste af manualer til de mest populære browsere.",
		"cookies.overlay.answer.consentChange": "På nuværende tidspunkt har du endnu ikke givet samtykke, men når du gør kan du blot slette din cookie, hvis du ønsker at trække samtykke tilbage eller på andenvis ombestemmer dig.",

		"cookies.overlay.table.title": "Cookies som vi bruger",
		"cookies.overlay.table.header.description": "Beskrivelse",

		"cookies.overlay.table.row.ai_user.description": "Brugt af Microsoft Application Insights til at indsamle statistisk data omkring forbrug. Den gemmer derudover et unik identifikationsnummer, som bruges til at genkende dig næste gang du amkommer på siden. Den gemmer ikke noget personligt omkring dig, og genererer et identifikationsnummer tilfældigt.",
		"cookies.overlay.table.row.ai_session.description": "Gemmer dit nuværende besøg, så vi kan genkende dig på tværs af vores sider.",
		"cookies.overlay.table.row.cookie_consent.description": "Gemmer dine samtykkevalg af vores cookie politik.",

		// COMPATIBILITY WARNING
		"popup.compatibility.bluetooth.header": "Browser ikke understøttet!",
		"popup.compatibility.bluetooth.explain": "Din nuværende browser understøtter ikke bluetooth. Bluetooth bruges til at drive siden. Uden det virker den ikke.",
		"popup.compatibility.bluetooth.advice": "Sikre at din browser er opdateret. Ellers kan du vælge en af de nedestående browsere, som understøtter bluetooth.",

		"popup.connectMB.USBCompatibility.transferStep.step1": "Åben placering af den firmware fil du lige har downloadet. Den findes oftest i din download mappe.",
		"popup.connectMB.USBCompatibility.transferStep.step2": "Træk filen over i Calliope mini'en gennem din computers stifinder.",
		"popup.connectMB.USBCompatibility.transferStep.step3": "Når overførslen er færdig, kan du tilslutte din Calliope mini med Bluetooth.",

		"compatibility.platform.notSupported": "Værktøjet er ikke understøttet på din nuværende platform.",
		"compatibility.platform.notSupported.joinDesktop": "Vi ses på computer.",
		"compatibility.webgl.notSupported": "WebGL er ikke tilgængelig. Aktiver WebGL for at se 3D data.",

		// CONNECTION LOST DIALOG

		"dialog.connection.lost.header": "Forbindelse offline",
		"dialog.connection.lost.body": "Vi kan ikke oprette forbindelse til internettet, nogle funktioner virker muligvis ikke som forventet.",

		// OUTDATED MICROBIT WARNING

		"popup.outdatedmicrobit.header": "Din Calliope mini mangler en opdatering.",
		"popup.outdatedmicrobit.text": "Vi anbefaler stærkt at opdatere nu, nogle funktioner virker muligvis ikke som forventet.",
		"popup.outdatedmicrobit.button": "Jeg forstår",
	},
	"en": {
		// ALERTS:
		//In gesture.svelte
		"alert.data.classNameLengthAlert": "Names must consists of maximum {{maxLen}} characters.",
		"alert.recording.disconnectedDuringRecording":"Calliope mini disconnected during recording",

		//In common.js
		"alert.isRecording": "You are currently recording!",
		"alert.isTesting": "You are currently recording!",
		"alert.isTraining": "You are currently training a model!",
		"alert.isNotConnected": "Your Calliope mini should be connected!",
		"alert.deleteGestureConfirm": "Are you sure you want to delete the class ",
		//In ml.ts
		"alert.twoGestures": "You need at least two classes",
		"alert.oneDataRepresentation": "You need at least one data representation",
		"alert.recordingsPerGesture": "You need at least three examples per class",
		// HOME PAGE:
		"content.index.heading": "Do It Yourself Machine Learning",
		"content.index.howBody": "Welcome to the ultra:bit data trainer. Experiment and play with machine larning and build your first machine learning models - start here!",
		"content.index.ledDescription": "25 LED lights",
		"content.index.recordButtonDescription": "\"Record\"-button",
		"content.index.videoHeading": "Intro Video",
		"content.index.setupBody2": "The website utilizes the bluetooth, accelerometer, LEDs, buttons, and sounds from the Calliope mini. Subsequetnly, you can connect the Calliope mini to your computer via bluetooth without using the USB cable.",
		"content.index.oldVersion": "You can finde the old version here:",
		"content.index.contactButton": "Contact us",
		"content.index.contactBody": "If you find errors and omissions on this platform, please feel free to write us. If you have any other requests, ideas or general interests, please feel free to contact us. The creators of this platform can be contacted at:",
		"content.index.contactBodyGithub": "You can also visit our Github page:",
		"content.index.contactMail": "keb@cs.au.dk",
		"content.index.acknowledgement": "Developed by Center for Computational Thinking and Design, Aarhus University",
		// DATA PAGE:
		"content.data.classPlaceholderNewClass": "Press here to change name",
		"content.data.record": "Record",
		"content.data.addData": "Add Data",
		"content.data.classHelpHeader": "Class",
		"content.data.classHelpBody": "A class describes a type of gesture. We can record examples of a certain type of gesture and put the examples in the same class. The trainer can find patterns in the examples/data and use these patterns to 'train' a model that can recognize this class of gestures. Multiple examples will typically result in a better model, and consider how many different ways a gesture can be performed.",
		"content.data.classification": "Classes",
		"content.data.data": "Data",
		"content.data.choice": "Choice",
		"content.data.choice.header": "Choice of class",
		"content.data.choice.body": "Here, you choose which class you want to add data to. After having selected a class, you can either press the \"Record\" button below or press one of the buttons on your Calliope mini to record a data segment. See the picture below.",

		"content.data.dataDescription": "Here you can see the gathered data. ",
		"content.data.addDataNoConnection": "You cannot add data without being connected with a Calliope mini",
		"content.data.noData": "You do not have any gestures to train on. Add the gestures you wish the Calliope mini should learn to recognise.",

		"content.data.controlbar.button.clearData": "Clear examples",
		"content.data.controlbar.button.clearData.confirm": "Are you sure you wish to delete all gesture examples?\nThis cannot be undone.",
		"content.data.controlbar.button.downloadData": "Download dataset",
		"content.data.controlbar.button.uploadData": "Upload dataset",

		// TRAINER PAGE:
		"content.trainer.failure.header": "Training Failed",
		"content.trainer.failure.body": "The training did not result in a usable model. The reason for this is most likely the data used for training. If the data for different classes are too similar, this can result in issues in the training process.",
		"content.trainer.failure.todo": "Return to the data page and change your data.",
		"content.trainer.controlbar.filters": "Filters",

		"content.filters.max.title" : "Max values",
		"content.filters.max.description" : "The tallest point among all datapoints in a gesture.",
		"content.filters.min.title" : "Minimum values",
		"content.filters.min.description" : "The lowest point among all datapoints in a gesture.",
		"content.filters.std.title" : "Standard deviation",
		"content.filters.std.description" : "The average deviation from 0 among all datapoints in a gesture.",
		"content.filters.peaks.title" : "Number of extremes",
		"content.filters.peaks.description" : "The number of extremes among all datapoints in a gesture.",
		"content.filters.acc.title" : "Total acceleration",
		"content.filters.acc.description" : "The sum of acceleration for the whole gesture, calculated in absolute values, so that minus counts as plus. Good for understanding the amount of movement.",
		"content.filters.mean.title" : "Mean",
		"content.filters.mean.description": "Mean value of accelerations at different axes",
		"content.filters.zcr.title" : "Zero crossing rate",
		"content.filters.zcr.description": "The rate at which the input (acceleration) transitions from positive to zero to negative or negative to zero to positive.",
		"content.filters.rms.title" : "Root mean square",
		"content.filters.rms.description": "",

		// MODEL PAGE:
		"content.model.trainModelFirstHeading": "Train the model first!",
		"content.model.trainModelFirstBody": "Go to the 'Trainer' page",
		"content.model.classification.helpHeading": "Probabil-ometer",
		"content.model.classification.helpBody": "For each prediction you make, the model will produce a percentage that describes how confident the model is in its prediction. This meter goes from 0% to 100%. With the slider next to it, you can determine the limit of how certain the model should be in its preduction to make an output (e.g. play a sound)",
		"content.model.output.soundOptionCongratulations": "Congratulations",
		"content.model.output.soundOptionHighPitchBeep": "High pitch beep",
		"content.model.output.soundOptionLowPitchBeep": "Low pitch beep",
		"content.model.output.soundOptionLoser": "Loser",
		"content.model.output.soundOptionMistake": "Mistake",
		"content.model.output.soundOptionHugeMistake": "Huge Mistake",

		"content.model.output.pin.option.allTime": "Always on",
		"content.model.output.pin.option.xTime": "For time",
		"content.model.output.pin.seconds": "Seconds",

		"content.model.output.prediction.iconTitle": "Prediction",
		"content.model.output.prediction.descriptionTitle": "Prediction",
		"content.model.output.prediction.descriptionBody": "Here you can see the model's prediction of the current gesture. In the meter, you can see how confident the model is in the prediction.",

		"content.model.output.ledOutput.descriptionTitle": "LED output",
		"content.model.output.ledOutput.descriptionBody": "Here you can choose how the LEDs on your output Calliope mini behaves when your model makes predictions. Try draw some patterns and see how they show on the output Calliope mini when you move the input Calliope mini.",

		"content.model.output.sound.iconTitle": "Sound",
		"content.model.output.sound.descriptionTitle": "Playback of sound",
		"content.model.output.sound.descriptionBody": "Here you can choose which sound you output Calliope mini plays when the model makes a prediction. Be aware that the sound plays from your computer if you have a Calliope mini version 1.",
		
		"content.model.output.pin.iconTitle": "Pin",
		"content.model.output.pin.descriptionTitle": "Pin outputs",
		"content.model.output.pin.descriptionBody": "Here you can select which pin will turn on when a gesture is predicted. Each pins are numbered according to Calliope mini's official pin output diagram.",

		"content.model.output.popup.header": "Connect output Calliope mini",
		"content.model.output.popup.body": "If you have not connected an output Calliope mini, you cannot see the results of the changed made on this page. Use the connect button below",

		// FOOTER:
		"footer.connectButtonNotConnected": "Connect your Calliope mini",
		"footer.disconnectButton": "Disconnect",
		"footer.helpHeader": "Live graph",
		"footer.helpContent": "Once you have connected a Calliope mini you can watch the accelerometer data for all three axes on this graph in real time. Try moving your connected Calliope mini to see what the data looks like to your computer!",
		"footer.reconnecting":"Reconnecting. Please wait",
		//DATA MENU:
		"menu.data.helpHeading": "Data",
		"menu.data.helpBody": "In order to train a model to recognize different movements, we need good examples of 'good behavior' that we can show the Trainer. Here you can create classes (types of gestures) and record examples for each class. There must be at least 2 classes with 3 examples each before the trainer can train a model.",
		"menu.data.examples": "examples",
		// TRAINER MENU:
		"menu.trainer.helpHeading": "Trainer",
		"menu.trainer.helpBody": "The Trainer looks at the examples in each of the classes and tries to 'learn' how the different classes can be recognized by searching for patterns in the data. Here you can train a model to recognize different gestures.", // In addition, you can configure the trainer, choose how the trainer should interpret the data and create test sets.",
		"menu.trainer.notConnected1": "You have not connected a Calliope mini.",
		"menu.trainer.notConnected2": " Please do so via the button below",
		"menu.trainer.notEnoughDataHeader1": "Not Enough Data\nGo to Data page",
		"menu.trainer.notEnoughDataInfoBody": "You need at least 2 classes with 3 examples each to attempt to train a model.",
		"menu.trainer.notEnoughDataInfo": "You have not collected enough data to train a model. You need at least 2 classes with 3 examples each. Please go to the Data page to collect more data",
		"menu.trainer.trainModelButton": "Train model",
		"menu.trainer.trainNewModelButton": "Train a new model",
		"menu.trainer.TrainingFinished": "Training done",
		"menu.trainer.TrainingFinished.body": "Go to the Model-page to examine how well your model works",
		"menu.trainer.isTrainingModelButton": "Training model",
		// MODEL MENU:
		"menu.model.helpHeading": "Model",
		"menu.model.helpBody": "The model can be used in an interactive system. Here we use the trained model to predict gestures. You can connect another Calliope mini and make it respond to the predicted gestures.",
		"menu.model.noModel": "No model",
		"menu.model.connectOutputButton": "Connect output Calliope mini",
		"menu.model.disconnect": "Disconnect output Calliope mini",
		//CONNECT MICROBIT POP UP:

		"popup.connectMB.main.bluetooth.subtitle": "Connect using Bluetooth",

		"popup.connectMB.bluetooth.heading": "Connect using Bluetooth",
		"popup.connectMB.bluetooth.cancelledConnection": "You cancelled the connection process. Try again, if you wish to proceed.",
		"popup.connectMB.bluetooth.step0": "Connect your Calliope mini to a battery",
		"popup.connectMB.bluetooth.step1": "Draw the pattern as displayed on the Calliope mini",
		"popup.connectMB.bluetooth.step2": "Press the 'Connect' button below.",
		"popup.connectMB.bluetooth.step3": "Select your Calliope mini and press 'Connect'.",
		"popup.connectMB.bluetooth.connect": "Connect",
		"popup.connectMB.bluetooth.connecting": "Connecting...",
		"popup.connectMB.bluetooth.invalidPattern": "The pattern you drew is invalid",

		"popup.disconnectedWarning.input": "Your input Calliope mini lost connection, do want to try again?",
		"popup.disconnectedWarning.output": "Your output Calliope mini lost connection, do want to try again?",
		"popup.disconnectedWarning.reconnectButton.input": "Reconnect input",
		"popup.disconnectedWarning.reconnectButton.output": "Reconnect output",

		// NEW CONNECTION PROMPTS - TODO: Rename, merge with above and clean up

		"connectMB.main.usbHeader": "DOWNLOAD PROGRAM TO Calliope mini",
		"connectMB.main.btHeader": "CONNECT YOUR Calliope mini USING BLUETOOTH",
		"connectMB.main.usbBody": "If you have not previously downloaded the program",
		"connectMB.main.btBody": "If you have already downloaded the program",
		"connectMB.main.connectButton": "Connect",
		"connectMB.main.installButton": "Download",

		"connectMB.output.header": "A Calliope mini is already connected",

		"connectMB.usb.header": "DOWNLOAD PROGRAM TO Calliope mini",
		"connectMB.usb.body1": "Connect your Calliope mini using a USB-cable and click 'Next'",
		"connectMB.usb.body2": "Click 'Find USB unit' and select 'Calliope mini CMSIS-DAP' or 'DAPLink CMSIS-DAP' from the popup that appears",
		"connectMB.usb.button1": "Next",
		"connectMB.usb.button2": "Find USB unit",
		"connectMB.usb.pleaseWait": "Please wait. Downloading program to the Calliope mini",
		"connectMB.usb.done.body1": "Done - the program has been downloaded.",
		"connectMB.usb.done.body2": "You can now connect through bluetooth.",
		"connectMB.usb.done.body3": "If you have a battery for the Calliope mini, you can now remove the usb-cable and use the battery instead.",
		"connectMB.usb.done.body4": "If you do not have a battery for the Calliope mini, you can simply keep powering it through the usb cable.",

		"connectMB.usb.manual.header": "Transfer file to your Calliope mini",
		"connectMB.usb.manual.manualDownload": "If the file did not automatically download press",
		"connectMB.usb.manual.manualDownloadLink": "here",
		"connectMB.usb.manual.done": "Done: Connect using bluetooth",

		"connectMB.usb.firmwareBroken.warning":"We detected issues with your Calliope mini firmware",
		"connectMB.usb.firmwareBroken.content1":"The version of Calliope mini and firmware have known issues, that prevent us from uploading the program to it.",
		"connectMB.usb.firmwareBroken.content2":"To proceed, you will have to transfer manually, or update your Calliope mini's firmware.",
		"connectMB.usb.firmwareBroken.content3":"We recommend that you upgrade the firmware of your Calliope mini to the latest version to fix this issue.",
		"connectMB.usb.firmwareBroken.content4":"A guide on how can be found on the ",
		"connectMB.usb.firmwareBroken.content4.website":"Calliope mini foundation's website",
		"connectMB.usb.firmwareBroken.button.skip":"Skip and transfer manually",

		"connectMB.outputMB.same": "Use the same Calliope mini",
		"connectMB.outputMB.different": "Connect another Calliope mini",
		"connectMB.outputMB.sameButton": "Same",
		"connectMB.outputMB.otherButton": "Other",
		// COOKIE BANNER

		"cookies.banner.title": "Cookie policy",
		"cookies.banner.subtitle": "Performance & analytics",
		"cookies.banner.text.pleaseHelp": "Please help us make it better by keeping the cookies enabled.",
		"cookies.banner.text.description": "Here at ML-Machine we use cookies to collect information on the usage and performance of the website. Without these cookies, we will not be able to collect vital information on the performance of the site.",
		"cookies.banner.text.readMore": "You can read more about it ",
		"cookies.banner.text.readMore.here": "here",
		"cookies.banner.buttons.reject": "Reject",
		"cookies.banner.buttons.accept": "Accept",

		"cookies.overlay.title": "Cookie policy",

		"cookies.overlay.question.whatAreCookies": "What are cookies?",
		"cookies.overlay.question.ourReasoning": "What do we use cookies for?",
		"cookies.overlay.question.storageDuration": "For how long are cookies stored?",
		"cookies.overlay.question.deleting": "How do i delete cookies?",
		"cookies.overlay.question.consentChange": "How do i change my consent?",

		"cookies.overlay.answer.whatAreCookies": "Cookies are small data files stored on the device you are using to browse websites. They are not programs, that contain harmful malware or viruses.",
		"cookies.overlay.answer.ourReasoning": "We use cookies to collect information on the usage and performance of the website. Without these cookies, we will not be able to collect vital information on the performance of the site.",
		"cookies.overlay.answer.storageDuration": "It varies from site to site and the usage of the cookie. Some may be stored for only the current session, while others may be stored for days. Our cookies are stored for one year.",
		"cookies.overlay.answer.deleting": "It varies from browser to browser. However here are some of the manuals for some of the most commonly used browsers.",
		"cookies.overlay.answer.consentChange": "Currently, you have not rejected nor agreed to our cookie policy. But once you do, you will be able to delete cookies to change your consent at any time.",

		"cookies.overlay.table.title": "The cookies we use",
		"cookies.overlay.table.header.description": "Description",

		"cookies.overlay.table.row.ai_user.description": "Used by Microsoft Application Insights software to collect statistical usage and telemetry information. The cookie stores a unique identifier to recognise users on returning visits over time.",
		"cookies.overlay.table.row.ai_session.description": "Preserves users states across page requests.",
		"cookies.overlay.table.row.cookie_consent.description": "Stores the terms to which you have given consent to in regards to our cookie policy.",

		// COMPATIBILITY WARNING
		"popup.compatibility.bluetooth.header": "Bluetooth incompatible browser!",
		"popup.compatibility.bluetooth.explain": "The browser you are currently using does not support bluetooth.",
		"popup.compatibility.bluetooth.advice": "Please update the browser or use another one from our supported browsers list below.",

		"popup.connectMB.USBCompatibility.transferStep.step1": "Open the location to which the firmware was downloaded. Most commonly found in your download folder.",
		"popup.connectMB.USBCompatibility.transferStep.step2": "Drag the file onto the Calliope mini on your computer's file explorer.",
		"popup.connectMB.USBCompatibility.transferStep.step3": "Once the file has finished transferring, the Calliope mini can be connected using Bluetooth.",

		"compatibility.platform.notSupported": "The tool is not supported on your current platform.",
		"compatibility.platform.notSupported.joinDesktop": "Join us on desktop.",
		"compatibility.webgl.notSupported": "WebGL not available. Enable WebGL to see 3D data view.",

		// CONNECTION LOST DIALOG

		"dialog.connection.lost.header": "Connection offline",
		"dialog.connection.lost.body": "Your internet connection is offline, some features may not work properly",

		// OUTDATED MICROBIT WARNING

		"popup.outdatedmicrobit.header": "Your Calliope mini USB-firmware is outdated.",
		"popup.outdatedmicrobit.text": "We strongly recommend that you update it now, as some features may not work as expected.",
		"popup.outdatedmicrobit.button": "I understand",
	},
	"de": {
		// ALERTS:
		//In gesture.svelte
		"alert.data.classNameLengthAlert": "Namen dürfen aus maximal {{maxLen}} Zeichen bestehen.",
		"alert.recording.disconnectedDuringRecording":"Calliope mini wird während der Aufnahme getrennt",

		//In common.js
		"alert.isRecording": "Du nimmst gerade auf!",
		"alert.isTesting": "Du nimmst gerade auf!",
		"alert.isTraining": "Du trainierst gerade ein Model!",
		"alert.isNotConnected": "Dein Calliope mini sollte angeschlossen sein!",
		"alert.deleteGestureConfirm": "Bist du sicher, dass du die Klasse löschen willst ",
		//In ml.ts
		"alert.twoGestures": "Du brauchst mindestens zwei Klassen",
		"alert.oneDataRepresentation": "Du brauchst mindestens eine Datendarstellung",
		"alert.recordingsPerGesture": "Du brauchst mindestens drei Beispiele pro Klasse",
		// HOME PAGE:
		"content.index.heading": "Maschinelles Lernen zum Selbermachen",
		"content.index.howBody": "Willkommen zum Datentraining. Experimentiere und spiele mit maschinellem Lernen und entwickle deine eigenen Machine-Learning-Modelle. Beginne hier!",
		"content.index.ledDescription": "25 LED-Matrix",
		"content.index.recordButtonDescription": "\"Aufnahme\"-Taste",
		"content.index.videoHeading": "Intro Video",
		"content.index.setupBody2": "Die Website nutzt die Bluetooth-Funktion, den Beschleunigungsmesser, die LEDs, die Tasten und die Töne des Calliope mini. Anschließend kann der Calliope mini über Bluetooth mit dem Computer verbunden werden, ohne ein USB-Kabel zu verwenden.",
		"content.index.oldVersion": "Die alte Version findest du hier:",
		"content.index.contactButton": "Kontakt",
		"content.index.contactBody": "Wenn du Fehler auf dieser Plattform findest, kannst du uns gerne schreiben. Falls du andere Wünsche, Ideen oder allgemeines Interesse hast, kannst du uns ebenfalls gerne kontaktieren. Die Ersteller dieser Plattform können kontaktiert werden unter:","content.index.contactBodyGithub": "Du kannst auch unsere Github-Seite besuchen:",
		"content.index.contactMail": "keb@cs.au.dk",
		"content.index.acknowledgement": "Entwickelt vom Center for Computational Thinking and Design, Universität Aarhus",
		// DATA PAGE:
		"content.data.classPlaceholderNewClass": "Drücke hier, um den Namen zu ändern",
		"content.data.record": "Aufnehmen",
		"content.data.addData": "Daten hinzufügen",
		"content.data.classHelpHeader": "Klasse",
		"content.data.classHelpBody": "Eine Klasse beschreibt eine Art von Geste. Wir können Beispiele für eine bestimmte Art von Geste aufzeichnen und die Beispiele in dieselbe Klasse einordnen. Das Training kann Muster in den Beispielen/Daten finden und diese Muster verwenden, um ein Modell zu 'trainieren', das diese Klasse von Gesten erkennen kann. Mehrere Beispiele führen in der Regel zu einem besseren Modell, wobei zu berücksichtigen ist, auf wie viele verschiedene Arten eine Geste ausgeführt werden kann.","content.data.classification": "Klassen",
		"content.data.data": "Daten",
		"content.data.choice": "Wahl",
		"content.data.choice.header": "Wahl der Klasse",
		"content.data.choice.body": "Hier wählst du aus, zu welcher Klasse du Daten hinzufügen möchtest. Nachdem du eine Klasse ausgewählt hast, kannst du entweder die Taste \"Aufnehmen\" unten drücken oder eine der Tasten auf deinem Calliope mini drücken, um ein Datensegment aufzuzeichnen. Siehe das Bild unten.",

		"content.data.dataDescription": "Hier können die gesammelten Daten eingesehen werden. ",
		"content.data.addDataNoConnection": "Du kannst keine Daten hinzufügen, ohne mit einem Calliope mini verbunden zu sein.",
		"content.data.noData": "Du hast noch keine Gesten zum Trainieren. Füge die Gesten hinzu, die der Calliope mini zu erkennen lernen soll.",

		"content.data.controlbar.button.clearData": "Lösche Beispiele",
		"content.data.controlbar.button.clearData.confirm": "Bist du sicher, dass alle Gestenbeispiele gelöscht werden sollen? Dies kann nicht rückgängig gemacht werden.",
		"content.data.controlbar.button.downloadData": "Datensatz herunterladen",
		"content.data.controlbar.button.uploadData": "Datensatz hochladen",

		// TRAINER PAGE:
		"content.trainer.failure.header": "Training fehlgeschlagen",
		"content.trainer.failure.body": "Das Training führte nicht zu einem brauchbaren Modell. Der Grund dafür sind höchstwahrscheinlich die für das Training verwendeten Daten. Wenn die Daten für verschiedene Klassen zu ähnlich sind, kann dies zu Problemen im Trainingsprozess führen.",
		"content.trainer.failure.todo": "Gehe zur Datenseite zurück und ändere die Daten.",
		"content.trainer.controlbar.filters": "Filter",

		"content.filters.max.title" : "Maximale Werte",
		"content.filters.max.description" : "Der höchste Punkt unter allen Datenpunkten in einer Geste.",
		"content.filters.min.title" : "Minimum Werte",
		"content.filters.min.description" : "Der niedrigste Punkt unter allen Datenpunkten einer Geste.",
		"content.filters.std.title" : "Standardabweichung",
		"content.filters.std.description" : "Die durchschnittliche Abweichung von 0 für alle Datenpunkte einer Geste.",
		"content.filters.peaks.title" : "Anzahl der Extremwerte",
		"content.filters.peaks.description" : "Die Anzahl der Extremwerte unter allen Datenpunkten in einer Geste.",
		"content.filters.acc.title" : "Gesamtbeschleunigung",
		"content.filters.acc.description" : "Die Summe der Beschleunigung für die gesamte Geste, berechnet in absoluten Werten, so dass Minus als Plus zählt. Gut geeignet, um das Ausmaß der Bewegung zu verstehen.",
		"content.filters.mean.title" : "Mittlere",
		"content.filters.mean.description": "Mittelwert der Beschleunigungen in verschiedenen Achsen",
		"content.filters.zcr.title" : "Rate des Nulldurchgangs",
		"content.filters.zcr.description": "Die Geschwindigkeit, mit der die Eingabe (Beschleunigung) von positiv zu null zu negativ oder von negativ zu null zu positiv wechselt.",
		"content.filters.rms.title" : "Mittleres Wurzelquadrat",
		"content.filters.rms.description": "",

		// MODEL PAGE:
		"content.model.trainModelFirstHeading": "Trainiere zuerst das Modell!",
		"content.model.trainModelFirstBody": "Gehe auf die 'Training' Seite",
		"content.model.classification.helpHeading": "Wahrscheinlichkeitsmesser",
		"content.model.classification.helpBody": "Für jede Vorhersage, die du triffst, gibt das Modell einen Prozentsatz an, der beschreibt, wie sicher das Modell in seiner Vorhersage ist. Diese Anzeige reicht von 0% bis 100%. Mit dem Schieberegler daneben kannst du festlegen, wie sicher das Modell in seiner Vorhersage sein soll, um eine Ausgabe zu machen (z. B. einen Ton abzuspielen)",
		"content.model.output.soundOptionCongratulations": "Glückwunsch",
		"content.model.output.soundOptionHighPitchBeep": "Hoher Signalton",
		"content.model.output.soundOptionLowPitchBeep": "Tiefer Signalton",
		"content.model.output.soundOptionLoser": "Verlierer",
		"content.model.output.soundOptionMistake": "Fehler",
		"content.model.output.soundOptionHugeMistake": "Großer Fehler",

		"content.model.output.pin.option.allTime": "Immer an",
		"content.model.output.pin.option.xTime": "eine Zeit lang",
		"content.model.output.pin.seconds": "Sekunden",

		"content.model.output.prediction.iconTitle": "Vorhersage",
		"content.model.output.prediction.descriptionTitle": "Vorhersage",
		"content.model.output.prediction.descriptionBody": "Hier siehst du die Vorhersage des Modells für die aktuelle Geste. In der Anzeige kannst du sehen, wie zuversichtlich das Modell mit seiner Vorhersage ist.",

		"content.model.output.ledOutput.descriptionTitle": "LED Ausgabe",
		"content.model.output.ledOutput.descriptionBody": "Hier kannst du auswählen, wie sich die LEDs auf deinem Ausgabe-Calliope mini verhalten, wenn dein Modell Vorhersagen macht. Versuche, einige Muster zu zeichnen und sehe, wie sie auf dem Ausgabe-Calliope mini erscheinen, wenn du den Eingangs-Calliope mini bewegst.",

		"content.model.output.sound.iconTitle": "Töne",
		"content.model.output.sound.descriptionTitle": "Wiedergabe von Tönen",
		"content.model.output.sound.descriptionBody": "Hier kannst du auswählen, welchen Sound dein Calliope mini abspielt, wenn das Modell eine Vorhersage macht.",
		
		"content.model.output.pin.iconTitle": "Pin",
		"content.model.output.pin.descriptionTitle": "Pin Ausgaben",
		"content.model.output.pin.descriptionBody": "Hier kannst du auswählen, welcher Pin bei der Vorhersage einer Geste aktiviert werden soll. Die einzelnen Pins sind entsprechend dem Pin-Diagramm deines Calliope mini nummeriert.",

		"content.model.output.popup.header": "Ausgabe-Calliope mini anschließen",
		"content.model.output.popup.body": "Wenn du keinen Ausgabe-Calliope mini angeschlossen hast, kannst du die Ergebnisse der auf dieser Seite vorgenommenen Änderungen nicht sehen. Verwende ansonsten die Schaltfläche 'Verbinden' unten",

		// FOOTER:
		"footer.connectButtonNotConnected": "Verbinde deinen Calliope mini",
		"footer.disconnectButton": "Trennen",
		"footer.helpHeader": "Live-Diagramm",
		"footer.helpContent": "Sobald du einen Calliope mini angeschlossen hast, kannst du die Beschleunigungsdaten für alle drei Achsen in diesem Diagramm in Echtzeit beobachten. Versuche, deinen angeschlossenen Calliope mini zu bewegen, um zu sehen, wie die Daten auf deinem Computer aussehen!",
		"footer.reconnecting":"Verbindung wird wiederhergestellt. Bitte warten",
		//DATA MENU:
		"menu.data.helpHeading": "Daten",
		"menu.data.helpBody": "Um ein Modell darauf zu trainieren verschiedene Bewegungen zu erkennen, brauchen wir saubere Beispiele für die Geste, die wir dann dem Training zeigen können. Hier kannst du Klassen (Arten von Gesten) erstellen und Beispiele für jede Klasse aufzeichnen. Es müssen mindestens 2 Klassen mit jeweils 3 Beispielen vorhanden sein, bevor das Training ein eigenes Modell trainieren kann.",
		"menu.data.examples": "Beispiele",
		// TRAINER MENU:
		"menu.trainer.helpHeading": "Training",
		"menu.trainer.helpBody": "Das Training sieht sich die Beispiele in jeder der Klassen an und versucht zu 'lernen', wie die verschiedenen Klassen erkannt werden können, indem es nach Mustern in den Daten sucht. Hier kannst du ein Modell zur Erkennung verschiedener Gesten trainieren.", // In addition, you can configure the trainer, choose how the trainer should interpret the data and create test sets.",
		"menu.trainer.notConnected1": "Du hast keinen Calliope mini angeschlossen.",
		"menu.trainer.notConnected2": "Bitte beginne dies über die unten stehende Schaltfläche",
		"menu.trainer.notEnoughDataHeader1": "Nicht genügend Daten\nzur Daten-Seite gehen",
		"menu.trainer.notEnoughDataInfoBody": "Man braucht mindestens 2 Klassen mit je 3 Beispielen, um zu versuchen, ein Modell zu trainieren.",
		"menu.trainer.notEnoughDataInfo": "Es wurden nicht genügend Daten gesammelt, um ein Modell zu trainieren. Man braucht mindestens 2 Klassen mit je 3 Beispielen. Bitte gehe zur Daten-Seite, um mehr Daten zu sammeln",
		"menu.trainer.trainModelButton": "Modell trainieren",
		"menu.trainer.trainNewModelButton": "Ein neues Modell trainieren",
		"menu.trainer.TrainingFinished": "Training durchgeführt",
		"menu.trainer.TrainingFinished.body": "Gehe zur Modell-Seite, um zu prüfen, wie gut das Modell funktioniert",
		"menu.trainer.isTrainingModelButton": "Trainingsmodell",
		// MODEL MENU:
		"menu.model.helpHeading": "Modell",
		"menu.model.helpBody": "Das Modell kann in einem interaktiven System verwendet werden. Hier verwenden wir das trainierte Modell, um Gesten vorherzusagen. Man kann einen anderen Calliope mini anschließen und ihn dazu bringen, auf die vorhergesagten Gesten zu reagieren.",
		"menu.model.noModel": "Kein Modell",
		"menu.model.connectOutputButton": "Ausgabe-Calliope mini verbinden",
		"menu.model.disconnect": "Ausgabe-Calliope mini trennen",
		//CONNECT MICROBIT POP UP:

		"popup.connectMB.main.bluetooth.subtitle": "Verbindung über Bluetooth",

		"popup.connectMB.bluetooth.heading": "Verbindung über Bluetooth",
		"popup.connectMB.bluetooth.cancelledConnection": "Die Verbindung wurde abgebrochen. Zur Fortsetzung des Vorgangs bitte erneut versuchen.",
		"popup.connectMB.bluetooth.step0": "Calliope mini an ein Batteriefach anschließen",
		"popup.connectMB.bluetooth.step1": "Das Muster so nachzeichnen, wie es auf dem Calliope mini angezeigt wird",
		"popup.connectMB.bluetooth.step2": "Auf die Schaltfläche 'Verbinden' klicken.",
		"popup.connectMB.bluetooth.step3": "Calliope mini auswählen und 'Verbinden' klicken.",
		"popup.connectMB.bluetooth.connect": "Verbinden",
		"popup.connectMB.bluetooth.connecting": "Verbinde...",
		"popup.connectMB.bluetooth.invalidPattern": "Das gezeichnete Muster ist ungültig",

		"popup.disconnectedWarning.input": "Der Eingabe-Calliope mini hat die Verbindung verloren, soll die Verbindung noch einmal gesucht werden?",
		"popup.disconnectedWarning.output": "Der Ausgabe-Calliope mini hat die Verbindung verloren, soll die Verbindung noch einmal gesucht werden?",
		"popup.disconnectedWarning.reconnectButton.input": "Verbindung wiederherstellen",
		"popup.disconnectedWarning.reconnectButton.output": "Ausgabe wiederherstellen",

		// NEW CONNECTION PROMPTS - TODO: Rename, merge with above and clean up

		"connectMB.main.usbHeader": "Programm auf Calliope mini herunterladen",
		"connectMB.main.btHeader": "Den Calliope mini mit Bluetooth verbinden",
		"connectMB.main.usbBody": "Falls das Programm noch nicht heruntergeladen wurde",
		"connectMB.main.btBody": "Falls das Programm heruntergeladen wurde",
		"connectMB.main.connectButton": "Verbinden",
		"connectMB.main.installButton": "Herunterladen",

		"connectMB.output.header": "Ein Calliope mini ist bereits verbunden",

		"connectMB.usb.header": "Das Programm auf den Calliope mini herunterladen",
		"connectMB.usb.body1": "Calliope mini mit einem USB-Kabel anschließen und auf 'Weiter' klicken.",
		"connectMB.usb.body2": "Auf 'USB-Gerät suchen' klicken und dann 'Calliope mini V3 CMSIS-DAP' oder 'DAPLink CMSIS-DAP' in dem Popup-Fenster auswählen",
		"connectMB.usb.button1": "Weiter",
		"connectMB.usb.button2": "USB-Gerät finden",
		"connectMB.usb.pleaseWait": "Bitte warten. Programm wird auf den Calliope mini heruntergeladen",
		"connectMB.usb.done.body1": "Erledigt - das Programm wurde heruntergeladen.",
		"connectMB.usb.done.body2": "Es kann jetzt eine Bluetooth-Verbindung hergestellt werden.",
		"connectMB.usb.done.body3": "Wenn du eine Batterie für den Calliope mini hast, kannst du jetzt das USB-Kabel entfernen und stattdessen die Batterie verwenden.",
		"connectMB.usb.done.body4": "Falls du keine Batterie für den Calliope mini hast, kannst du ihn einfach über das USB-Kabel weiter mit Strom versorgen.",

		"connectMB.usb.manual.header": "Übertrage die Datei auf den Calliope mini",
		"connectMB.usb.manual.manualDownload": "Wenn die Datei nicht automatisch heruntergeladen wurde, drücke",
		"connectMB.usb.manual.manualDownloadLink": "hier",
		"connectMB.usb.manual.done": "Erledigt: Verbunden mit Bluetooth",

		"connectMB.usb.firmwareBroken.warning":"Wir haben Probleme mit der Calliope mini USB-Firmware festgestellt",
		"connectMB.usb.firmwareBroken.content1":"Die Versionen des Calliope mini und der USB-Firmware haben Probleme, die uns daran hindern, das Programm hochzuladen.",
		"connectMB.usb.firmwareBroken.content2":"Um fortzufahren, muss die Datei manuell übertragen werden oder die USB-Firmware des Calliope mini aktualisiert werden.",
		"connectMB.usb.firmwareBroken.content3":"Wir empfehlen, dass die Firmware des Calliope mini auf die neueste Version aktualisiert wird, um dieses Problem zu beheben.",
		"connectMB.usb.firmwareBroken.content4":"Eine Anleitung dazu befindet sich auf der ",
		"connectMB.usb.firmwareBroken.content4.website":"Calliope Webseite",
		"connectMB.usb.firmwareBroken.button.skip":"Überspringen und manuell übertragen",

		"connectMB.outputMB.same": "Verwende den gleichen Calliope mini",
		"connectMB.outputMB.different": "Verbinde einen anderen Calliope mini",
		"connectMB.outputMB.sameButton": "gleich",
		"connectMB.outputMB.otherButton": "Anderen",
		// COOKIE BANNER

		"cookies.banner.title": "Cookie-Richtlinie",
		"cookies.banner.subtitle": "Leistung und Analyse",
		"cookies.banner.text.pleaseHelp": "Bitte hilf uns, es besser zu machen, indem du die Cookies aktiviert lässt.",
		"cookies.banner.text.description": "Hier bei ML-Machine verwenden wir Cookies, um Informationen über die Nutzung und Leistung der Website zu sammeln. Ohne diese Cookies sind wir nicht in der Lage, wichtige Informationen über die Leistung der Website zu sammeln.",
		"cookies.banner.text.readMore": "Mehr darüber findest du ",
		"cookies.banner.text.readMore.here": "hier",
		"cookies.banner.buttons.reject": "Ablehnen",
		"cookies.banner.buttons.accept": "Akzeptieren",

		"cookies.overlay.title": "Cookie-Richtlinie",

		"cookies.overlay.question.whatAreCookies": "Was sind Cookies?",
		"cookies.overlay.question.ourReasoning": "Wozu verwenden wir Cookies?",
		"cookies.overlay.question.storageDuration": "Wie lange werden Cookies gespeichert?",
		"cookies.overlay.question.deleting": "Wie kann ich Cookies löschen?",
		"cookies.overlay.question.consentChange": "Wie kann ich meine Zustimmung ändern?",

		"cookies.overlay.answer.whatAreCookies": "Cookies sind kleine Datendateien, die auf dem Gerät gespeichert werden, das zum Surfen auf Websites verwendet wird.",
		"cookies.overlay.answer.ourReasoning": "Wir verwenden Cookies, um Informationen über die Nutzung und Leistung der Website zu sammeln. Ohne diese Cookies sind wir nicht in der Lage, wichtige Informationen über die Leistung der Website zu sammeln.",
		"cookies.overlay.answer.storageDuration": "Dies ist von Website zu Website und von der Verwendung des Cookies abhängig. Einige können nur für die aktuelle Sitzung gespeichert werden, während andere tagelang gespeichert werden können. Unsere Cookies werden für ein Jahr gespeichert.",
		"cookies.overlay.answer.deleting": "Dies variiert von Browser zu Browser. Hier sind jedoch einige der Handbücher für die am häufigsten verwendeten Browser.",
		"cookies.overlay.answer.consentChange": "Derzeit wurde unsere Cookie-Richtlinie weder abgelehnt noch ihr zugestimmt. Sobald dies jedoch geschehen ist, können die Cookies gelöscht werden und die Zustimmung jederzeit geändert werden.",

		"cookies.overlay.table.title": "Die Cookies, die wir verwenden",
		"cookies.overlay.table.header.description": "Beschreibung",

		"cookies.overlay.table.row.ai_user.description": "Wird von der Software Microsoft Application Insights verwendet, um statistische Nutzungs- und Telemetriedaten zu sammeln. Der Cookie speichert eine eindeutige Kennung, um Benutzer bei wiederholten Besuchen im Laufe der Zeit wiederzuerkennen.",
		"cookies.overlay.table.row.ai_session.description": "Bewahrt den Status des Benutzers über Seitenaufrufe hinweg.",
		"cookies.overlay.table.row.cookie_consent.description": "Speichert die Bedingungen, denen du in Bezug auf unsere Cookie-Richtlinie zugestimmt hast.",

		// COMPATIBILITY WARNING
		"popup.compatibility.bluetooth.header": "Bluetooth-inkompatibler Browser!",
		"popup.compatibility.bluetooth.explain": "Der Browser, den du gerade verwendest, unterstützt kein Bluetooth.",
		"popup.compatibility.bluetooth.advice": "Bitte aktualisiere deinen Browser oder verwende einen anderen Browser aus unserer Liste der unterstützten Browser.",

		"popup.connectMB.USBCompatibility.transferStep.step1": "Das Verzeichnis öffnen, in das die Firmware heruntergeladen wurde. In der Regel befindet sich dieser Ort in dem Download-Ordner.",
		"popup.connectMB.USBCompatibility.transferStep.step2": "Die Datei auf den Calliope mini im Dateiexplorer des Computers auf das Laufwerk 'MINI ziehen'.",
		"popup.connectMB.USBCompatibility.transferStep.step3": "Sobald die Übertragung der Datei abgeschlossen ist, kann der Calliope mini über Bluetooth verbunden werden.",

		"compatibility.platform.notSupported": "Sobald die Übertragung der Datei abgeschlossen ist, kann der Calliope mini über Bluetooth verbunden werden.",
		"compatibility.platform.notSupported.joinDesktop": "Begleite uns auf dem Desktop.",
		"compatibility.webgl.notSupported": "WebGL ist nicht verfügbar. WebGL aktivieren, um die 3D-Datenansicht zu sehen.",

		// CONNECTION LOST DIALOG

		"dialog.connection.lost.header": "Verbindung offline",
		"dialog.connection.lost.body": "Ihre Internetverbindung ist offline, einige Funktionen arbeiten möglicherweise nicht richtig",

		// OUTDATED MICROBIT WARNING

		"popup.outdatedmicrobit.header": "Die Calliope mini USB-Firmware ist veraltet.",
		"popup.outdatedmicrobit.text": "Wir empfehlen dringend, diese jetzt zu aktualisieren, da einige Funktionen möglicherweise nicht wie erwartet funktionieren",
		"popup.outdatedmicrobit.button": "Ich verstehe",
	}
};
  