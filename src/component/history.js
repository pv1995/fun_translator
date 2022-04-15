function History({translations}) {
  return (
    <div className="accordion row justify-content-center"  data-spy="scroll" id="accordion">
      {translations?.map((t,i) => {
        return (
            <div key={i} className="card w-75">
              <div className="m-2" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#test${i}`}
                    aria-expanded="false"
                  >
                    {t._phrase}
                  </button>
                </h2>
              </div>
      
              <div
                id={`test${i}`}
                className="collapse card-header"
                data-parent="#accordion"
              >
              <h5 className="mt-2">
              {t._language} :
              </h5>
                <div className="m-2">
                {t._translation}
                </div>
              </div>
            </div>
        );
      })}
      </div>
   
  );
}

export default History;
