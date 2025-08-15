import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <section id="home" className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </section>

    <section id="features" className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
      </div>
    </section>

    <section id="product" className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <CardDeal />
      </div>
    </section>

    <section id="clients" className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
        <Clients />
      </div>
    </section>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
