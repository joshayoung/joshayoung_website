# Website

## To Do

- Add not about ~/.ssh/config being needed anytime you have a non-standard ssh-key file name to your snippets.

## Initial Setup

- Install node with a node version manager such as `nvm` or `asdf`.
  - My latest build of this site used: `node 18.0.0`.
- Install yarn globally: `npm install --global yarn`.
- Change to this site's folder and run: `yarn install`.

## Update Packages

- `yarn update`

## Start Site

- `npm run develop`
- Website Runs At: [Localhost](http://localhost:8000)

## Deploy Updates

- `npm run deploy`
  - If you run into errors with this command, try running `npm run develop` first to see if that works locally.
  - Sometimes if you run it in development mode first, the deploy will work correctly for some reason.

### Resources

- [Gatsby Part Five](https://www.gatsbyjs.org/tutorial/part-five)
- [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial)

### Adding Secret Tokens

- [Gatsby Environmental Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables)
