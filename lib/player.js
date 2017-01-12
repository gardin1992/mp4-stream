define(['jquery'], function($) {

	return function (selector) {

		var _player = $(selector).find('video').get(0);
		var _source = $(selector).find('source');

		if (!_source.length)
			_source = $('<source>').appendTo(_player);

		return {

			play: function () {

				_player.play();

			},
			pause: function () {

				_player.pause();

			},
			load: function () {

				_player.load();

			},
			stop: function () {

				_player.pause();
				_player.currentTime = 0;

			},
			changeFile: function (file) {

				$(_player).attr('poster', file.poster);
				_source.attr('src', file.src);
				_player.load();

			}

		};

	}

});