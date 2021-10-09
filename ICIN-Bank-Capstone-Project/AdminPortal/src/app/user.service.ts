import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    let url = "http://ec2-52-201-65-143.compute-1.amazonaws.com:8085/api/user/all";
    return this.http.get(url, {withCredentials: true});
  }

  getPrimaryTransactionList(username: string){
    let url = "http://ec2-52-201-65-143.compute-1.amazonaws.com:8085/api/user/primary/transaction?username="+username;
    return this.http.get(url, {withCredentials: true});
  }

  getSavingsTransactionList(username: string){
    let url = "http://ec2-52-201-65-143.compute-1.amazonaws.com:8085/api/user/savings/transaction?username="+username;
    return this.http.get(url, {withCredentials: true});
  }

  enableUser (username: string){
    let url = "http://ec2-52-201-65-143.compute-1.amazonaws.com:8085/api/user/"+username+"/enable";
    return this.http.get(url, {withCredentials: true});
  }

  disableUser(username: string){
    let url = "http://ec2-52-201-65-143.compute-1.amazonaws.com:8085/api/user/"+username+"/disable";
    return this.http.get(url, {withCredentials: true});
  }
}
