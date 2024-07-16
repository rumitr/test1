import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const cookiesJSON = cookieStore.getAll();

  return new Response(JSON.stringify(cookiesJSON), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
