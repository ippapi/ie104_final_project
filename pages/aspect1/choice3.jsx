import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Choice_1{id}</h1>
      <p>Choide{1}.</p>
    </div>
  );
}