import React from 'react';

const Api = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: { revalidate: 1 },
  });
  return await res.json();
};

const Home = async () => {
  const data = await Api();
  console.log(data);

  return (
    <div>
      <h1>page</h1>
      {data?.map((v) => (
        <p key={v.id}>{v.title}</p>
      ))}
    </div>
  );
};

export default Home;
