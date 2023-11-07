import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title= "Jobify | Blog";
  }, []);
    return (
        <div className="min-h-screen">
            <h1 className="text-center text-4xl font-bold mb-10 ">Blog page</h1>
           <div className="container mx-auto mb-4">
           <div className="collapse collapse-arrow mb-5 bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What is an access token and refresh token? How do they work and where should we
store them on the client-side?
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse mb-5 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What is express js? What is Nest JS?
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse mb-20 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Explain My  code  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
           </div>
        </div>
    );
};

export default Blog;