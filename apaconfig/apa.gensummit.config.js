apaCallbackConfigGensummitApa({
	
	events: {

// Fixed Events		
		"Rent": {
			
			"id":			"1",
			"title":		"Rent",
			"description":	"The rent is due. What do you want do do?",
			"options":		["Pay","Set aside","Look for another flat"],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[533],
			"stress":		[0],
			"work":			0,
			"sperre":		[0],    // 0 - event kann aktiviert werden, 1 - event kann nicht aktiviert werden
			"nextEvents":	[0]
		},
		"Groceries": {
			
			"id":			"2", 
			"title":		"Groceries",
			"description":	"You need to go shopping for groceries. The healthy stuff is expensive and tends to spoil quickly. What do you want do do?",
			"options":		["Get the good stuff","Look what they got at SoMa","Rice and noodles must do"],
			"fixed":		2,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[136,25,75],
			"stress":		[-10,0,10],
			"work":			0,
			"sperre":		[0,1,0],    // event "SoMa" kann 2 x pro Monat aktiviert werden
			"nextEvents":	[0]
		},
		"Energy Bill": {
			
			"id":			"3", 
			"title":		"Energy Bill",
			"description":	"Electricity and Gas don't come for free. What do you want do do?",
			"options":		["Pay","Add to the pile"],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[100,0],
			"stress":		[0,10],
			"work":			0,
			"sperre":		[0,1,0],    // 0 - event kann aktiviert werden, 1 - event kann nicht aktiviert werden
			"nextEvents":	[0]
		},
		"TelCo Bill": {
			
			"id":			"4", 
			"title":		"TelCo Bill",
			"description":	"They don't charge you for public Television. But the mobile, cable and internet are still expensive. What do you want do do?",
			"options":		["Pay","Who needs Internet anyway?", "Add to the pile"],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[51,31,0],
			"stress":		[0,5,10],
			"work":			0,
			"sperre":		[0,1,0],    // Internet-Anschluss kann nur einmal gekündigt werden
			"nextEvents":	[0,1,0],    // Folge-Event: Telco Bill 2 (event #5) im nächsten Monat
		},
		"TelCo Bill 2": {
			
			"id":			"5", 
			"title":		"Mobile Bill",
			"description":	"They don't charge you for public Television. But the mobile and cable still cost. What do you want do do?",
			"options":		["Pay","I can't do without internet.", "Add to the pile"],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[31,51,0],
			"stress":		[0,-5,10],
			"work":			0,
			"sperre":		[0,1,0],    // Internet-Anschluss kann nur einmal wiederhergestellt werden
			"nextEvents":	[0,1,0]    // Folge-Event: Telco Bill (event #4) im nächsten Monat
		},
				
		
		"Pay Check": {
			
			"id":			"6", 
			"title":		"Paycheck",
			"description":	"Too little to live, to much to die.",
			"options":		[],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[-650],
			"stress":		[-5],
			"work":			0,
			"sperre":		[0],    // 0 - event kann aktiviert werden, 1 - event kann nicht aktiviert werden
			"nextEvents":	[0]
		},
		"Mindestsicherung": {
			
			"id":			"7", 
			"title":		"Welfare-Check",
			"description":	"This is supposed to cover all the necessary expenses.",
			"options":		[],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[-313,96],
			"stress":		[-5],
			"work":			0,
			"sperre":		[0],    // 0 - event kann aktiviert werden, 1 - event kann nicht aktiviert werden
			"nextEvents":	[0]
		},
		"Familienbeihilfe": {
			
			"id":			"8", 
			"title":		"Familly Alowance",
			"description":	"This is for the little one (the well off also get it).",
			"options":		[],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[-171],
			"stress":		[-5],
			"work":			0,
			"sperre":		[0],    // 0 - event kann aktiviert werden, 1 - event kann nicht aktiviert werden
			"nextEvents":	[0]
		},
		"Alimente": {
			
			"id":			"9", 
			"title":		"Alimony",
			"description":	"You're divorced. But your son is his kid, too!",
			"options":		[],
			"fixed":		1,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[-100],
			"stress":		[-5],
			"work":			0,
			"sperre":		[0],    // 0 - event kann aktiviert werden, 1 - event kann nicht aktiviert werden
			"nextEvents":	[1]	  // kann Zufallsevent "Unterhaltsstopp" auslösen
		},

// Random Events
		"Unterhaltsstopp": {
			
			"id":			"10", 
			"title":		"No more Alimony",
			"description":	"Your ex-husband lost his job and ceased paying alimony. What do you do?",
			"options":		["Sue him", "Try to get the money from the state"],
			"fixed":		0,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[0,0],
			"stress":		[-10,-10],
			"work":			0,
			"sperre":		[1],    // event kann nur einmal aktiviert werden
			"nextEvents":	[1]   // ab sofort keine Unterhaltszahlungen mehr
		},
		"Waschmaschine": {
			
			"id":			"11", 
			"title":		"Washing Machine breaks down",
			"description":	"Your washing machine breaks down. What do you do?",
			"options":		["Buy a new one", "Buy a used one", "Go without"],
			"fixed":		0,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[250,100,0],
			"stress":		[-5,5,50],
			"work":			0,
			"sperre":		[1],    // event kann nur einmal aktiviert werden
			"nextEvents":	[0]   // 
		},
		"Geburtstag": {
			
			"id":			"12", 
			"title":		"Birthday Present",
			"description":	"Your best day celebrates birthday. Everybody chips in for a present. What do you do?",
			"options":		["Pay","Don't go to the party"],
			"fixed":		0,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[25,0],
			"stress":		[0,10],
			"work":			0,
			"sperre":		[1],    // event kann nur einmal aktiviert werden
			"nextEvents":	[0]   // 
		},
		"Panini": {
			
			"id":			"13", 
			"title":		"Soccer-Mania",
			"description":	"Your son comes home from school crying: Everybody is swapping soccer-stickers - everybody, but him. What do you do?",
			"options":		["Get him a sticker album","No money for that"],
			"fixed":		0,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[15,0],
			"stress":		[0,5],
			"work":			0,
			"sperre":		[1],    // event kann nur einmal aktiviert werden
			"nextEvents":	[0]   // 
		},
		"Skikurs": {
			
			"id":			"14", 
			"title":		"Skiing Camp",
			"description":	"The school is taking all the kids to skiing camp. Its expensive, but your son really, really, pleeease wants to go (and you could use the leisure time). What do you do?",
			"options":		["Pay", "Ask for assistance","No money for that"],
			"fixed":		0,    //0 - nein, 1, monthly, 2,weekly
			"costs":		[400,300,0],
			"stress":		[-30,5,20],
			"work":			0,
			"sperre":		[1],    // event kann nur einmal aktiviert werden
			"nextEvents":	[0]   // 
		}
	}	
});


