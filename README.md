# SoundCloud Link Preview for Mixmax

This renders two views - One for a single sound/song & Other for a playlist/album

This is an open source Mixmax Link Resolver. See <http://sdk.mixmax.com/docs/tutorial-giphy-link-preview> for more information about how to use this example code in Mixmax.

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
