import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className='max-w-7xl mx-auto bg-[#e6ebf4]'>
      <div>
        <h1 className='font-mono font-medium text-black text-[30px]'>
        Our Community&apos;s Contributions 
        </h1>
      </div>

      <div className='mt-10'>
        <FormField
          labelName=''
          type='text'
          name='text'
          placeholder='Search something...'
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='font-medium text-white text-xl mb-3'>
                Showing Resuls for{" "}
                <span className='text-[#6469ff]'>{searchText}</span>:
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title='No Search Results Found'
                />
              ) : (
                <RenderCards data={allPosts} title='No Posts Found' />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

RenderCards.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default Home;
