import styles from './styles'
import { Stats, Services, Testinomial, Navbar, Home, Contact, Footer, Products, Company } from './components';
import { Analytics } from "@vercel/analytics/react"
const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Analytics id="VERCEL">
      </Analytics>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Services />
          <Products />
          <Testinomial />
          <Company />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
);

export default App