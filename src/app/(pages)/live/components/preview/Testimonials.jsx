import React from 'react';
import { useSelector } from 'react-redux';

const Testimonials = () => {
  const testimonials = useSelector((state) => state.form.formData.testimonials);

  if (!testimonials || testimonials.length === 0) {
    // return <p style={{ color: '#333', textAlign: 'center', marginTop: '20px' }}></p>;
    return <></>
  }
  const header={
  
            fontSize: '12px',
            fontWeight: '600',
            color: 'gray',
            marginBottom: '12px',
            letterSpacing: '0.01em',
     
  }

  return (
    <div style={{ padding: '8px 0' }}>
      <div style={header}>
        Reviews
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          maxWidth: '500px',
          margin: '10px auto', // Center the grid
        }}
      >
        {testimonials.map((testimonial, index) => {
          const name = testimonial.name || 'User';
          const firstLetter = name.charAt(0).toUpperCase();

          return (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                padding: '10px',
                textAlign: 'left',
              }}
            >
              {/* Avatar and Name */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={name}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '10px',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: '#ccc',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      marginRight: '10px',
                    }}
                  >
                    {firstLetter}
                  </div>
                )}
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{name}</div>
                  <div style={{ fontSize: '14px', color: '#f5b50a', marginBottom: '5px' }}>
                    {'★'.repeat(testimonial.rating || 0)}
                    {'☆'.repeat(5 - (testimonial.rating || 0))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p style={{ fontSize: '13px', fontStyle: 'italic',  padding:"0" }}>"{testimonial.comment}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
