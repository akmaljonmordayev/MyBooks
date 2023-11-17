const instance = axios.create({
    baseURL: 'https://reader-dslb.onrender.com/book/',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${YSW8WP0y01b9f4k6yVh3SxRV0OSzXHTZW4aTy1htS1kbMjWPtj1ySB6yVDe4rdmJ}`,
        'Content-Type': 'application/json',
      },
  });