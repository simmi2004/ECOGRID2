import React from 'react';

const Testimonials = () => {
  // 1. Array of testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Roger Scott",
      position: "Marketing Manager",
      image: "images/person_1.jpg",
      feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 2,
      name: "Roger Scott",
      position: "Interface Designer",
      image: "images/person_2.jpg",
      feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 3,
      name: "Roger Scott",
      position: "UI Designer",
      image: "images/person_3.jpg",
      feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 4,
      name: "Roger Scott",
      position: "Web Developer",
      image: "images/person_1.jpg",
      feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    }
  ];

  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Happy Clients</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* If using a slider library, wrap the map function with the slider component */}
            <div className="d-flex flex-wrap justify-content-center">
              {testimonials.map((item) => (
                <div key={item.id} className="col-md-4 px-2 mb-4">
                  <div className="testimony-wrap rounded text-center py-4 pb-5 bg-white shadow-sm">
                    <div 
                      className="user-img mb-2 mx-auto" 
                      style={{ 
                        backgroundImage: `url(${item.image})`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                    </div>
                    <div className="text pt-4">
                      <p className="mb-4 px-3">{item.feedback}</p>
                      <p className="name font-weight-bold mb-0">{item.name}</p>
                      <span className="position text-muted small">{item.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;