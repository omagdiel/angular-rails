import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My first doc",
      description: "Stuff",
      file_url: "http://google.com",
      updated_at: '11/11/16',
      image_url: "https://careerlancer.net/wp-content/uploads/2015/12/challenges-freelancer.jpg",
    },
    {
      title: "My secod doc",
      description: "Good Stuff",
      file_url: "http://google.com",
      updated_at: '11/11/16',
      image_url: "https://careerlancer.net/wp-content/uploads/2015/12/challenges-freelancer.jpg",
    },
    {
      title: "My last doc",
      description: "Good Stuff",
      file_url: "http://google.com",
      updated_at: '11/11/16',
      image_url: "https://careerlancer.net/wp-content/uploads/2015/12/challenges-freelancer.jpg",
    }
  ]
}
