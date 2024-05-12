export default function BirthDate({ children }) {
  return (
    <div className='birthdate-container'>
      {children}
      <hr className='birthdate-hr'></hr>
    </div>
  );
}
