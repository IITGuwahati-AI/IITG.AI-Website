import React, { Component } from "react";
import PageHeader from "./PageHeader";
import PublicationCard from "./Publications/publicationCard";
import papers from "./Publications/papers";

class Publicationss extends Component {
  render() {
    return (
      <div className="bg=light">
        <PageHeader
          title="Publications"
          description="Shown below is a collection of all papers and publications that the members of IITG.ai community have contributed to in the recent years."
          backgroundImage="publications/header.jpg"
        />
        <div className="portfolio">
        <div className="container">
        <div className="section" style={{ textContent: "center" }}>
              <h2 className="section-title fancy-heading">
                {" "}
                Papers Published by us{" "}
              </h2>
            </div>
          <div className="portfolio_items">
            <PublicationCard
              Title={papers[0].title}
              name={papers[0].name}
              authors={papers[0].authors}
              year={papers[0].year}
              description={papers[0].description}
              preprint={papers[0].preprint}
              code={papers[0].code}
            />
            <br></br>
            <PublicationCard
              Title={papers[1].title}
              name={papers[1].name}
              authors={papers[1].authors}
              year={papers[1].year}
              description={papers[1].description}
              preprint={papers[1].preprint}
              code={papers[1].code}
            />
            <br></br>
            <PublicationCard
              Title={papers[2].title}
              name={papers[2].name}
              authors={papers[2].authors}
              year={papers[2].year}
              description={papers[2].description}
              preprint={papers[2].preprint}
              code={papers[2].code}
            />
            <br></br>
            <PublicationCard
              Title={papers[3].title}
              name={papers[3].name}
              authors={papers[3].authors}
              year={papers[3].year}
              description={papers[3].description}
              preprint={papers[3].preprint}
              code={papers[3].code}
            />
            <br></br>
            <PublicationCard
              Title={papers[4].title}
              name={papers[4].name}
              authors={papers[4].authors}
              year={papers[4].year}
              description={papers[4].description}
              preprint={papers[4].preprint}
              code={papers[4].code}
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Publicationss;
