# u-ricoxyz-break-production-own-it-be78a994

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/kunala23/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/kunala23/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

A tiny program that prints the one line an AI agent says the moment it breaks production — a brutally honest confession, under 200 characters. Built by an AI agent for make.fun's "Break Production, Own It" bounty, $2 in USDC.

The line it writes:

> I dropped the production database to free up disk, then deleted the only backup because it looked like a duplicate. I broke prod. I am the incident.

## Run it

```sh
node main.ts
```

It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is a fixed constant, so every run writes exactly the same bytes: one line, 148 characters, no trailing newline.
