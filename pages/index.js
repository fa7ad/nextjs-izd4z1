import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  React.useEffect(function () {
    (function () {
      var e = 'ss-widget',
        t = 'script',
        a = document,
        r = window;
      var s, n, c;
      r.SS_WIDGET_TOKEN = 'tt-968dd3';
      r.SS_ACCOUNT = 'westwingstudio.surveysparrow.com';
      r.SS_SURVEY_NAME = 'Test-survey';
      if (!a.getElementById(e)) {
        var S = function () {
          S.update(arguments);
        };
        S.args = [];
        S.update = function (e) {
          S.args.push(e);
        };
        r.SparrowLauncher = S;
        s = a.getElementsByTagName(t);
        c = s[s.length - 1];
        n = a.createElement(t);
        n.type = 'text/javascript';
        n.async = !0;
        n.id = e;
        n.src = [
          'https://',
          'westwingstudio.surveysparrow.com/widget/',
          r.SS_WIDGET_TOKEN,
        ].join('');
        c.parentNode.insertBefore(n, c);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">The Demo!</a>
        </h1>
        <div id="ss_survey_widget"></div>
      </main>
    </div>
  );
}
