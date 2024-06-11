export interface AuthResponse{
    accessToken: string;
}

export interface RespourceResponse{
    response: string;
}

export interface RegisterData{
    firstname: string;
    lastname: string;
    email: string;
    department: string;
}

export interface EditData {
    firstname: string;
    lastname: string;
    email: string;
    department: string;
}

export interface LoginData{
    email: string;
    password: string;
}

export interface AddBetData{
    matchId: Number;
    firstTeamScore: number;
    secondTeamScore: number;
}

export interface AddPayment{
    userId: number;
    amount: number;
}

