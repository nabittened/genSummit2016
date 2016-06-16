apa.namespace.extend( 'visual.gensummit.game.view', function(frameId) {
	
	japa.extend( this, new apa.view() );
	
	this.get = function(content) {
		
		var tHtml	=	'<section class="letter">';
		tHtml		+=	'<h1>Care</h1>';
		tHtml		+=	'<img class="nav next" src="apaimages/q' + content + '.svg" />';
		tHtml		+=	'</section>';
		
		return tHtml;
	};
});