# Time Tracking Dashboard Solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this dashboard and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

If you would like to practice working with JSON data, we provide a local `data.json` file for the activities. This means you'll be able to pull the data from there instead of using the content in the `.html` file.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats
- The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs". For monthly, it should read "Last Month" e.g. "Last Month - 19hrs".

### Screenshot

![](./screenshot.jpg)

### Links

- Github Repo URL: [Time Tracking Dashboard Repo](https://github.com/amyspencerproject/time-tracking-dashboard-vite)
- Live Site URL: [ X Page]()

## My process

### Built with

- Mobile-first workflow
- CSS
- Vite
- React JS

### What I learned

- When you import a `.json` file into React it will automatically be parsed 🥳

- Used an unordered list with roles and aria-labels for accessibility on the time frame options in the ProfileCard component. The user needs to be able to switch between daily, weekly, and monthly states. For accesibiltiy they should be able to do this with a mouse and a keyboard. Additionally, it should be clear to a screen reader that these are choices grouped together. Using a list leaves no doubt that the choices are grouped.

- Not sure the best approach for handling the larger data set that is `data`. Would it be alright to pull each object out into a variable named for it's category and then just handle data separatly? Or should you always keep the data source as the primary place to get data from?

### Continued development

### Useful resources

- [Tabs for Accessibility](https://inclusive-components.design/tabbed-interfaces/) - In depth look at using tabbed interfaces ie lists with role/aria labeling for better accessibility

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
