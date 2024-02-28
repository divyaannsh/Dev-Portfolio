export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">

    {/* Header Section */}
    <header className="bg-blue-500 text-white p-8">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <nav className="space-x-4">
          <a href="#projects">Projects</a>
          <a href="#about">About Me</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    {/* Animated Header Section */}
    <section className="relative">
      <div className="container mx-auto flex items-center justify-between p-8">
        <div className="w-1/2">
          <div className="text-6xl font-bold mb-4 text-blue-500 animate__animated animate__fadeInLeft">
            DIvyansh Srivastava
          </div>
          <p className="text-lg animate__animated animate__fadeInLeft">
            Crafting Seamless User Experiences: Empowering the Digital Realm as a Frontend Developer Extraordinaire
          </p>
        </div>
        <div className="w-1/2">
          {/* Add your graphic animation or image here */}
          <div className="h-64 w-64 bg-gray-300 animate__animated animate__fadeInRight">
            {/* Placeholder for graphic or image */}
          </div>
        </div>
      </div>
    </section>

    {/* Your content sections (Projects, About Me, Blogs, Contact) go here */}
    {/* Add your own content and styling as needed */}

  </div>
  )
}