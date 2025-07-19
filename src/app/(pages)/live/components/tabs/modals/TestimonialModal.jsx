'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial, editTestimonial } from '@/app/redux/features/formSlice';
import ModalWrapper from './ModalWrapper';
import { selectTestimonials } from '@/app/redux/features/formSlice';

export default function TestimonialModal({ onClose, testimonialToEdit }) {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  // const testimonials = useSelector((state) => state.form.formData.testimonials || []);
  const testimonials = useSelector(selectTestimonials);

  useEffect(() => {
    if (testimonialToEdit) {
      setName(testimonialToEdit.name || '');
      setComment(testimonialToEdit.comment || '');
      setPhoto(testimonialToEdit.photo || '');
      setRating(testimonialToEdit.rating || 0);
    } else {
      setName('');
      setComment('');
      setPhoto('');
      setRating(0);
    }
  }, [testimonialToEdit]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const data = { name, comment, photo, rating };

    if (testimonialToEdit && typeof testimonialToEdit.index === 'number') {
      dispatch(editTestimonial({ index: testimonialToEdit.index, updated: data }));
    } else {
      const exists = testimonials.find(
        (t) => t.name === data.name && t.comment === data.comment
      );
      if (!exists) {
        dispatch(addTestimonial(data));
      }
    }

    onClose(); // close modal after submit
  };

  return (
    <ModalWrapper title={testimonialToEdit ? 'Edit Testimonial' : 'Add Testimonial'} onClose={onClose}>
      <label>Photo *</label>
      <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />

      {photo && (
        <img
          src={photo}
          alt="Preview"
          style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
        />
      )}

      <label>Name *</label>
      <input
        type="text"
        placeholder="Enter name"
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Comment</label>
      <textarea
        placeholder="Enter comment"
        maxLength={300}
        style={styles.textarea}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <label>Rating *</label>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((val) => (
          <span
            key={val}
            onClick={() => setRating(val)}
            style={{
              fontSize: '20px',
              cursor: 'pointer',
              color: rating >= val ? 'gold' : '#ccc'
            }}
          >
            ★
          </span>
        ))}
      </div>

      <button style={styles.button} onClick={handleSubmit}>
        {testimonialToEdit ? 'Update Testimonial' : 'Add Testimonial'}
      </button>
    </ModalWrapper>
  );
}

const styles = {
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '95%',
    marginBottom: '10px'
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '95%',
    minHeight: '80px',
    marginBottom: '10px'
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '10px'
  },
  button: {
    background: 'black',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '6px',
    border: 'none',
    marginTop: '10px',
    cursor: 'pointer',
  }
};
