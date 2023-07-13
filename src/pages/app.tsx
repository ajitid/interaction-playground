import { Link, Route } from "wouter";
import { HtcHd2HomeDock } from "./htc-hd2-home-dock";
import { QlocktwoClock } from "./qlocktwo-clock";
import { Playground } from "./playground";

export function App() {
  return (
    <div
      className="min-h-screen antialiased break-words font-sans lining-nums" /* any global text or bg color here */
    >
      <Route path="/" component={Home} />
      <main>
        <Route path="/qlocktwo-clock" component={QlocktwoClock} />
        <Route path="/htc-hd2-home-dock" component={HtcHd2HomeDock} />
        <Route path="/pg" component={Playground} />
      </main>
    </div>
  );
}

const Home = () => (
  <>
    <header>
      <h1 className="font-mono text-3xl">exploring interactions</h1>
    </header>

    <main>
      <PageLink text="QLOCKTWO clock" link="/qlocktwo-clock" />
      <PageLink text="Home dock for HTC HD2" link="/htc-hd2-home-dock" />
    </main>
  </>
);

const PageLink = (props: { text: string; link: string }) => (
  <>
    <Link to={props.link}>
      <a className="text-blue-700 block">{props.text}</a>
    </Link>
  </>
);
