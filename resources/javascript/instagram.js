var userFeed = new Instafeed({
	get: 'indigo',
	target: "instafeed-container",
	resolution: 'low_resolution',
	accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN_GOES_HERE'
});
userFeed.run();
