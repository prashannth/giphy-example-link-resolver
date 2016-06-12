var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  // Souncloud file urls are in the format:
  // https://soundcloud.com/<user>/<file>
  var matches = url.match(/soundcloud\.com\/([a-zA-Z0-9]+)/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  var id = matches[1];

  var response;
  try {
    response = sync.await(request({
      url: 'https://api-v2.soundcloud.com/resolve?url=' + url,
      qs: {
        client_id: key.client_id,
        app_version: key.app_version
      },
      gzip: true,
      json: true,
      timeout: 15 * 1000
    }, sync.defer()));
  } catch (e) {
    res.status(500).send('Error');
    return;
  }

  if (response.statusCode === 200) {
    var html = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=' + url + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
    res.json({
      body: html
      // Add raw:true if you're returning content that you want the user to be able to edit
    });

  } else if (response.statusCode === 404) {
    res.status(404).send('No file found');
  } else {
    res.status(500).send('Error');
  }

};
