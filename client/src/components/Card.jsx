import PropTypes from "prop-types";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gray-600 m-2 p-4 rounded-md'>
        <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>

        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover flex justify-center items-center text-white text-xs font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
            </div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button
            type='button'
            onClick={() => downloadImage(_id, photo)}
            className='outline-none bg-transparent border-none'
          >
            <img
              src={download}
              alt='download'
              className='w-6 h-6 object-contain invert'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  prompt: PropTypes.string,
  photo: PropTypes.string,
};

export default Card;
