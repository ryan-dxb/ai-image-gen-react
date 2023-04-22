import React, { useState } from "react";
import { Card, Loader, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-xl uppercase text-[#6449ff]">{title}</h2>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="max-w-7xl">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images from the community.
        </p>
      </div>
      <div className="pt-16">
        <FormField />
      </div>

      <div className="mt-10 ">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchTerm && (
              <h2 className="font-mmedium text-[#666e75] text-xl mb-3">
                Showing results for{" "}
                <span className="text-[#222328]">{searchTerm}</span>
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
              {searchTerm ? (
                <RenderCards data={[]} title="Search Results" />
              ) : (
                <RenderCards data={[]} title="No Post Found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
