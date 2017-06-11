export const fetchTodo = (id) => {
  return $.ajax({
    method: 'GET',
    // url:
  });
};
export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    // url:
  });
};

export const createTodo = () => {
  return $.ajax({
    method: 'POST',
    // url:
    // data: { todo }
  });
};

export const deleteTodo = (todo) => {
  return $.ajax({
    method: 'DELETE'
  });
};

export const updateTodo = () => {
  return $.ajax({
    method: 'EDIT',

  });
};
