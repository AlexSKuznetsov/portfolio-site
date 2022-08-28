export const Button = () => {
  const handleClick = () => {
    alert('Yeeesss!');
  };

  return (
    <button
      className='px-4 py-2 bg-yellow-400 text-sky-900 hover:text-black hover:bg-yellow-500 rounded-md shadow-sm'
      onClick={handleClick}
    >
      Hire me
    </button>
  );
};
