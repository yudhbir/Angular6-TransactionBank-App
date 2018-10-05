import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		if (args) {
            args = args.toLowerCase();
            return value.filter(function (el: any) {
                //return el.to_account.toLowerCase().indexOf(args) > -1 ||
                 //   el.from_account.toLowerCase().indexOf(input) > -1;
				 return JSON.stringify(el).toLowerCase().includes(args);
            })
        }
        return value;
	}

}
