import { Application } from '../declarations';
import v1User from './v1/user/user.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(v1User);
}