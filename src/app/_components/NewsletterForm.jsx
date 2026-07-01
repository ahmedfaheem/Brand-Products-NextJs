'use client';

import { useActionState } from 'react';
import { subscribeToNewsletter } from '../actions'; // Import the server action

export default function NewsletterForm() {

  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, null);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto my-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Join our Newsletter</h3>
      <p className="text-gray-500 text-sm mb-6">Get the latest deals and tech news.</p>

      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            name="email" 
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

      
        
        {state?.error && (
          <div className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg">
            ⚠️ {state.error}
          </div>
        )}

        {state?.success && (
          <div className="text-green-700 text-sm font-medium bg-green-50 p-3 rounded-lg">
            ✅ {state.success}
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isPending ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}