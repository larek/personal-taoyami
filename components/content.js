export default function content({ children, title }) {
  return (
    <div className='p-4'>
      <div className='section-title'>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}