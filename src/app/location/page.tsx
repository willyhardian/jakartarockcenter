'use client';

export default function LocationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Location</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Location Information */}
        <div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Church Street<br />
                  Central Jakarta<br />
                  Indonesia 10110
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Service Times</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Sunday Service</p>
                    <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Youth Service</p>
                    <p className="text-gray-600">Friday 7:00 PM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Prayer Meeting</p>
                    <p className="text-gray-600">Wednesday 7:00 PM - 8:30 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Getting Here</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">By Car:</span> Parking available
                    in church parking lot
                  </p>
                  <p>
                    <span className="font-medium">By Bus:</span> Routes 101, 102
                    stop at Church Street Station
                  </p>
                  <p>
                    <span className="font-medium">By Train:</span> 10-minute walk
                    from Central Station
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone:{' '}
                  <a href="tel:+622112345678" className="hover:text-blue-600">
                    +62 21 1234 5678
                  </a>
                  <br />
                  Email:{' '}
                  <a
                    href="mailto:info@jakartarockcenter.org"
                    className="hover:text-blue-600"
                  >
                    info@jakartarockcenter.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664463317074!2d106.82287931476884!3d-6.175392395527974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1635825391234!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}