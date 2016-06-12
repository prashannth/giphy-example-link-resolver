var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  // Souncloud file urls are in the format:
  // https://soundcloud.com/<user>/<file>

  // Invision app urls are in the format:
  // https://projects.invisionapp.com/share/<unique-share-id> or https://invis.io/<unique-share-id>

  var matches = url.match(/soundcloud\.com\/([a-zA-Z0-9]+)|invis\.io\/([a-zA-Z0-9]+)|projects\.invisionapp\.com\/share\/([a-zA-Z0-9]+)/);
  var ping_url = 'https://api-v2.soundcloud.com/resolve?url=' + url;
  var html = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=' + url + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';

  if (matches) {
    if (matches[2]) {
      ping_url = 'https://projects.invisionapp.com/share/' + matches[2];
      html = '<iframe width="396" height="858" src="' + ping_url + '" frameborder="0" allowfullscreen></iframe>';
    } else if (matches[3]) {
      ping_url = 'https://projects.invisionapp.com/share/' + matches[3];
      html = '<iframe width="396" height="858" src="' + ping_url + '" frameborder="0" allowfullscreen></iframe>';
    }
  } else {
    res.status(400).send('Invalid URL format');
    return;
  }

  var response;
  try {

    response = sync.await(request({
      url: ping_url,
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
