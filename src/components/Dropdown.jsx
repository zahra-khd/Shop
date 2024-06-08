export const Dropdown = ({ children , showDropdown  }) => {
  return (
    <>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-menu show start-50 rounded">{children}</div>
        </div>
      )}
    </>
  );
};
