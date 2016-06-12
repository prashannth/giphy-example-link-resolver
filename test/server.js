var expect  = require("chai").expect;
var request = require("request");

describe("SoundCloud MixMax Link Resolver", function() {

   var url = "https://api-v2.soundcloud.com/resolve?url=https://soundcloud.com/revealed-recordings&client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea&app_version=1465495127";

   it("SoundCloud API V2 is live", function(done) {
     request(url, function(error, response, body) {
       expect(response.statusCode).to.equal(200);
       done();
     });
   });

});
