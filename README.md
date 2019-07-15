# Homeflow Front-end Technical test

At Homeflow, we need our front-end developers to be skilled with client-side technologies, but also able to work with server-side code. Our challenge is designed to test your skill with HTML, CSS and JavaScript; as well as your problem-solving ability.

## The Brief

Your challenge is to take this bare-bones starter app (that currently doesn't do very much) and turn it into a property-searching site using our API. Everything else (even the interpretation of "property-searching site") is up to you. We like Ruby, so we've created this app using Ruby and [Sinatra](http://sinatrarb.com/), a lightweight web framework. Don't worry if you've never used these technologies before, they're fairly easy to pick up, and both have good documentation online.

We'd like you to build a [single-page application](https://en.wikipedia.org/wiki/Single-page_application), so JavaScript is key. We've included jQuery, but you're welcome to use any libraries or frameworks you're comfortable with.

We'll leave design and layout entirely up to you. Try to be creative!

Don't spend any more than 3 hours on the test. When you're ready to submit the project, create a pull request on bitbucket and we'll take a look. We may leave some comments for you to act on, as we're also interested in your ability to listen to feedback and make changes accordingly.

## Prerequisites

You'll need to have Ruby and the bundler gem installed.

## Running the app

1. Clone this repository
2. From inside this folder, run `bundle install` to install the dependencies.
3. From the same place, run the command `ruby app.rb`. You should see something like this:

```
== Sinatra (v1.4.8) has taken the stage on 4567 for development with backup from Thin
Thin web server (v1.7.2 codename Bachmanity)
Maximum connections set to 1024
Listening on localhost:4567, CTRL+C to stop
```

4. In your browser, navigate to http://localhost:4567
5. You should see the heading "Homeflow" on the page.

**NOTE: You'll need to restart the server any time you make changes to the server-side code.**

## Tips

Anything you put in the `public` folder will be directly accessible in the browser. This includes JavaScripts, Stylesheets, images etc

_Some_ of our API's endpoints are documented [here](http://developer.homeflow.co.uk/appendix)

We also have a [gem](http://developer.homeflow.co.uk/homeflow-api-gem/) that may be useful.

If you need inspiration, take a look at some of our clients' websites:

https://www.leaders.co.uk

https://www.winkworth.co.uk

## Troubleshooting

We've been deliberately vague with this brief and instructions, because we want to see if you can solve problems on your own. However, if you run into an issue you can't get past, don't just give up! Email us at developer-support@homeflow.co.uk and we'll do our best to point you in the right direction.

## Getting Started

Take a look at the browser's JS console. Do you see some data?

Good luck!
