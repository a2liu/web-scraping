var API = (function () {
	var r = {
		initAccordion: function () {
			$('.collapsible').on('click', function () {
				var heading = $(this);

				$('#' + heading.data('target')).toggle();
				heading.find('.fa').toggleClass('fa-arrow-circle-o-down fa-arrow-circle-o-up');
				heading.toggleClass('open');
			}).each(function (i, heading) {
				heading = $(heading);
				setTimeout(function () {
					$('#' + heading.data('target')).hide();
				}, 1);
			});
		}
	}, u = {
		initialize: function () {
			r.initAccordion();
		}
	};

	return u;
}());

$(API.initialize);