# dogood
A simple app to help people find ways to help their communities

## Mission
*dogood* is intended to work as an easy entry point for civic-minded people who have the time and/or resources to contribute to their local communites but lack the knowledge to get started.
The site is divided into regions, each containing a range of links for local organistions, grouped by easy to parse categories, in need of money / volunteers to help with their causes.

##Contribute
Currently a WIP, the aim is to provide authenticated accounts through which people can submit new cities, charity categories, and/or charities for approval.

###Dependencies
- npm
- Sails.js cli
- mongodb

##Run / Build
If you want to fork this repo and play around, simply download the code and run npm install from the vue directory.

Run Sails from the root directory with `sails lift`. Run the VueJS dev server with `npm run dev` from within the vue directory. You can use `npm run build` to build a production version but a route has not yet been set up to serve this.

Be sure to have mongo configured with the appropriate database name and security settings.

Please be aware that *dogood* is currently very much a work in progress and is prone to major changes in the forseeable future.
