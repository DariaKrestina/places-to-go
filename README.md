# Project Overview

## Project Name

### Places to go

## Project Description

Places to go is an Airtable and React build app where user is able to view , add and edit information about tourist attractions. 


## Wireframes

[Index(home) page wireframe](https://whimsical.com/places-to-go-wireframes-index-page-Nyq2t9Um9q34gkGe7a1UFB)

[Show page wireframe](https://whimsical.com/places-to-go-wireframes-show-page-6UdyDQj11g4XbEhb6hZpQZ)

[Add page wireframe](https://whimsical.com/places-to-go-wireframes-add-page-CqGKDv2cZtXY8WbsPPaNDB)

[Edit page wireframe](https://whimsical.com/places-to-go-wireframes-edit-page-SAbjG6sWs9YSkB7R6wSBvU)


## Component Hierarchy

[Component Hierarchy](https://whimsical.com/places-to-go-component-hierarchy-6Z22ibMtruURssGpLEqWZd)


## API and Data Sample

Below is data sample from Airtable Places API.

```json
{
    "records": [
        {
            "id": "receMTY6DLQ6qYs2c",
            "fields": {
                "name": "Antelope Canyon",
                "country": "USA",
                "currency": "USD",
                "languages": "English(US)",
                "description": "Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Page, Arizona. It includes two separate, scenic slot canyon section...",
                "thingsToDo": "1. Horseshoe Bend\n2. Navajo Village Heritage Center\n3. Glen Canyon Dam Overlook\n4. Waterholes Canyon\n5. Lower Antelope Canyon\n6. Glen Canyon National ...",
                "image": "https://i.imgur.com/Ym34zXM.jpg"
            },
            "createdTime": "2021-08-19T17:35:44.000Z"
        },
        {
            "id": "recEDXQO8RevN5fA8",
            "fields": {},
            "createdTime": "2021-08-19T17:35:44.000Z"
        },
        {
            "id": "reccCzkvlzfUsqr3D",
            "fields": {},
            "createdTime": "2021-08-19T17:35:44.000Z"
        }
    ],
    "offset": "reccCzkvlzfUsqr3D"
}
```


### MVP/PostMVP 

#### MVP 

- Style the webpage using Grid and/or Bootstrap for React
- Use a media query for desktop(mobile-first)
- GET, POST and PUT data using Airtable api
- Link to separate components creating illusion of a multi page app utilizing React Router
- Render tourist attractions data on the page 

#### PostMVP  

- Use local storage to save user favorites
- DELETE data from Airtable api
- Implement search bar for a specific tourist attraction
- Use an additional media query for tablet


## Project Schedule

| Day          | Deliverable                                                               | Status       |
| ------------ | ------------------------------------------------------------------------- | ------------ |
| August 19-20 | Wireframes / Component Hierarchy / Timeframes / Project Approval          |  Incomplete  |
| August 23    | Pseudocode / Application Structure / Actual Code / MVP                    |  Incomplete  |
| August 24    | Code / CSS Styling / MVP                                                  |  Incomplete  |
| August 25    | Initial Clickable Model / PostMVP                                         |  Incomplete  |
| August 26    | CSS Styling / PostMVP                                                     |  Incomplete  |
| August 27    | Presentations                                                             |  Incomplete  |


## Timeframes

| Component                                                | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframes / Component Hierarchy / Timeframes            |    H     |      4hrs      |               |             |
| Create Airtable Places API with tourist attractions data |    H     |      4hrs      |               |             |
| Pseudocode                                               |    H     |    0.5hrs      |               |             |
| Create React App / Create separate components            |    H     |    3.5hrs      |               |             |
| Working with API                                         |    H     |      2hrs      |               |             |
| Clickable Edit / Add buttons                             |    H     |      2hrs      |               |             |
| POST request to add new tourist attraction               |    H     |      1hrs      |               |             |
| PUT request to update existing tourist attraction        |    H     |      1hrs      |               |             |
| Airtable API fetchData function                          |    H     |      2hrs      |               |             |
| CSS styling mobile-first                                 |    H     |      4hrs      |               |             |
| CSS Grid / Bootstrap styling                             |    H     |      3hrs      |               |             |
| Media Query for Desktop                                  |    H     |      4hrs      |               |             |
| Media Query for Tablet                                   |    L     |      3hrs      |               |             |
| MVP check/fixes/tweaks                                   |    H     |      3hrs      |               |             |
| PostMVP checks/fixes/tweaks                              |    H     |      2hrs      |               |             |
| Total                                                    |    H     |     39hrs      |               |             |


## SWOT Analysis

### Strengths:
The app puts user in cotrol of data on the web page by being able to add and edit tourist attractions.
Responsive and clean design makes the app accessible and easy to navigate using a wide range of devices.


### Weaknesses:


### Opportunities:
There are exciting opportunities to implement search bar for a specific tourist attraction, delete button to delete any tourist place(data) from Airtable api, use local storage to save user favorites.

### Threats:
If user created a new place by mistake and does not want to keep it there is no way to delete it at this point only edit.
I'm planning to implement a DELETE request(as postMVP) to delete data from the places API by clicking on delete button.
 
