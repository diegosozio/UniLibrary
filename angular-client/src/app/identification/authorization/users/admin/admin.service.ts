import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { User } from '../../../model/user';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/identification/authentication/authentication.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(
        private http: HttpClient,
        private authService: AuthenticationService

        ) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }


    getByUsername(username: string) {      
        return this.http.get<User>(`${environment.apiUrl}/users/${username}`);
    }

    register(user: User) {   
        return this.http.post(`${environment.apiUrl}/register`, user);
    }

    update(username, params) {
        return this.http.put<User>(`${environment.apiUrl}/users/${username}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (username == this.authService.userValue.username) {
                    // update local storage
                    const user = { ...this.authService.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.authService.setUserSubject(user);
                }
                return x;
            })); 
    }
    
    
    delete(username: string) {
        return this.http.delete(`${environment.apiUrl}/users/${username}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (username == this.authService.userValue.username) {
                    this.authService.logout();
                }
                return x;
            }));
    }

    
} 