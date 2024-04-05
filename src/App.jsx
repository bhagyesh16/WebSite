import styles from './styles'
import { Stats, Services, Testinomial, Navbar, Home, Contact, Footer, Products, Company } from './components';
import { Analytics } from "@vercel/analytics/react"
const App = () => (
  <Analytics id="YOUR_VERCEL_ANALYTICS_ID">
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

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
  </Analytics>
);

export default App