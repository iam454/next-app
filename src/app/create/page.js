"use client";

import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch("http://localhost:9999/topics", options)
          .then((res) => res.json())
          .then((res) => {
            const lastId = res.id;
            router.push(`/read/${lastId}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
};

export default Create;
