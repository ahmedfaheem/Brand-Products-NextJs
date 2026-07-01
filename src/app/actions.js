'use server';

export async function subscribeToNewsletter(prevState, formData) {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const email = formData.get('email');


  if (!email || typeof email !== 'string') {
    return { error: 'Email is required.' };
  }
  
  if (!email.includes('@') || !email.includes('.')) {
    return { error: 'Please enter a valid email address.' };
  }
 
  try {
    
    return { success: 'Thank you for subscribing to our newsletter!' };
    
  } catch (error) {
    return { error: 'Something went wrong. Please try again.' };
  }
}