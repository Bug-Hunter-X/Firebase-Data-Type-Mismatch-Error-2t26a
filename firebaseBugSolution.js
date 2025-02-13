function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Type checking before use
    if (typeof data.count === 'number') {
      console.log('Count:', data.count);
    } else {
      console.error('Error: count is not a number. Received:', typeof data.count);
      // Attempt to convert, if possible
      const convertedCount = parseInt(data.count, 10);
      if (!isNaN(convertedCount)) {
        console.log('Converted count:', convertedCount);
      } else {
        console.error('Conversion failed. Cannot proceed.');
      }
    }
  } else {
    console.log('No data available.');
  }
}

// ... Firebase setup ...

database.ref('myData').once('value', handleData);