const api = process.env.REACT_APP_API;

export async function getAllTodos(success) {
  const response = await fetch(`${api}/todos`, {
    headers: {
      Accept: "application/json",
    },
  });

  await checkStatus(response);
  return await response.json();
}

export async function createTodo(data) {
  const response = await fetch(`${api}/todo`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  await checkStatus(response);
  return await response.json();
}

export async function updateTodo({ id, ...rest }) {
  const response = await fetch(`${api}/todos/${id}`, {
    method: "put",
    body: JSON.stringify(rest),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  await checkStatus(response);
  return await response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`${api}/todos/${id}`, {
    method: "delete",
    body: JSON.stringify({ id }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  await checkStatus(response);
  return await response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}
