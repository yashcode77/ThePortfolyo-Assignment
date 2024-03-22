import React from 'react';

const Feedback = ({ dark, data }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          {data?.testimonials.map((feedback, index) => (
            <div className="testimonials_in" key={index}>
              <img src={feedback?.image?.url} alt="" />
              <div className="info">
                <div className="text">
                  <p>{feedback.review}</p>
                </div>
                <div className="details">
                  <h3 className="name">
                    <span>{feedback.name}</span>
                  </h3>
                  <span className="job">{feedback?.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
