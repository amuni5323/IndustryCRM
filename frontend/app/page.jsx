'use client';

import FlipCard from '../components/FlipCard';

export default function HomePage() {
  const services = [
    {
      name: 'Company',
      description: 'Manage your company effectively.',
      image: '/Images/CompanyLogo.png',
      path: '/register/company',
    },
    {
      name: 'Employee',
      description: 'Tools for employee management.',
      image: '/Images/employeeLogo.png',
      path: '/register/employee',
    },
    {
      name: 'Customer',
      description: 'Enhance customer relationships.',
      image: '/Images/customerLogo.png',
      path: '/register/customer',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our CRM</h1>
        <p className="text-xl text-gray-700">
          Your trusted partner in customer relationship management.
        </p>
      </header>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Services</h2>
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-4 space-y-4 md:space-y-0">
          {services.map((service) => (
            <FlipCard key={service.name} service={service} />
          ))}
        </div>
        <p className="mt-3 text-lg text-gray-800">
          Our CRM system is designed to help you manage your customer relationships effectively and efficiently.
        </p>
      </section>
       {/* About Us Section */}
       <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-800">
          We are a dedicated team committed to providing top-notch CRM solutions to businesses of all sizes.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="py-7">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-800">Email: contact@ourcrm.com</p>
        <p className="text-lg text-gray-800">Phone: (123) 456-7890</p>
        <p className="text-lg text-gray-800">
          Address: 123 CRM Lane, Business City, BC 12345
        </p>
      </section>
    </main>

    
  );
}
