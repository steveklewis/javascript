# steveklewis Super-rentals

This little project is a copy of the basic Ember tutorial and acts as a base for further research into ember-redux.

Modifications:

* No use of Ember Data.
* A component for rentals-container, which will have the interesting stuff in it.
* A component for rentals-pres, which is strictly for presentation.

Things to-do:

* Figure out filtering in an abstract way, similar to list-filter which abstracts away filtering for any kind of listing.
* Figure out proper use of stateToComputed. Right now I'm adding in presentation data elements right after getting them from JSON endpoint (isWide, etc).
* It looks like the time-travelling stuff may not work correctly right now unless I have the templates inline in the component, so I may have to switch to that way of doing things for now.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

