import React from 'react'
import ContactForm from '../Component/contactForm';

const Home: React.FC = () => {
  return (
    <div>
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-green-400 to-lime-300 text-white p-8">
      
      <header className="absolute top-8 left-16 text-4xl font-extrabold pt-6 pl-5 bg-gradient-to-br from-purple-900 via-green-400 to-lime-300 bg-clip-text text-transparent">
        Kamah-01
      </header>

      <div className="flex items-center justify-center min-h-screen">
        <div className="flex max-w-6xl mx-auto space-x-10">
          <div className="text-start">
            <h1 className="text-6xl font-extrabold pb-8">Full-Stack Developer.</h1>
            <p className="text-lg mb-6">
              I like to craft solid and scalable frontend products <br /> with great
              user experiences.
            </p>
            <div className="grid grid-cols-2 gap-8 text-base text-white">
              <p>Skilled in React for building dynamic and responsive user interfaces.</p>
              <p>Experienced with Node.js and Golang for creating fast and scalable backend systems.</p>            
              <p>Strong focus on progressive enhancement & API development.</p>
            </div>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc2FOWSvj9h-hKh4gvqXs2jlVnpVNZKXqLg&s"
              alt="Your Image"
              className="rounded w-full h-72 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <ContactForm />
    
    </div>
  )
}

export default Home;
