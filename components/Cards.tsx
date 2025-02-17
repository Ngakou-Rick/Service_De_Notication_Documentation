import Link from "next/link";
import classes from "./cards.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket,     // Getting Start 
  faEnvelope,   // SMS Notification 
  faEnvelopeOpenText, // Email Notification
  faBell,       // Push Notification
  faComments,   // WhatsApp Notification
  faCode        // DevZone
} from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  return (
    <div className={classes.Cards}>
      <div className={classes.Card}>
        <Link href="/AboutRacine/Getting_Start/requirements">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faRocket} className={classes.Icon} /> 
            Getting Start
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Sms/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faEnvelope} className={classes.Icon} />
            SMS Notification
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <a href="/AboutRacine/Email/code">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className={classes.Icon} />
            Email Notifications
          </span>
        </a>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Push">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faBell} className={classes.Icon} />
            Push Notification
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Whatsapp/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faComments} className={classes.Icon} />
            WhatsApp Notification
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Routing/index">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faCode} className={classes.Icon} />
            DevZone
          </span>
        </Link>
      </div>
    </div>
  );
}
