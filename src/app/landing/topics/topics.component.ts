import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonManagerService } from '../../global_services/json-manager.service';

interface Topic {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[] = [];

  constructor(
    private router: Router,
    private jsonManagerService: JsonManagerService
  ) { }

  ngOnInit(): void {
    this.jsonManagerService.getJSON("assets/json/topics.json").subscribe(data => {
      this.topics = data;
    });
  }

  viewTopic(topicId: string): void {
    this.router.navigate(['/topic', topicId]);
  }
}
