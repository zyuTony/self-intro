// pages/index.js
export default function Home() {
  return (
    <div className="p-6 font-['Helvetica_Neue',_sans-serif] text-lg">
      <header className="mb-6">
        <h1 className="text-5xl font-bold">Tony Z. Yu</h1>
        <p className="my-3 text-base">
          yzy@uchicago.edu | 952-905-1778 |{" "}
          <a
            href="https://github.com/zyuTony"
            className="text-blue-600 hover:text-blue-800"
          >
            github
          </a>{" "}
          |{" "}
          <a
            href="https://medium.com/@zongyuan1998"
            className="text-blue-600 hover:text-blue-800"
          >
            medium
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/z-yu"
            className="text-blue-600 hover:text-blue-800"
          >
            linkedin
          </a>{" "}
        </p>
      </header>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Products</h2>
        <ul className="list-none ml-4">
          <li>
            <a
              href="https://findtimeframe.com"
              className="text-blue-600 hover:text-blue-800"
            >
              Interactive Retail Calendar
            </a>{" "}
            - I developed an interactive web tool for the{" "}
            <a
              href="https://nrf.com/resources/4-5-4-calendar"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              454 Retail Calendar
            </a>
            {", "}
            the industry-standard financial calendar used by major retailers.
            500+ active analyst users.
          </li>
          <li>
            <a
              href="https://eutra.co"
              className="text-blue-600 hover:text-blue-800"
            >
              Trader Insights
            </a>{" "}
            - I built a tool to provide trading insights on cryptocurrency. It
            scans all coins listed on Binance, provides signals for pair
            trading, and allows you to analyze crypto performance in different
            periods.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Works</h2>
        <ul className="list-none ml-4">
          <li>Data Scientist @ Gap Inc. --- since 2022</li>
          <li>Capstone Lead @ Inference Analytics Inc. --- 2022</li>
          <li>Analyst Intern at ChangingThePresent.org --- 2020</li>
          <li className="text-sm text-gray-600 mt-1">
            More details about my work experience on my LinkedIn profile
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Educations</h2>
        <ul className="list-none ml-4">
          <li>M.S. in Applied Data Science, Uchicago</li>
          <li>B.S. in Statistics, UC San Diego</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-none ml-4">
          <li>SQL, Python, JavaScript (React, Nextjs)</li>
          <li>
            Build ML Model, Retail Industry Metrics, Report Design, Make Website
          </li>
        </ul>
      </section>
      <footer className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Tony Z. Yu </p>
      </footer>
    </div>
  );
}
