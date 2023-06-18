import ethIcon from "../assets/images/icon-ethereum.svg"
import clockIcon from "../assets/images/icon-clock.svg"
import avatar from "../assets/images/image-avatar.png"
const Content = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h3 className="text-white text-xl font-semibold tracking-wide hover:text-secondary">
          <a href="#">Equilibrium #3429</a>
        </h3>
        <p className="my-3 font-thin">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between">
          <span className="flex items-center text-secondary gap-2">
            <img src={ethIcon} alt="eth-icon" />
            0.041ETH
          </span>

          <span className="flex items-center gap-2">
            <img src={clockIcon} alt="clock-icon" />3 days left
          </span>
        </div>
      </div>

      <hr />
      <div className="flex items-center gap-x-4">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 border-white border-2 rounded-full"
        />
        <p>
          Creation of{" "}
          <span className="text-white hover:text-secondary hover:cursor-pointer">
            Jules Wyvern
          </span>
        </p>
      </div>
    </section>
  )
}
export default Content
