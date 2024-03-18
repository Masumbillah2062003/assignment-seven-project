import login from '../../assets/images/profile.png';
import './Header.css'

const Header = () => {

    return (
        <div className="container mx-auto mt-10">
            <div className="navbar flex justify-between bg-base-200">
                <div className="">
                    <a className="btn btn-ghost text-xl lg:text-3xl font-bold ">Recipe Calories</a>
                </div>
                <div>
                    <ul className='flex items-center text-[#150B2BB3] text-base gap-11'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={login} />
                        </div>
                    </div>
                    <ul  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='background-img text-white flex justify-center items-center w-full h-[500px] text-center rounded-3xl mt-10'>
                    <div>
                        <h1 className='text-5xl font-bold leading-[66px]'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className='font-medium text-xl mt-7 leading-8'>
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className='font-semibold text-xl mt-10 space-x-6'>
                            <button className='p-5 bg-[#0BE58A] hover:bg-transparent border-2 border-[#0BE58A] hover:text-[#0BE58A] text-black rounded-[40px]'>Explore Now</button>
                            <button className='p-5 bg-transparent border-2 text-white hover:bg-transparent rounded-[40px]'>Our Feedback</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Header;