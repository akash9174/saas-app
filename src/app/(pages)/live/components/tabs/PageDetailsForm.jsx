'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BottomButton from './components/BottomButton';
import HeroImageUpload from './components/HeroImageUpload';
import FAQModal from './modals/FAQModal';
import TestimonialModal from './modals/TestimonialModal';
import './PaymentDetailsForm.css';
import '../preview/my-tailwind.css'
import { useSelector,useDispatch } from 'react-redux';
import { updateFormField , addTestimonial,  editTestimonial} from '@/app/redux/features/formSlice';
import { selectFaqs } from '../../../../redux/features/formSlice';
import { selectTestimonials } from '../../../../redux/features/formSlice';



const PlaygroundApp = dynamic(() => import('../../../../../package/App'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

import '../../../../../package/index.css';
import { flipDirection } from 'lexical';

export default function PageDetailsForm() {
  const dispatch= useDispatch()
  const {title, cta}=useSelector((state)=> state.form.formData)
  
  console.log("reducer state:", useSelector((state) => state.form.formData));

    

  const [showFAQ, setShowFAQ] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
 
  const [ openMenuIndex, setOpenMenuIndex] = useState({ type: null, index: null });
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [editingFAQ, setEditingFAQ] = useState(null);


  // const testimonials = useSelector((state) => state.form.formData.testimonials || []);
  const testimonials = useSelector(selectTestimonials);

// const faqs = useSelector((state) => state.form.formData.faqs || []);
const faqs = useSelector(selectFaqs);
console.log("faq: ",faqs)

   const handleChange=(e)=>{
    dispatch(updateFormField({name: e.target.name, value: e.target.value}))
   }





   const handleAddFAQ = (faq) => {
    const currentFaqs = useSelector((state) => state.form.formData.faqs || []);
    if (!currentFaqs.find((f) => f.question === faq.question)) {
      dispatch(addFaq(faq));
    }
    setShowFAQ(false);
  };
  

  const handleEditFAQ = (updatedFAQ) => {
    if (editingFAQ && typeof editingFAQ.index === 'number') {
      dispatch(editFaq({ index: editingFAQ.index, updatedFAQ }));
    }
    setShowFAQ(false);
    setEditingFAQ(null);
  };
  


  const handleAddTestimonial = (testimonial) => {
    const current = useSelector((state) => state.form.formData.testimonials || []);
    const exists = current.find((t) => t.name === testimonial.name && t.comment === testimonial.comment);
    if (!exists) {
      dispatch(addTestimonial(testimonial));
    }
    setShowTestimonial(false);
  };
  
  const handleEditTestimonial = (updated) => {
    if (editingTestimonial && typeof editingTestimonial.index === 'number') {
      dispatch(editTestimonial({ index: editingTestimonial.index, updated }));
    }
    setShowTestimonial(false);
    setEditingTestimonial(null);
  };
  


  const styles = {
    label: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '0.4rem',
      display: 'block',
    },
    sectionContainer: {
      marginTop: '1rem',
    },
    sectionHeading: {
      fontWeight: 'bold',
      fontSize: '1rem',
      marginBottom: '0.6rem',
      color: '#222',
    },
    sectionToggle: {
      display: 'block',
      width: '100%',
      backgroundColor: '#f4f4f4',
      color: '#222',
      padding: '0.6rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '6px',
      marginBottom: '0.5rem',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'background 0.2s ease-in-out',
    },
    faqCard: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: '10px',
      marginBottom: '10px',
    },
    faqQuestion: {
      fontWeight: '600',
      marginBottom: '4px',
    },
    faqAnswer: {
      margin: 0,
    },
    addLink: {
      color: '#007bff',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginTop: '8px',
    },
  };

  return (
    <>
    <div className='' style={{backgroundColor:"lightblueas"}}>

   
      <label htmlFor="title" style={styles.label}>Payment Page Title <span style={{ color: 'red' }}>*</span></label>
      <input
        id="title"
        type="text"
        name="title"
        value={title || ''}
        onChange={handleChange}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <HeroImageUpload  />

      <label htmlFor="description" style={styles.label}>Description</label>
      <div id="description" style={{ marginBottom: '1rem' }}>
        <PlaygroundApp />
      </div>

      <label htmlFor="cta" style={styles.label}>CTA Button Text</label>
      <input
        id="cta"
        type="text"
        name="cta"
        value={cta || ''}
        onChange={handleChange}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

     {/* ----------------------------------- buttons section starts from here------------------------- */}
      {/* Optional Sections Toggle */}
      <div style={styles.sectionContainer}>
        <h3 style={styles.sectionHeading}>Optional Sections</h3>

        {testimonials.length > 0 && (
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '16px',
              marginTop: '1.5rem',
              marginBottom: '1.5rem', // 👈 adds space below
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            {/* Header with Toggle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>
                Testimonials
              </h4>
              <div
                style={{
                  width: '36px',
                  height: '20px',
                  borderRadius: '999px',
                  backgroundColor: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    transform: 'translateX(16px)',
                  }}
                />
              </div>
            </div>

            {/* Testimonial Entries */}
            {testimonials.map((t, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: index !== testimonials.length - 1 ? '1px solid #f0f0f0' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  {/* Drag Handle */}
                  <div style={{ fontSize: '1rem', color: '#bbb', cursor: 'grab' }}>⋮⋮</div>

                  {/* Avatar + Text */}
                  {t.photo && (
                    <img
                      src={t.photo}
                      alt="testimonial"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>{t.name}</div>
                    <p style={{ margin: '2px 0', fontSize: '0.85rem', color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {t.comment}
                    </p>
                    {t.rating && (
                      <span style={{ fontSize: '0.8rem', color: '#999' }}>{t.rating} ⭐</span>
                    )}
                  </div>
                </div>

                {/* 3-dot menu */}
                <div style={{ position: 'relative' }}>
                  <div
                    style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#666' }}
                    onClick={() =>
                      setOpenMenuIndex(
                        openMenuIndex.type === 'testimonial' && openMenuIndex.index === index
                          ? { type: null, index: null }
                          : { type: 'testimonial', index }
                      )
                    }

                  >
                    ⋮
                  </div>

                  {openMenuIndex.type === 'testimonial' && openMenuIndex.index === index && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '28px',
                        right: '0',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                        width: '140px',
                        overflow: 'hidden',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {/* Edit Button */}
                      <div
                        onClick={() => {
                          setEditingTestimonial({ ...t, index }); // store testimonial + index
                          setShowTestimonial(true);               // open the modal
                          setOpenMenuIndex({ type: null, index: null });
                          ;                 // close menu
                        }}
                        style={{
                          padding: '10px 14px',
                          cursor: 'pointer',
                          fontSize: '0.92rem',
                          color: '#333',
                          backgroundColor: '#fff',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => (e.target.style.background = '#f9f9f9')}
                        onMouseLeave={(e) => (e.target.style.background = '#fff')}
                      >
                        ✏️ Edit
                      </div>

                      {/* Delete Button */}
                      <div
                        onClick={() => {
                          const updatedTestimonials = testimonials.filter((_, i) => i !== index);
                          setTestimonials(updatedTestimonials);
                          setFormData({ ...formData, testimonials: updatedTestimonials });
                          setOpenMenuIndex({ type: null, index: null });
                          ;
                        }}
                        style={{
                          padding: '10px 14px',
                          cursor: 'pointer',
                          fontSize: '0.92rem',
                          color: '#d9534f',
                          backgroundColor: '#fff',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => (e.target.style.background = '#fdf2f2')}
                        onMouseLeave={(e) => (e.target.style.background = '#fff')}
                      >
                        🗑️ Delete
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}

            <hr style={{ borderTop: '1px solid #f0f0f0', marginTop: '12px', marginBottom: '8px' }} />

            {/* Add Button */}
            <p
              style={{
                color: '#007bff',
                cursor: 'pointer',
                fontSize: '0.9rem',
                marginTop: '12px',
              }}
              onClick={() => setShowTestimonial(true)}
            >
              + Add Testimonial
            </p>
          </div>
        )}


        {faqs.length > 0 && (
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '16px',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            {/* Header with Toggle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>
                Frequently Asked Questions (FAQs)
              </h4>
              <div
                style={{
                  width: '36px',
                  height: '20px',
                  borderRadius: '999px',
                  backgroundColor: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    transform: 'translateX(16px)',
                  }}
                />
              </div>
            </div>

            {/* FAQ Entries */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: index !== faqs.length - 1 ? '1px solid #f0f0f0' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <div style={{ fontSize: '1rem', color: '#bbb', cursor: 'grab' }}>⋮⋮</div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      color: '#333',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {faq.question}
                  </div>
                </div>

                {/* 3-dot Menu */}
                <div style={{ position: 'relative' }}>
                  <div
                    style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#666' }}
                    onClick={() =>
                      setOpenMenuIndex(
                        openMenuIndex.type === 'faq' && openMenuIndex.index === index
                          ? { type: null, index: null }
                          : { type: 'faq', index }
                      )
                    }

                  >
                    ⋮
                  </div>

                  {openMenuIndex.type === 'faq' && openMenuIndex.index === index && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '28px',
                        right: '0',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                        width: '140px',
                        overflow: 'hidden',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      <div
                        onClick={() => {
                          setEditingFAQ({ ...faq, index });
                          setShowFAQ(true);
                          setOpenMenuIndex({ type: null, index: null });
                          ;
                        }}
                        style={{
                          padding: '10px 14px',
                          cursor: 'pointer',
                          fontSize: '0.92rem',
                          color: '#333',
                          backgroundColor: '#fff',
                          borderBottom: '1px solid #f0f0f0',
                        }}
                      >
                        ✏️ Edit
                      </div>

                      <div
                        onClick={() => {
                          const updated = faqs.filter((_, i) => i !== index);
                          setFaqs(updated);
                          setFormData({ ...formData, faqs: updated });
                          setOpenMenuIndex({ type: null, index: null });
                          ;
                        }}
                        style={{
                          padding: '10px 14px',
                          cursor: 'pointer',
                          fontSize: '0.92rem',
                          color: '#d9534f',
                          backgroundColor: '#fff',
                        }}
                      >
                        🗑️ Delete
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}


            <hr style={{ borderTop: '1px solid #f0f0f0', marginTop: '12px', marginBottom: '8px' }} />

            {/* Add FAQ Link */}
            <p
              style={{
                color: '#007bff',
                cursor: 'pointer',
                fontSize: '0.9rem',
                marginTop: '12px',
              }}
              onClick={() => setShowFAQ(true)}
            >
              + Add FAQs
            </p>
          </div>
        )}


      </div>

      <button style={styles.sectionToggle} onClick={() => setShowTestimonial(true)}>
        💬 Testimonials
      </button>

      <button style={styles.sectionToggle} onClick={() => setShowFAQ(true)}>
        ❓ FAQ
      </button>


      {/* Modals */}
      {showTestimonial && (
        <TestimonialModal
          onClose={() => {
            setShowTestimonial(false);
            setEditingTestimonial(null);
          }}
          onAddTestimonial={handleAddTestimonial}
          onEditTestimonial={(updated) => {
            if (editingTestimonial && typeof editingTestimonial.index === 'number') {
              const updatedTestimonials = [...testimonials];
              updatedTestimonials[editingTestimonial.index] = updated;
           
            }
            setShowTestimonial(false);
            setEditingTestimonial(null);
          }}
          testimonialToEdit={editingTestimonial}
        />
      )}

      {showFAQ && (
        <FAQModal
          onClose={() => {
            setShowFAQ(false);
            setEditingFAQ(null);
          }}
          onAddFAQ={handleAddFAQ}
          onEditFAQ={handleEditFAQ}
          faqToEdit={editingFAQ}
        />
        
      )}
 </div>
    </>
    
  );
}
