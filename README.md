# BingoTeacher

BingoTeacher is a tool used by the Ocarina of Time speedrunning community to help learn the Bingo game variant. Bingo requires a ton of tricks that many players don't know, and therefore has a large barrier to entry. This tool attempts to make Bingo more approachable, allowing users to enter goals from their bingo cards and instantly have video tutorials for all the tricks they may not know which are required to complete the goals.

## Publicly Deployed Version

Bingo Teacher is deployed on GitHub pages at https://qwoodmansee.github.io/bingo-teacher/ - if you'd like to see the tool work, manually search for a goal and select it. Due to the volume of videos per goal, this tool is most easily used on a desktop browser.

## Running Locally

BingoTeacher was built using react, and should only need a small amount of setup to get running locally:

```bash
git clone git@github.com:qwoodmansee/bingo-teacher.git
cd bingo-teacher
npm install ## you could use yarn
npm run start ## you could use yarn
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. All code is required to be tested in a dedicated file, and all lint rules are strongly enforced for code style consistency. Standalone commits with details messages are always appreciated.

## Development Tools

There are very few tools required to contribute to this project. Due to the low scope of this project, it was built using minimal third party dependencies. Notably, `master` uses an API data source which is locked down, so I recommend using a fork of the application which uses a hardcoded data set (see #ed9ee9).

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Deployed Application Privacy Policy

[Privacy Policy](https://github.com/qwoodmansee/rehearse/blob/master/privacy-policy.md)
