import { Claim } from './claim.model';
import jwt_decode from 'jwt-decode';

export class LoginUser {
  private isNeedToChangePassword: boolean;
  private userName: string;
  private id: number;
  private roles: string[] = [];
  private claims: Claim[] = [];

  constructor(token: string) {
    const tokenPayload = jwt_decode(token);
    this.roles = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

  public get _isNeedToChangePassword(): boolean { return this.isNeedToChangePassword; }
  public get _userName(): string { return this.userName; }
  public get _id(): number { return this.id; }
  public get _roles(): string[] { return this.roles; }
  public get _claims(): Claim[] { return this.claims; }
}
