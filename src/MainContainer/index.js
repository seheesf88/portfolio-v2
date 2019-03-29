import React, { Component } from 'react';

import Nav from '../Nav'


class MainContainer extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <Nav />
        <p>
        project3-flight-react
This is project3 for Cesar and SeHee

*** Summary ***

This app is for tracking where exactly your flight is. We sometimes see on airport table that flight is arrived but your friends never come out from the gate! why? because they post flight is arrived when it lands to ground but it doesn’t mean passengers can get out of the flight right away. Sometimes flight needs to wait for gate to park or sometimes there is some accidents. This app is for tracking where flight is, and once there are some special issues, user can share that issue with all people.

*** User story for flight tracker! ***

Homepage (1)

User will see search engine.
User can search flight by entering [flight number] in search engine
in nav bar, there are home, report list, and create report. Once user click to create report, it will move to crate report page. They can submit report and it will be shared with other users and it will show in flight detail page.
FLIGHT detail page (2)

Once user clicked the search button, it will move to flight information page that matches to searching keyword.
This page will contain flight information that was made in third party API(official aviation API)
User’s report will be added at the bottom if there is any.
In report section, there is button to move report show page.
create REPORT page(2)

User can make report.
Once it is submitted and move to report list page.
REPORT list page/(delete)(3)

This page will list all reports that was made by users.
Each report is clickable and move to report show page.
Each report have two buttons, one for edit, so that user can move to report edit page, and delete button so that user can remove report from the list.
REPORT show page(4)

It will show detail of report
REPORT edit page(4)

It will collect same information as create report page.
Once it is submitted, it will move to REPORT list page.
*** Wireframes ***</p>
<p>project3-flight-react
This is project3 for Cesar and SeHee

*** Summary ***

This app is for tracking where exactly your flight is. We sometimes see on airport table that flight is arrived but your friends never come out from the gate! why? because they post flight is arrived when it lands to ground but it doesn’t mean passengers can get out of the flight right away. Sometimes flight needs to wait for gate to park or sometimes there is some accidents. This app is for tracking where flight is, and once there are some special issues, user can share that issue with all people.

*** User story for flight tracker! ***

Homepage (1)

User will see search engine.
User can search flight by entering [flight number] in search engine
in nav bar, there are home, report list, and create report. Once user click to create report, it will move to crate report page. They can submit report and it will be shared with other users and it will show in flight detail page.
FLIGHT detail page (2)

Once user clicked the search button, it will move to flight information page that matches to searching keyword.
This page will contain flight information that was made in third party API(official aviation API)
User’s report will be added at the bottom if there is any.
In report section, there is button to move report show page.
create REPORT page(2)

User can make report.
Once it is submitted and move to report list page.
REPORT list page/(delete)(3)

This page will list all reports that was made by users.
Each report is clickable and move to report show page.
Each report have two buttons, one for edit, so that user can move to report edit page, and delete button so that user can remove report from the list.
REPORT show page(4)

It will show detail of report
REPORT edit page(4)

It will collect same information as create report page.
Once it is submitted, it will move to REPORT list page.
*** Wireframes ***</p>
<p>project3-flight-react
This is project3 for Cesar and SeHee

*** Summary ***

This app is for tracking where exactly your flight is. We sometimes see on airport table that flight is arrived but your friends never come out from the gate! why? because they post flight is arrived when it lands to ground but it doesn’t mean passengers can get out of the flight right away. Sometimes flight needs to wait for gate to park or sometimes there is some accidents. This app is for tracking where flight is, and once there are some special issues, user can share that issue with all people.

*** User story for flight tracker! ***

Homepage (1)

User will see search engine.
User can search flight by entering [flight number] in search engine
in nav bar, there are home, report list, and create report. Once user click to create report, it will move to crate report page. They can submit report and it will be shared with other users and it will show in flight detail page.
FLIGHT detail page (2)

Once user clicked the search button, it will move to flight information page that matches to searching keyword.
This page will contain flight information that was made in third party API(official aviation API)
User’s report will be added at the bottom if there is any.
In report section, there is button to move report show page.
create REPORT page(2)

User can make report.
Once it is submitted and move to report list page.
REPORT list page/(delete)(3)

This page will list all reports that was made by users.
Each report is clickable and move to report show page.
Each report have two buttons, one for edit, so that user can move to report edit page, and delete button so that user can remove report from the list.
REPORT show page(4)

It will show detail of report
REPORT edit page(4)

It will collect same information as create report page.
Once it is submitted, it will move to REPORT list page.
*** Wireframes ***</p>
      </div>
    )
  }
}

export default MainContainer
