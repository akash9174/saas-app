import { createSlice } from  '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        title: '',
        description: '',
        cta:'',       
        heroImage: '',
        heroFileName: '',
        heroFileSize: '',
        heroFileSize: '',
        imageFile: '',
        videoUrl: '',
        testimonials:'',
        faqs:''
    }

}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormField(state, action) {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    updateFormFields(state, action) {
      Object.entries(action.payload).forEach(([key, value]) => {
        state.formData[key] = value;
      });
    },

    // ✅ FAQ reducers
    addFaq(state, action) {
      state.formData.faqs = [...(state.formData.faqs || []), action.payload];
    },
    editFaq(state, action) {
      const { index, updatedFAQ } = action.payload;
      if (state.formData.faqs && state.formData.faqs[index]) {
        state.formData.faqs[index] = updatedFAQ;
      }
    },
    deleteFaq(state, action) {
      state.formData.faqs = state.formData.faqs.filter((_, i) => i !== action.payload);
    },

    // ✅ Testimonial reducers
    addTestimonial(state, action) {
      state.formData.testimonials = [...(state.formData.testimonials || []), action.payload];
    },
    editTestimonial(state, action) {
      const { index, updated } = action.payload;
      if (state.formData.testimonials && state.formData.testimonials[index]) {
        state.formData.testimonials[index] = updated;
      }
    },
    deleteTestimonial(state, action) {
      state.formData.testimonials = state.formData.testimonials.filter((_, i) => i !== action.payload);
    }
  }
});


export const {
  updateFormField,
  updateFormFields,
  addFaq,
  editFaq,
  deleteFaq,
  addTestimonial,
  editTestimonial,
  deleteTestimonial
} = formSlice.actions;

export default formSlice.reducer

export const selectFormData = (state) => state.form.formData;

export const selectTestimonials = createSelector(
  [selectFormData],
  (formData) => formData.testimonials || []
);

export const selectFaqs = createSelector(
  [selectFormData],
  (formData) => formData.faqs || []
);