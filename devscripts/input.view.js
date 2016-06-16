apa.namespace.extend( 'visual.gensummit.input.view', function(frameId) {
	
	japa.extend( this, new apa.view() );
	
	this.get = function(content) {
		
		var tHtml = '';
		
		switch( content ) {
			
			case (1):
				
				tHtml = this.getCharacter();
				break;
			case(2):
			
				tHtml = this.getSavings();
				break;
			case(3):
			
				tHtml = this.getInfo();
				break;
		}
		
		return tHtml;
	};
	
	this.getCharacter = function() {
		
		var tHtml	=	'<section class="character">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li><a href="javascript:" id="character_1" class="nav character">';
		tHtml		+=	'<img src="apaimages/family_1.png" />';
		tHtml		+=	'</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="character_2" class="nav character">';
		tHtml		+=	'<img src="apaimages/family_2.png" />';
		tHtml		+=	'</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="character_3" class="nav character">';
		tHtml		+=	'<img src="apaimages/family_3.svg" />';
		tHtml		+=	'</a></li>';
		tHtml		+=	'</ul>';		
		tHtml		+=	'</section>';
		
		return tHtml;
	};
	
	this.getSavings = function() {
		
		var tHtml	=	'<section class="savings">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<h2>Savings</h2>';
		tHtml		+=	'<p>What\'s on your savings account? Oh, and did we mention: you won\'t get any money, if you got more than 4.100 &euro;. And you also need to sell your car if you don\'t really need it for your job.</p>';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li><a href="javascript:" id="savings_1" class="nav savings">';
		tHtml		+=	'<img src="apaimages/saving1.svg" />';
		tHtml		+=	'</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="savings_2" class="nav savings">';
		tHtml		+=	'<img src="apaimages/saving2.svg" />';
		tHtml		+=	'</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="savings_3" class="nav savings">';
		tHtml		+=	'<img src="apaimages/saving3.svg" />';
		tHtml		+=	'</a></li>';		
		tHtml		+=	'</ul>';
		tHtml		+=	'</section>';
		
		return tHtml;
	};
	
	this.getInfo = function() {
		
		var tHtml	=	'<section class="letter">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<img class="nav next" src="apaimages/notification.svg" />';
		tHtml		+=	'</section>';
		
		return tHtml;
	};
});