import { useState } from 'react'
import Social from 'src/components/Social'
import Settings from 'src/components/Settings'
import CountriesCell from 'src/components/CountriesCell'
import DailyCountsCell from 'src/components/DailyCountsCell'
import StatsCell from 'src/components/StatsCell'
import theme from 'src/theme'

const HomePage = () => {
  // const [log, setLog] = useState(false)
  const [defaultCountry, setDefaultCountry] = useState(['itl', 'Italy'])
  const [enabledCountries, setEnabledCountries] = useState([
    'itl',
    'kor',
    'usa'
  ])

  return (
    <>
      <link rel="stylesheet" href="/fonts.css" key="fonts" />
      <header className="container">
        <Social />
        <h1>COVID-19 Country Tracker</h1>
        <p>
          Visualize the 2020 COVID-19 pandemic, country-to-country. This graph
          shows{' '}
          <mark>
            how&nbsp;many days a country’s pandemic is behind or ahead of{' '}
            <strong>{defaultCountry[1]}</strong>
          </mark>
          . (E.g. it offsets each country since it last intersected.) Updated
          daily.
        </p>
        <p>
          Data from the WHO via{' '}
          <a href="https://www.worldometers.info/coronavirus/">Worldometers</a>.
        </p>
      </header>
      <section className="container swap">
        <Settings>
          {/* <label>
            <input
              type="checkbox"
              name="log"
              checked={log}
              onChange={(e) => setLog(e.target.checked)}
            />
            Log scale
          </label> */}
          <CountriesCell
            enabledCountries={enabledCountries}
            setEnabledCountries={setEnabledCountries}
            defaultCountry={defaultCountry[0]}
            setDefaultCountry={setDefaultCountry}
          />
        </Settings>
        <article>
          <DailyCountsCell
            defaultCountry={defaultCountry[0]}
            enabledCountries={enabledCountries}
          />
        </article>
      </section>
      <section className="container">
        <StatsCell />
      </section>
      <footer className="container">
        <p>
          By <a href="https://lachlanjc.me">@lachlanjc</a> +{' '}
          <a href="https://zachlatta.com">@zachlatta</a>, 2020.
        </p>
        <p>
          <a href="https://github.com/lachlanjc/covid19">Open source on GitHub</a>
        </p>
      </footer>
      <style jsx>{`
        header {
          padding-top: 2rem !important;
        }
        h1 {
          color: ${theme.colors.red};
          font-size: 3rem;
          line-height: 1.125;
          letter-spacing: -0.02em;
          margin-top: 0;
          margin-bottom: 1rem;
        }
        p {
          margin: 0 0 1rem;
          color: ${theme.colors.muted};
          max-width: 40rem;
          line-height: 1.75;
        }
        p mark {
          border-radius: 0.5em 0.25em;
          background: linear-gradient(
            -100deg,
            rgba(250, 247, 133, 0.5),
            rgba(250, 247, 133, 0.875) 95%,
            rgba(250, 247, 133, 0.25)
          );
          padding: 0.125em 0.375em;
          color: inherit;
        }
        @media (prefers-color-scheme: dark) {
          p {
            color: ${theme.colors.snow};
          }
          p mark {
            color: inherit;
            background: linear-gradient(
              -100deg,
              rgba(250, 247, 133, 0.25),
              rgba(250, 247, 133, 0.375) 95%,
              rgba(250, 247, 133, 0.125)
            );
          }
        }
        p strong {
          font-family: ${theme.fonts.sans};
        }
        section {
          margin: 0 auto 2rem !important;
        }
        .container {
          max-width: 64rem;
          padding: 0 1rem;
          margin: 1rem auto;
        }
        section {
          display: grid;
          grid-gap: 2rem;
        }
        footer {
          margin: 4rem auto 2rem !important;
          padding: 0 1rem;
          text-align: center;
        }
        footer p {
          margin: 0 auto 0.75rem;
        }
        header a,
        footer a {
          color: ${theme.colors.blue};
          text-decoration: underline;
          text-decoration-line: underline;
          text-decoration-color: initial;
          text-underline-position: under;
        }
        @media (max-width: 32em) {
          section.swap article {
            grid-row: 1;
          }
          section.swap aside {
            grid-row: 2;
          }
        }
        @media (min-width: 36em) {
          header {
            padding-top: 3rem !important;
          }
          section {
            grid-template-columns: 1fr 2fr;
          }
          footer {
            margin-bottom: 3rem !important;
          }
        }
        @media (min-width: 72em) {
          .container {
            max-width: 72rem;
            padding: 2rem 1rem;
          }
          section {
            grid-template-columns: 1fr 4fr;
          }
          p mark {
            margin-left: -0.375em;
          }
        }
      `}</style>
    </>
  )
}

export default HomePage
