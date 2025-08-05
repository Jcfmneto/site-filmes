import FooterTitle from './FooterTitle'
import Button from './Button'
import Logo from '../header/Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 px-8 py-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full  flex justify-center mb-4">
          <Logo />
        </div>
        <span className="border-b-2 mb-4 border-gray-500 sm:justify-start">
          <FooterTitle />
        </span>

        <div className="flex gap-4 mb-10">
          <Button path="/login">Login</Button>
          <Button path="/register">Register</Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
