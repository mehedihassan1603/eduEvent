const Contact = () => {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions or inquiries, feel free to contact us using
          the information below.
        </p>
        <div className="mt-4">
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
          {/* Add more contact information here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
