import { CheckId } from "../CheckId";

export const ProfileMe = () => {
  return (
    <>
      <section className="style-section text-section-start px-3 py-2">
        <CheckId />
      </section>
      <section className="style-section text-section-start px-2 my-3">
        <div class="row row-cols-2 m-0  pt-2">
          <div class="col border-bottom border-start d-flex justify-content-between">
            <div> 
              <p className="text-muted">نام و نا خانوادگی</p>
              <p className="fw-bold p-0">زهرا خاوری</p>
            </div>
            <i className="bi bi-plus-lg mt-4"></i>
          </div>
          <div class="col border-bottom">Column</div>
          <div class="col border-bottom border-start">Column</div>
          <div class="col border-bottom">
          <i className="bi bi-plus-lg mt-4"></i>
          </div>
          <div class="col border-bottom border-start">Column</div>
          <div class="col border-bottom">Column</div>
          <div class="col border-bottom border-start">Column</div>
          <div class="col">Column</div>
          <div class="col border-bottom border-start">Column</div>
        </div>
      </section>
      <section className="style-section text-section-start px-3 py-2">
        hefh
      </section>
    </>
  );
};
