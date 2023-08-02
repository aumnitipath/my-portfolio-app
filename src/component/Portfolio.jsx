import "./Portfolio.css";
import pictures from "../assets/data/dataPortfolio";

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
        {pictures.map((item) => {
          return (
            <div key={item.id} className="portfolio-grid">
              <img src={item.pictureUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
