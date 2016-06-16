apa.namespace.extend( 'visual.gensummit.start.view', function(frameId) {
	
	japa.extend( this, new apa.view() );
	
	this.get = function(content) {
		
		var tHtml = '';
		
		switch( content ) {
			
			case (1):
				
				tHtml = this.getStartPage();
				break;
			case(2):
			
				tHtml = this.getIntro();
				break;
			case(3):
			
				tHtml = this.getInfo();
				break;
		}
		
		return tHtml;
	};
	
	this.getStartPage = function() {
		
		var tHtml	=	'<section class="startPage">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<h2>How long can you last on Public Assistance</h2>';
		tHtml		+=	'<a href="javascript:" class="nav" id="start_2">Let\'s find out</a>';
		tHtml		+=	'<section class="footer">';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li>Credits</li>';
		tHtml		+=	'<li>Legal Notice</li>';
		tHtml		+=	'<li>10123 Views</li>';
		tHtml		+=	'</ul>';
		tHtml		+=	'<img src="apaimages/social.png" />';
		tHtml		+=	'</section>';
		tHtml		+=	'</section>';
		
		return tHtml; 
	};
	
	this.getIntro = function() {
		
		var tHtml	=	'<section class="introPage">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<h2>Intro</h2>';
		tHtml		+=	'<p>In Austria 256.405 people are on needs-based minimum income benefits ("Mindestsicherung"). Singles get a maximum payment of approximately<br />830 &euro; per month and 150 &euro; per kid. Could you live off that money?</p>';
		tHtml		+=	'<a href="javascript:" class="nav" id="start_3">Keep going</a>';
		tHtml		+=	'</section>';
		
		return tHtml;
	};
	
	this.getInfo = function() {
		
		var tHtml	=	'<section class="safetyPage">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<h2>Safety Policy</h2>';
		tHtml		+=	'<p>Are you sure you\'ll make it? In case of doubt: just grab this ticket back to your regular life.</p>';
		tHtml		+=	'<a href="javascript:" class="nav next" id="input">Thank\'s, I\'m good</a>';
		tHtml		+=	'<a href="javascript:" class="nav" id="nogamer">Nope</a>';
		tHtml		+=	'</section>';
		
		return tHtml;
	};
});