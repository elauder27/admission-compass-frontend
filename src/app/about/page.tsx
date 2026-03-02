import styles from "./about.module.css"
export default function AboutPage() {
  return (
    <main style={{ padding: "100px 20px" }}>
      
<p className={styles.title}>

 Our Mission: Making University Admissions Fair & Predictable 
    
</p>
    <p className={styles.description}>
         We're building Africa's most trusted admissions guidance platform, powered by data and driven by purpose.
                
             </p> 
              <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>

        </div>
         <h1 className={styles.subText}>
             Every year, nearly 2 million Nigerian students write JAMB, but less than 40% gain admission. Many of these rejections aren't due to low scores—they're the result of poor information and guesswork.

Students apply to impossible course combinations, chase prestige over probability, and waste years repeating exams. Parents spend fortunes on forms and coaching with no clear strategy.{" "}
</h1>
              <span className={styles.highlight}>We built Admission Compass to change this. We believe every student deserves to make informed, data-driven choices about their future.</span>
            
            </div>

            <p className={styles.title}>Our Core Values</p>
            </section>
              </main>     
  );
}