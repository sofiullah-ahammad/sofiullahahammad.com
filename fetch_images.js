fetch('http://localhost:3001').then(r => r.text()).then(t => {
  const regex = /<img[^>]+src="([^"]+)"[^>]*>/g;
  let m;
  while (m = regex.exec(t)) {
    console.log(m[1]);
  }
});
