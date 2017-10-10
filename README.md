# FolWeb

## Configuration -- IMPORTANT!

To develop and deploy this web you must to have an account on https://gemfury.com/ and this account have to be added as colaborator in freaksparty group inside _gemfury_ (ask to Mou for permissions).

When you have an account, configure your _npm_ as follow:

`npm config set registry https://npm-proxy.fury.io/USERNAME/` <-- Replace USERNAME with your username on gemfury

`npm login`

Now, you can use npm as usually and you must to have access to freaksparty private packages.

## Change styles

You can find several folders inside `src/styles/semantic/themes/default`. Each folder has a group of *.variables* and *.overrides* files. Both of them are _LESS_ code.

In *.variables* files, you can modify different parameters and in *.overrides* you can add code to override final selector.

## Development

Run `npm install` first time and after each pull

Run `ng serve`

## Production

Run `npm install && npm run build-prod && npm start`
