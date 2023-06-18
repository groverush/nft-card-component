import { Hero, Content, Footer } from "./components"
const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <section className="w-full max-w-[350px] mx-auto mt-20 p-6 bg-primary  rounded-xl flex flex-col gap-y-6 shadow-xl shadow-black">
        <Hero />
        <Content />
      </section>
      <Footer />
    </div>
  )
}
export default App
