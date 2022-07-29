async function getData(){
  const response = await fetch('../assets/books.json');
  const data = await response.json();
  return data
}

export { getData }