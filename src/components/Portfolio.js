import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMiniWindow: false,
      selectedProject: null,
    };
  }

  // Function to toggle the visibility of the mini window and set the selected project
  toggleMiniWindow = (selectedProject) => {
    this.setState((prevState) => ({
      showMiniWindow: !prevState.showMiniWindow,
      selectedProject,
    }));
  };

  render() {
    const { resumeData } = this.props;
    const { showMiniWindow, selectedProject } = this.state;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => (
                  <div className="columns portfolio-item" key={index}>
                    <div className="item-wrap">
                      {/* Use a <div> with an onClick event to open the mini window */}
                      <div className="portfolio-link" onClick={() => this.toggleMiniWindow(item)}>
                        <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Mini window that appears when a project is clicked */}
        {showMiniWindow && (
          <div className="mini-window-container">
            <div className="mini-window">
              {/* Mini window content including the project image */}
              <img src={`${selectedProject.imgurl}`} className="mini-window-img" alt={selectedProject.name} />
              <h3>Project Details</h3>
              <p>{selectedProject.description}</p>
              <h6>{selectedProject.tools}</h6>
              {/* GitHub link */}
              
              <ul>
              <li>
                  GitHub: <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">{selectedProject.name}</a>
                </li>
              
              {/* Website link */}
              
                <li>
                  Website: <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">Visit the project</a>
                </li>
              </ul>
                
              
              {/* Add more details as needed */}
              {/* Close button to hide the mini window */}
              <button onClick={() => this.toggleMiniWindow(null)}>Close</button>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Portfolio;
