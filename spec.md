# Query Builder Spec

## Goal

Make building complex queries significantly easier for users, and also help educate them about what's possible with the query syntax.

## Designs

- Sketch: https://cl.ly/1O2b2v0v0c2t
- PDF: https://cl.ly/3o003G0b231I
- Inspiration: https://cl.ly/0H0m0q2Y1w3l

## API

Props:
  - `schema` a collection of fields that can be queried (e.g. `user`, `system`, `http`, `release`)
  - `onChange` callback that gets fired when the search query changes
  - `mode` specifies the query syntax, defaults to `lucene` but also accepts `regex` and `literal`

## Functionality

- The query builder should only show when clicked https://cl.ly/1Y1J3u393I0v
- Updating a query via fields should update the text in the input
- Focusing on the input should open the relevant query tab
- Standard keyboard interactions should work (up, down, esc, enter, etc)
- Shows proper errors states for invalid queries

## Requirements

- Uses emotion and @timberio/ui for styling components
- Uses namespaced theme attributes for styles via context
- Published as a standalone package
- Uses timber-eslint for linting
- Basic tests for functionality


## Edge Cases

1. A user forgets to quote values. For example, `user.name:Ben Johnson` is treated as 2 separate searches: `user.name:Ben` and then a text search on `Johnson`. The correct query is `user.name:”Ben Johnson”`. The same happens with negation searches: `-Ben Johnson` should be `-”Ben Johnson”`.
2. A user is not aware that attribute searches are exact matches. Ex: `user.name:Ben` will not return any results because the name is actually “Ben Johnson`. A correct query would be `user.name:Ben*`.
3. A user is not aware they must include “:” when doing comparison searches. Ex: `http_response.time_ms>1000` is incorrect. `http_response.time_ms:>1000` is the correct form.
4. A user wants to correct a misspelling. A user typed `user.email:zack@timber.io` and wants to change it to `user.email:zach@timber.io`. He/she should not have to remove the entire token and start over. He/she should be able to correct the typo directly.
