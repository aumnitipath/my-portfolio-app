import "./Portfolio.css";
import pictures1 from "/src/assets/images/portfolio-1.png";
import pictures2 from "/src/assets/images/portfolio-2.png";
import pictures3 from "/src/assets/images/portfolio-3.png";
import pictures4 from "/src/assets/images/portfolio-4.png";
import pictures5 from "/src/assets/images/portfolio-5.png";
import pictures6 from "/src/assets/images/portfolio-6.png";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-text-head">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-text-more">
          See More <span>→</span>
        </div>
      </div>
      <div className="portfolio-box">
        <div className="portfolio-grid">
          <img src={pictures1} />
        </div>
        <div className="portfolio-grid">
          <img src={pictures2} />
        </div>
        <div className="portfolio-grid">
          <img src={pictures3} />
        </div>
        <div className="portfolio-grid">
          <img src={pictures4} />
        </div>
        <div className="portfolio-grid">
          <img src={pictures5} />
        </div>
        <div className="portfolio-grid">
          <img src={pictures6} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
