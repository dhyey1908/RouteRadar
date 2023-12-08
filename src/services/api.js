const API_URL = 'https://wseci154uk.execute-api.ap-south-1.amazonaws.com/dev';

async function login(email, password) {
  const response = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 200) {
    const data = await response.json();
    

    return data;
  } else {
    throw new Error('Failed to sign in');
  }
}

export { login };
