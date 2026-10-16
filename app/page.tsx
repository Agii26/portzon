import LensToggle from "@/components/LensToggle";
import Project, { type ProjectData } from "@/components/Project";
import projects from "@/content/projects.json";

export default function Home() {
  return (
    <div className="wrap">
      <a className="skip" href="#work">Skip to work</a>
      <header>
        <span className="mark">BNZN.dev</span>
        <LensToggle />
      </header>
      <main id="main">
        <div className="hero">
          <div className="eyebrow">
            <span className="show-build">Lens: dev</span>
            <span className="show-verify">Lens: QA</span>
          </div>
          <h1>
            <span className="show-build">I build full-stack things that <em>ship</em>.</span>
            <span className="show-verify">I test what I build before <em>you</em> have to.</span>
          </h1>
          <p className="show-build">Django and PostgreSQL on the back, React and React Native on the front, Next.js when the app needs it. Flip the toggle to see how I checked each project.</p>
          <p className="show-verify">Right now my testing is manual and spec-driven: I write down what the thing should do, then check the output against it. Next on my list is automating the repeatable parts.</p>
        </div>

        <section id="work" aria-labelledby="w">
          <h2 id="w">Selected work</h2>
          <p className="sub">Same projects, two lenses. Press <kbd>B</kbd> or <kbd>V</kbd> to switch.</p>
          {(projects as ProjectData[]).map((p) => <Project key={p.slug} p={p} />)}
        </section>

        <section className="show-verify" aria-labelledby="q">
          <h2 id="q">How I write a test case</h2>
          <p className="sub">The format I use. Fill the rows with your own real runs.</p>
          <div className="scroll" tabIndex={0} role="region" aria-label="Sample test cases">
            <table>
              <thead><tr><th>ID</th><th>Scenario</th><th>Steps</th><th>Expected</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>TC-01</td><td>Login with wrong password</td><td>Open /login, enter valid email and bad password, submit</td><td>Error shown, no session created</td><td><span className="pill wait">fill in</span></td></tr>
                <tr><td>TC-02</td><td>Create trade with empty required field</td><td>Open new trade form, leave a required field blank, save</td><td>Inline validation, nothing saved</td><td><span className="pill wait">fill in</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer>
        <span>Rhey Christian Benzon · Bulacan, PH</span>
        <a href="https://github.com/Agii26">github.com/Agii26</a>
      </footer>
    </div>
  );
}
