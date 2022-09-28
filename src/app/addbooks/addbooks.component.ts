import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  books={
         title:"",
         author:"",
         status:"",
        duedate:""
         
  }

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
  }
  addbooks_f(){
    console.log(this.books);
    this.bookservice.addbooks(this.books)
    .subscribe((res)=>{
      alert('Course successfully added')
    })
  }
  }