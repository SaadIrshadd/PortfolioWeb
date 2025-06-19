import React from 'react';

export default function Project() {
  return (
    <div className="container-fluid my-4">
      <div className="row">

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src="#" className="card-img-top" alt="Card 1" />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Short content.</p>
              </div>
              <a href="/" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src="/" className="card-img-top" alt="Card 2" />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">This is longer content to test how button stays at the bottom no matter what.</p>
              </div>
              <a href="#" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src="/" className="card-img-top" alt="Card 3" />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Another short content card.</p>
              </div>
              <a href="/" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src="/" className="card-img-top" alt="Card 4" />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">Another short content card.</p>
              </div>
              <a href="/" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
