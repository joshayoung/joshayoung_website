# Website for joshayoung.com

### Installation Instruction

- Install node with a node version manager such as `nvm` or `asdf`.
  - My latest build of this site used: `node 18.0.0`
- Install Gatsby (not sure if this is necessary)
  - `brew install gatsby-cli`
- Run Install
  - `npm install --global yarn`
  - `yarn install`

### Update Packages

- `yarn update`

### Start Site:

- npm run develop
- Website Runs At: http://localhost:8000

### Deploy Updates

- `npm run deploy`
  - If you run into errors with this command, try running `npm run develop` first to see if that works locally.
  - Sometimes if you run it in development mode first, the deploy will work correctly for some reason.

### Resources:

- https://www.gatsbyjs.org/tutorial/part-five/
- https://www.gatsbyjs.org/tutorial/

### Adding Secret Tokens:

https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
