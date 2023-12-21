
The following factors were considered when building out this combo box component:

- Conditional styling based on user interaction.
- Minimal state change
- Match provided example

<!-- https://ileriayo.github.io/markdown-badges/#markdown-badges -->

## General Approach

When deciding on how to build out my own combo box component from scratch, I broke down the component into two basic parts contained within a div element. The first is an input (input) element and the second being an unordered HTML list (ul).

The combo box container would have a max height and the hidden attribute of the ul would be toggled on and off based on input focus and an event listener attached to the svg icon container to display the dropdown options.

Each li, when clicked, would then change the state of the drop down to collapse the combo box and display the users selection. It also logs to the console the users selection.

From there I planned conditional styling to get as close to the combobox as possible. 

## How To Run

- npm install
- npm run dev


<div align='center'>

## Made Using

</div>
<!-- https://ileriayo.github.io/markdown-badges/#markdown-badges -->
<div align='center'>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)


</div>

</br>
With a bit more time, I would do a couple things:

- Implement e2e testing using Cypress.
- Change the entire background of the page to the selected fruit and and have it repeat across the page.
- Add accessibility using event listeners for the tab, arrow, and space keys for navigation, component navigation, and selection respectively.
- Add media queries for mobile browsing


Connect with me on LinkedIn
</br>
[![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/j-easton-miller/) 
