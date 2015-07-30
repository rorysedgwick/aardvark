# aardvark

![aardvark text](https://github.com/rorysedgwick/aardvark/public/assets/img/aardvark.png "aardvark")

#### learning doesn't always have to feel like such aardvark

### Why?
For various mysterious reasons, learning the [2 digit abbreviations](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for lots of countries off by heart is going to make me more efficient at my job. Therefore I decided to build a mini quiz game that can help me memorise them, and practice Javascript at the same time.

*I don't want to know if this game already exists on sporcle.com or in a thousand other places so if you know of one keep it to yourself*

### What?
The aim is to have a simple text input field that checks user input against the currently displayed ISO country abbreviation. If a correct answer is entered, the user is awarded a point and a new code is randomly selected from the list and displayed. The user will have the option to select either codes from the whole world, or a randomly chosen subset.

Basic functionality:
- [ ] The user is displayed an ISO 3166 2 digit country code
- [ ] The user is started with a point score of 0
- [ ] The user can enter a country name into a text input field
- [ ] The inputted text is checked against the country name
- [ ] If the text matches the country, the user's score is increased by 1 and a new, random country code is displayed for the user

Stretch goals:
- [ ] The user can choose to go through all the countries once and see what score they get, or
- [ ] The user can keep going indefinitely and their score is recorded as a 'streak'
- [ ] The flag for each country is shown *before/after* the country has been guessed correctly
- [ ] Users are given a profile when they visit the site which is retained in persistent storage, along with personal high scores
- [ ] The high scores of all players are displayed to other users

### How?
The back-end will be built using Node.js and Hapi. Testing will be done using Tape on the back-end and Qunit on the front to practice using different test suites.
