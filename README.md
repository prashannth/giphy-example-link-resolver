# SoundCloud Link Preview for Mixmax

[![BuildStatus](https://travis-ci.org/prashannth/soundcloud-mixmax-link-resolver.svg?branch=master)](https://travis-ci.org/prashannth/soundcloud-mixmax-link-resolver)

This renders two views - One for a single sound/song & Other for a playlist/album

This is an open source Mixmax Link Resolver. See <http://sdk.mixmax.com/docs/tutorial-giphy-link-preview> for more information about how to use this example code in Mixmax.

# Adding it to MixMax

To install the link resolver for your MixMax account, follow these instructions:

 1. Open up [MixMax Integrations](https://app.mixmax.com/dashboard/integrations).
    * You can also get to this page by first clicking on 'Mixmax' in your Gmail sidebar, and then choosing "Integrations" in the left navigation.
 2. Once you are on the integrations page, scroll all the way down to the bottom.
 3. Click on the button that says __Add Link Resolver__.
 4. Fill out the form as follows:
    * Description: `SoundCloud`
    * Regular Expression: `soundcloud.com/[a-zA-Z0-9]+`
    * Resolver API URL: `https://mixmax-link-resolver.herokuapp.com/resolver`
 5. Click the __Add link resolver__ button.

You should now be able to compose a new email, and paste any SoundCloud file URL, and see a sweet SoundCloud widget instead of the URL. ~ Courtesy of MixMax

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

For a single song on SoundCloud:

```
curl http://localhost:9146/resolver?url=https://soundcloud.com/revealed-recordings/dubvision-magnum-preview
```

For a playlist/album on SoundCloud:

```
curl http://localhost:9146/resolver?url=https://soundcloud.com/revealed-recordings
```

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/prashannth/soundcloud-mixmax-link-resolver/issues](https://github.com/prashannth/soundcloud-mixmax-link-resolver/issues).

## Author

Forked originally from the MixMax tutorial provided by

<p>&copy; 2015 MixMax, Inc. </p>

## Inspiration

[Wanelo Link Preview for Mixmax](https://github.com/kigster/wanelo-mixmax-link-resolver)

<p>&copy; Konstantin Gredeskoul</p>
