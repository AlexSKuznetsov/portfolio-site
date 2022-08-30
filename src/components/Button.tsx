export const Button = () => {
  const handleClick = () => {
    location.href =
      'mailto:kuznecov.alexandr@gmail.com' +
      '&subject=Lets discuss new project';
  };

  return (
    <a
      className='p-1 mx-3 inline-flex gap-y-2 gap-x-2 flex-wrap items-center text-neutral-50 border-slate-100/30 border rounded-full hover:border-opacity-50  hover:text-white cursor-pointer'
      onClick={handleClick}
    >
      <span className='px-3 py-0.5 text-neutral-50 text-xs uppercase bg-blue-800 rounded-full'>
        Hire me
      </span>
      <span className='text-xs hover:text-neutral-300'>
        Let's discuss future opportunities
      </span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1'
        stroke='currentColor'
        className='w-5 h-5 pr-1'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    </a>
  );
};
