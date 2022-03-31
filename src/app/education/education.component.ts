import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  // Properties
  education = [
    {
      school: "MAX Technical Training",
      degree: "MAXimum Coding Bootcamp",
      gradYear: "2022"
    },
    {
      school: "Columbus State Community College",
      degree: "IT Workforce Certificate | Cybersecurity Certificate",
      gradYear: "2020"
    },
    {
      school: "University of Cincinnati",
      degree: "Bachelor of Science | Industrial Management with a Business Analytics Minor",
      gradYear: "2019"
    },
    {
      school: "Dublin Coffman High School",
      degree: "High School",
      gradYear: "2015"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
