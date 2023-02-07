import { useEffect } from 'react';

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'; //TailwindCSS class name

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear();

  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6 mt-4`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*LEFT SIDE*/}
            <h4 className=" text-white font-Arimo text-4xl">
              TODAY // <span className="text-3xl">{dd + '/' + mm + '/' + yyyy}</span>
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
