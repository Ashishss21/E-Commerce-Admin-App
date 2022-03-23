import React from "react";
import Layout from "../../components/Layout";

const Home = () =>{
    return(
        <>
            <Layout>
                <div className="mt-5 p-5 bg-secondary text-white rounded text-center">
                    <h2>Welcome to Admin Dashboard!!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore incidunt modi dicta veritatis tenetur nulla, officiis optio nostrum fugit inventore rem ut, facere sed qui necessitatibus blanditiis quas? Sint, soluta!</p>
                </div>
            </Layout>
        </>
    );
}

export default Home;