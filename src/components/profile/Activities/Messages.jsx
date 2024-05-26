


export const Messages = () => {
  return (
    <section className="profile-container d-flex-flex-column-text-start">
      <div className="mx-4 my-3 pb-2">
        <h6 className="text-message">پیغام ها</h6>
      </div>
      <div className="border-bottom pb-2 d-flex">
        <button className=" button-style mx-3 text-muted">همه پیام ها</button>
        <button className="button-style text-muted d-flex">
           <div className="rotate-icon ms-1">
              <i className="bi bi-megaphone-fill"></i>
            </div>
            {"پیشنهاد ها "}
        </button>
      </div>
    </section>
  );
};
