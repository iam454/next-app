"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const Control = () => {
  const { id } = useParams();
  const router = useRouter();

  return (
    <ul>
      {!id && (
        <li>
          <Link href="/create">Create</Link>
        </li>
      )}
      {id && (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = {
                  method: "DELETE",
                };
                fetch(`http://localhost:9999/topics/${id}`, options)
                  .then((res) => res.json())
                  .then((res) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      )}
    </ul>
  );
};

export default Control;
