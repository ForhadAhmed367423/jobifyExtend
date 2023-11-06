
const JobCard = ({job}) => {
    const {image,name,author,type}=job||{};
    return (
        <div className="card w-full bg-base-100 shadow-xl">
          <figure><img src={image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{type}</div>
            </h2>
            <p>{author}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div> 
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
    );
};

export default JobCard;