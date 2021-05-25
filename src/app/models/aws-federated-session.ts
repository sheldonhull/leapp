import {SessionType} from './session-type';
import {Session} from './session';

export class AwsFederatedSession extends Session {
  accountName: string;
  roleArn: string ;
  idpArn: string;
  idpUrlId: string;
  type: SessionType;
  region: string;
  profileId: string;

  constructor(accountName: string, region: string, idpUrlId: string, idpArn: string, roleArn: string, profileId: string) {
    super(accountName, region);
    this.type = SessionType.awsFederated;

    this.accountName = accountName;
    this.region = region;
    this.idpUrlId = idpUrlId;
    this.idpArn = idpArn;
    this.roleArn = roleArn;
    this.profileId = profileId;
  }
}