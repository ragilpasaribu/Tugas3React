const Footer = () => {
  const nama = 'Ragil Sadewa Pasaribu';
  return (
    <div className="footer-container">
      <footer className="w-screen h-16 flex justify-center space-x-6 bg-yellow-500 items-center">
        <p className="font-mono font-bold text-black">COPY RIGHT BY: {nama}</p>
      </footer>
    </div>
  );
};
export default Footer;
