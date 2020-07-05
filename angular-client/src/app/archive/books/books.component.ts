import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../Models/book.model';
import { BooksService } from 'src/app/books.service';
import { AccountService } from 'src/app/authentication/account/account.service';
import { User } from 'src/app/authentication/user/user';
import {NgbModal, ModalDismissReasons, NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  user: User;
  closeResult = '';
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  booksToReserve : Array<string>;
  data : any
  constructor(private modalService: NgbModal,private accountService: AccountService,private bookService: BooksService,calendar: NgbCalendar) {
      this.accountService.user.subscribe(x => this.user = x);
      //this.fromDate = calendar.getToday();
     // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  @Input() books: Array<Book>

  ngOnInit(): void {


  }
  open(content) {
    this.booksToReserve=[];
    var checkboxes = document.getElementsByName('book');
    checkboxes.forEach((checkbox) => {
      if (checkbox.getAttribute('ng-reflect-model')=='true')
      this.booksToReserve.push(checkbox.getAttribute('id'))
    });
    if(this.booksToReserve.length){
     
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log( this.booksToReserve);
        this.data = {
          'books':this.booksToReserve,
          'from':this.fromDate.year+' '+this.fromDate.month+'-'+this.fromDate.day,
          'to':this.toDate.year+' '+this.toDate.month+'-'+this.toDate.day,
          'username':this.user.username

        }
        this.bookService.reserveBooks(this.data).subscribe((data: any) => {

        });
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
   
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
     
    }
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    let error_message = "";
    this.booksToReserve.forEach((bookId) => {
      this.bookService.getReservations(bookId).subscribe((data: any) => {
        data.reservations.forEach((reservation) => {
          let  selectedBook = this.books.find(book => book._id==bookId);

         if(this.fromDate && this.toDate && selectedBook.format.toLowerCase()!='electronic'){
          let jsDateFrom = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
          let jsDateTo= new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
          let jsDateReservationTo = new Date(reservation.to);
          let jsDateReservationFrom = new Date(reservation.from);
          if((jsDateFrom <= jsDateReservationFrom && jsDateReservationFrom<=jsDateTo || jsDateFrom <= jsDateReservationTo && jsDateReservationTo <= jsDateTo) ||
          (jsDateFrom >= jsDateReservationFrom && jsDateReservationTo>=jsDateTo)
            ){
          
           console.log(selectedBook)
           alert(selectedBook['title'] + ' is reserved from '+reservation.from+ ' to '+reservation.to)
           this.fromDate = null;
           this.toDate=null;

          }
     
            
        
         }
        });
      });
    });
  
    console.log(this.toDate)
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  

}
