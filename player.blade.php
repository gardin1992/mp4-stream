<div id="player">
	<div>
		<video id="videoPlayer" controls></video>
	</div>
	<script src="/public/js/lib/dash.all.min.js"></script>
	<script>
        (function(){
            var url = "/uploads/catepillar_dash.mpd";
            var player = dashjs.MediaPlayer().create();
            player.initialize(document.querySelector("#videoPlayer"), url, true);
        })();
	</script>
</div>