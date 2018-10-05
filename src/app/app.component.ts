import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Quiz Application';
	listing={};
	pay_item={};
	orderby='asc';
	constructor(public http:HttpClient){}
	ngOnInit() {this.get_listing();}  
	get_listing(){
		this.http.get('./assets/listing.json').subscribe(data=>{
			this.listing=data;	
			// console.log(this.listing);
		});
	}
	get_records(item:Object){
		this.pay_item=item;		
	}
	sortBy(field){
		var order =this.orderby;
		this.orderby=(order=="asc")?'desc':'asc';
		if(this.listing){
			this.listing['cars'].sort( function(a, b) {				
				if (typeof a[field] == "number") {
					return (order=="asc")?(a[field] - b[field]):(b[field] - a[field]);
				} else {
					if(order=='asc'){
						return ((a[field] < b[field]) ? -1 : ((a[field] > b[field]) ? 1 : 0));
					}
					if(order=='desc'){
						return ((a[field] > b[field]) ? -1 : ((a[field] < b[field]) ? 1 : 0));
					}
				}
			});			
		}
     }
	
}
