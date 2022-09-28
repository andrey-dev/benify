import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UUIDService {
  public generateUUID(): string {
    return Math.floor(Math.random() * Date.now()).toString();
  }
}
