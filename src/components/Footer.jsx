const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-[90%] text-center py-4 mx-auto mt-8">
      <p className="text-slate-400">
        {" "}
        © Copyright Cooking Best {year} by Saidbek Xudayberdiyev
      </p>
    </div>
  );
};

export default Footer;
