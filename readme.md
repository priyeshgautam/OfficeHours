# Thought Process while creating this Chrome Extension

This is just for fun. Nothing to hurt anyone.

Tells the employee mood based upon the Office Time Hours Left

## Tutorials and Resources

FreeCodeCamp Blogpost [link](https://www.freecodecamp.org/news/building-chrome-extension/)

Chrome API reference [link](https://developer.chrome.com/docs/extensions/reference/)

Read more about Manifest.json [link](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

## About

1. Show Digital Clock with seconds [ DOMContentLoaded set to at an interval of 1sec ]
2. Show Time Left in Office for Current day
3. Shows Mood state and Mood expresion acc to current time

10 AM to 01 PM - 'awake'
01 PM to 02 PM - 'food'
02 PM to 04 PM - 'lazy'
04 PM to 06 PM - 'drowsy'
06 PM to 10 PM - 'dead'
10 PM to 10 AM - sleep

## Learnings

```python
1. Read and implementation of  chrome extension [manifest_version v3]
2. Implementation html and css properties
3. Javascript for DOM manipulation and calculation
4. Read about chrome functions to read files , local storage etc

```

## TODO

1. Fetch and show joke or motivation quotes from external API.
2. Trigger Alarm on Log In/Log Out timings.

## Time spent

1 hour on tutorial
2 hour on building what i wanted

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Installing

1. Goto chrome://extensions/
2. Enable developer option
3. Click on load unpacked and select the project folder

## Screenshots

screenshot 1
![Drowsy](https://github.com/priyeshgautam/OfficeHours/blob/main/screenshots/main.png?raw=true)

screenshot 2
![Drowsy](https://github.com/priyeshgautam/OfficeHours/blob/main/screenshots/drowsy.png?raw=true)
