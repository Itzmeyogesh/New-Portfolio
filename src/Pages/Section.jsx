// src/pages/Section.jsx

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen px-6 py-12 scroll-mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
