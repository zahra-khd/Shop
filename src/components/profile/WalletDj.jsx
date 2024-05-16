

export const WalletDj = () => {

  const walletAndDj = [
    {
      title: "کیف پول",
      description: "0 تومان",
      labelIcon: "فعالسازی",
      icon: <i className="bi bi-chevron-compact-left"/>,
      route: "youWallet",
    },
    {
      title: "دیجی کلاب",
      description: "0 امتیاز",
      labelIcon: "مشاهده ی ماموریت ها",
      icon: <i className="bi bi-chevron-compact-left"/>,
      route: "youWallet",
    },
  ];
  
  return (
    <div>
      {walletAndDj.map((items, index) => (
        <button
          className="btn btn-with border-0 w-100 d-flex justify-content-between px-3"
          key={index}
        >
          <div className="text-section-start">
            <p>{items.title}</p>
            <p className="text text-info">
              {items.labelIcon}
              {items.icon}
            </p>
          </div>
          <p> {items.description}</p>
        </button>
      ))}
    </div>
  );
};
