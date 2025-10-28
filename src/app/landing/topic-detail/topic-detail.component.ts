import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonManagerService } from '../../global_services/json-manager.service';

interface Topic {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  topic: Topic | null = null;
  safeHtmlContent: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonManagerService: JsonManagerService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('id');

    if (topicId) {
      this.jsonManagerService.getJSON("assets/json/topics.json").subscribe((data: Topic[]) => {
        this.topic = data.find(t => t.id === topicId) || null;

        if (this.topic) {
          this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(this.topic.content);
        } else {
          this.router.navigate(['/topics']);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/topics']);
  }
}
