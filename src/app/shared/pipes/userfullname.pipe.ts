import { Pipe, PipeTransform } from '@angular/core';
import { Usuarios } from '../../features/dashboard/usuarios/models';


@Pipe({
  name: 'userfullname'
})
export class UserfullnamePipe implements PipeTransform {
  transform(value: Usuarios, transform?: 'uppercase'): string {
    const result = value.firstname + ' ' + value.lastname;


    if (transform === 'uppercase') {
      return `${result}`.toUpperCase();
    }

    return result;
  }
}
