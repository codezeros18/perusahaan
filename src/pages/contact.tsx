// import React from 'react'

const contact = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’re here to answer your questions and help with any inquiries.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Our Office</h3>
            <p>
              3325 North Hawthorne Street <br />
              Chattanooga, TN 37406
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p>(855) 753-BOILER</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p>info@industrialboiler.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Hours</h3>
            <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>

        {/* Map Embed */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default contact