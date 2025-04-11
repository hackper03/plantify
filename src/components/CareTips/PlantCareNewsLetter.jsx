import React from 'react'

const PlantCareNewsLetter = () => {
  return (
    <div class="mt-16 bg-green-600 rounded-xl p-8 text-center">
    <h3 class="text-xl md:text-2xl font-bold text-white mb-4">
      Get Weekly Plant Care Tips
    </h3>
    <p class="text-green-100 mb-6 max-w-xl mx-auto">
      Subscribe to our newsletter and receive seasonal care tips,
      exclusive plant guides, and early access to new plant arrivals.
    </p>
    <form class="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Your email address"
        class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
        required
      />
      <button
        type="submit"
        class="px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-green-50 transition duration-300 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  </div>
  )
}

export default PlantCareNewsLetter