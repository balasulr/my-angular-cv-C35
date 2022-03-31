import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
// Properties
name: string = "Lakshmi Balasubramaniam";
contact: string = "Mason, OH 45040 | lrb697@gmail.com"
technologies = [
  {a: "Git", b: "GitHub", c:"SQL", d:"SQL Server Management Studio"},
  {a: "C#", b: ".Net", c:"ASP.Net", d:"NET Core"},
  {a: "Entity Framework Core", b: "MVC", c:"WebApi", d:"Spring"},
  {a: "Java", b: "HTML", c:"CSS", d:"Angular"},
  {a: "Typescript", b: "Visual Studio 2019", c:"Visual Studio Code", d:"MySQL Workbench"},
  {a: "Postman", b: "Eclipse", c:"Bootstrap", d:"JavaScript"},
  {a: "jQuery", b: "Agile/Scrum", c:"Hibernate", d:"Strengths"},
  {a: "JSON", b: "REST", c:"Maven", d:""}
];

}
