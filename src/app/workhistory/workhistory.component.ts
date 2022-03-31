import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workhistory',
  templateUrl: './workhistory.component.html',
  styleUrls: ['./workhistory.component.css']
})

export class WorkhistoryComponent implements OnInit {
  // Properties
  workHistories = [
    {
      name: "TEKsystems / Fourci Consulting",
      role: "Deloitte Help desk/call consultant",
      location: "Remote",
      duration: "March 2021 – December 2021",
      accomplishments: [
        "Assisted with pandemic related unemployment benefits queries",
        "Queries came through the Ohio Department of Job and Family Services (ODJFS) Covid unemployment project",
        "Rated among the top four for call metrics and with an average of 15 calls per shift",
        "Excel in answer rate and average customer hold time and enhanced communication and troubleshooting skills"
      ]
    },
    {
      name: "Kunduru Foundation",
      role: "Internship",
      location: "Remote",
      duration: "January 2021 – November 2021",
      accomplishments: [
        "Chakra is an event and membership management platform for a non-profit organization",
        "Created data models for the Chakra application using PostgreSQL 13",
        "Write requirements for various use cases for the Chakra application such as payment methods"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
