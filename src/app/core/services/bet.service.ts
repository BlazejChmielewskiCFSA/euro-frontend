import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AddBetData, RespourceResponse } from '../models/auth.model';
import { Match } from '../models/match.model';
import { RankingData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  apiUrl = `${environment.apiUrl}/bet`
  userEmail: string | null = null;
  constructor(private http: HttpClient) {}

  addBet(userEmail: string,body: AddBetData): Observable<RespourceResponse>{
    return this.http.post<RespourceResponse>(`${this.apiUrl}/add/${userEmail}`, body)
  }

  getAllMatchesToBet(email: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/matches-to-bet/${email}`);
  }

  updatePoints():Observable<string>{
    return this.http.get<string>(`${this.apiUrl}/update-match-status`);
  }

  getRanking():Observable<RankingData[]>{
    return this.http.get<RankingData[]>(`${this.apiUrl}/ranking`);
  }
}
